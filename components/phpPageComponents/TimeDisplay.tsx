import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text} from "react-native";

function TimeDisplay() {
    const [time, setTime] = useState({
        fullTime: "00:00:00",
        offset: "0",
        date: "2024-06-12"
    });

    return (
        <View style={stylesheet.timeDisplay}>
            <Text style={stylesheet.title}>
                Set Time
            </Text>
            <Text style={stylesheet.text}>
                {time.fullTime}
            </Text>
        </View>
    );
}

const stylesheet = StyleSheet.create({
    timeDisplay: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2E46',
        width: '80%',
        height: 80,
        borderRadius: 40
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        height: 32,
        fontSize: 24
    },
    text: {
        textAlign: 'center',
        color: 'white',
        width: '100%',
        height: 40,
        fontSize: 32//2rem == 32px
    }
});

export default TimeDisplay;
