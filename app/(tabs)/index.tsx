import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function HomePage() { // keep file named index. App breaks down after renaming
  return (
    <View style={styles.view}>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
      flex: 1,
      backgroundColor: "#21233D",
  }
});