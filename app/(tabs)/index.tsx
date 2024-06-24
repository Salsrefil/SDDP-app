import HowToUse from '@/components/HomePageComponents/HowToUse';
import Overview from '@/components/HomePageComponents/Overview';
import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image} from 'react-native';

export default function HomePage() { // keep file named index. App breaks down after renaming
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.contentContainer}>
        <Image
          source = {require('../../assets/images/AppLogo.png')}
          style = {styles.image}
        />
        <Text style={styles.acronym}>SDDiP</Text>
        <Overview />
        <HowToUse />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: "#21233D",
  },
  contentContainer: {
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