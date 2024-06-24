import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const HowToUse = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.header}>
                How to Use
            </Text>
            <View style={styles.content}>
                <Text style={styles.textHeader}>Views</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        height: 'auto',
        width: 360,
        alignContent: 'center'
    },
    header: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },
    content: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#2B2E46',
        borderWidth: 3,
        borderRadius: 30,
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    textHeader: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default HowToUse;