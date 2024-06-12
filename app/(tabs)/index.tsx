import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function HomePage() { // keep file named index. App breaks down after renaming
  return (
    <View style={styles.view}>
      <Image
        source = {require('../../assets/images/AppLogo.png')}
        style = {styles.image}
      />
      <Text style={styles.acronym}>SDDiP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
      flex: 1,
      backgroundColor: "#21233D",
      alignItems: 'center'
  },
  image: {
    marginTop: 50,
    width: 150,
    height: 150,
    borderRadius: 50
  },
  acronym: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
});