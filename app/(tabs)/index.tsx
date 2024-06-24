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
        <Text style={styles.header}>Overview</Text>
        <Text style={styles.textField}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, nibh nec fermentum scelerisque, magna felis eleifend nulla, a accumsan dolor arcu vel turpis. Nulla tincidunt massa tristique nibh elementum tristique. Sed augue orci, tristique et leo ut, aliquam dapibus ligula. Pellentesque in lorem elementum, pulvinar tortor et, accumsan leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse venenatis et leo eget condimentum. Sed at massa lacus. Praesent porta felis id velit interdum vehicula. Quisque laoreet viverra commodo. Nunc eu convallis dui. Praesent ut accumsan leo, ac posuere lorem. Ut porttitor, ex id finibus laoreet, lorem orci varius dolor, vitae vestibulum libero quam at dui. Donec sed ultrices turpis, vitae tristique neque. Praesent bibendum, dui et hendrerit rhoncus, enim tellus porttitor ante, ac dapibus risus arcu sed erat. 
        </Text>
        <Text style={styles.header}>How to use</Text>
        <Text style={styles.textField}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, nibh nec fermentum scelerisque, magna felis eleifend nulla, a accumsan dolor arcu vel turpis. Nulla tincidunt massa tristique nibh elementum tristique. Sed augue orci, tristique et leo ut, aliquam dapibus ligula. Pellentesque in lorem elementum, pulvinar tortor et, accumsan leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse venenatis et leo eget condimentum. Sed at massa lacus. Praesent porta felis id velit interdum vehicula. Quisque laoreet viverra commodo. Nunc eu convallis dui. Praesent ut accumsan leo, ac posuere lorem. Ut porttitor, ex id finibus laoreet, lorem orci varius dolor, vitae vestibulum libero quam at dui. Donec sed ultrices turpis, vitae tristique neque. Praesent bibendum, dui et hendrerit rhoncus, enim tellus porttitor ante, ac dapibus risus arcu sed erat. 
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