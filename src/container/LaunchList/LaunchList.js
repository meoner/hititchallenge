import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {ListCard} from '../../components';
import {getTime} from '../../utils';

export function LaunchList() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    console.log('useEffect offset', offset);

    setisLoading(true);
    getData();
  }, [offset]);

  const getData = async () => {
    console.log('getData');
    let apiUrl = `https://lldev.thespacedevs.com/2.2.0/launch/?window_start__gte=${
      getTime().sixMonthAgo
    }&window_start__lte=${
      getTime().threeMonthLater
    }&limit=10&offset=${offset}&is_crewed=false&include_suborbital=true&related=false`;
    console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.next) {
          setData(data.concat(resJson.results));
          setisLoading(false);
        } else {
          setisLoading(true);
        }
      });
  };

  const renderList = ({item}) => {
    return <ListCard item={item} />;
  };

  const renderFooter = () => {
    return isLoading ? (
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <ActivityIndicator size="large" color="red" />
      </View>
    ) : null;
  };

  let handleLoadMore = () => {
    console.log('handle');
    setOffSet(offset + 10);
    setisLoading(true);
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderList}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
