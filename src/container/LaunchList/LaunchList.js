import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {ListCard, TitleDescription, Loading} from '../../components';
import {getTime} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';

export function LaunchList({navigation}) {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [offset, setOffSet] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setisLoading(true);
    getData();
  }, [offset]);

  const getData = async () => {
    let apiUrl = `https://lldev.thespacedevs.com/2.2.0/launch/?window_start__gte=${
      getTime().sixMonthAgo
    }&window_start__lte=${
      getTime().threeMonthLater
    }&limit=10&offset=${offset}&is_crewed=false&include_suborbital=true&related=false`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.next) {
          setData(data.concat(resJson.results));
          setisLoading(false);
        }
      });
  };

  const renderList = ({item}) => {
    function toDetail() {
      dispatch({type: 'SET_DATA', id: item});
      navigation.navigate('Details');
    }
    return (
      <View>
        <ListCard item={item} onPress={toDetail} />
        <TitleDescription item={item} />
      </View>
    );
  };

  const renderFooter = () => {
    return isLoading ? <Loading /> : null;
  };

  let handleLoadMore = () => {
    setOffSet(offset + 10);
    setisLoading(true);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderList}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
