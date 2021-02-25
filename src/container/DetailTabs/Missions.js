import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {FavButton} from '../../components';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import styles from './style';

export function Missions() {
  const [isFav, setisFav] = useState(false);
  const data = useSelector((state) => state.data);
  const userUid = auth().currentUser.uid;

  async function addFav() {
    await database().ref(userUid).push({id: data.id});
    setisFav(true);
  }

  useEffect(() => {
    database()
      .ref(userUid)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dbData = Object.values(snapshot.val());
          dbData.map((val) => (data.id === val.id ? setisFav(true) : null));
        }
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MISSION NAME</Text>
      <Text style={styles.desc}>{data.name}</Text>
      <Text style={styles.title}>TYPE</Text>
      <Text style={styles.desc}>{data.launch_service_provider.type}</Text>
      <Text style={styles.title}>DESCRIPTION</Text>
      <Text style={styles.desc}>{data.status.description}</Text>
      <FavButton isFav={isFav} onPress={addFav} />
    </View>
  );
}
