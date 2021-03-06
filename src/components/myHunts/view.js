import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import HuntCard from './subComponents/huntCard';

export default function myHuntsView({ myHunts, startHunting }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={myHunts}
        keyExtractor={hunt => hunt._id}
        showsVerticalScrollIndicator={false}
        renderItem={hunt => (
          <HuntCard
            hunt={hunt.item}
            startHunting={startHunting}
          />
        )}
      />
    </View>
  );
}
