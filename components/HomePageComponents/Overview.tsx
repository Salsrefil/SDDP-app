import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Overview = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.header}>
                Overview
            </Text>
            <Text style={styles.content}>
                The main goal of this application is to provide user friendly interface for managing and configuring DHCP and PTP servers
                together with displaying crucial information about current server's states. With refresh rate of 1 second, application provides
                insight into the most up-to-date data.
            </Text>
        </View>
    );
};

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
        color: 'white',
        fontSize: 16,
        borderWidth: 3,
        borderRadius: 30,
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})

export default Overview;