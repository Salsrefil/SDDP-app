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
        <Text style={styles.header}>How to use</Text>
        <Text style={styles.textField}>
          Application is split into three views: Home, PTP, DHCP, all accessible from navigation bar location at the bottom of screen.
          Home View - The start point of application.
        </Text>
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
  },
  header: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold'
  },
  textField: {
    height: 'auto',
    width: 360,
    backgroundColor: '#2B2E46',
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'white',
    fontSize: 16,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: 'white'
  }
});