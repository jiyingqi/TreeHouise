import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './firebase';

export default function App() {

  const [treeHouseTest, setTreeHouseTest] = useState([]);
  useEffect(() => {
    const ref = db.collection('test');
    ref.onSnapshot((query) => {
        const objs = [];
        query.forEach((doc) => {
          objs.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setTreeHouseTest(objs);
      });
  }, [])

  return (
    <View style={styles.container}>
      {treeHouseTest.map((obj) => (
        <View id={obj.id}>
          <Text>{obj.name}</Text>
          <Text>{obj.butt}</Text>
        </View>
  ))}
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
