import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text} from "react-native";

interface TimeDisplayProps {
    time: string;
}

const TimeDisplay: React.FunctionComponent<TimeDisplayProps> = ({time}) =>{

    return (
        <View style={stylesheet.timeDisplay}>
            <Text style={stylesheet.title}>
                Set Time
            </Text>
            <Text style={stylesheet.text}>
                {time}
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
        borderRadius: 40,
        marginTop: 10
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
        fontSize: 22
    }
});

export default TimeDisplay;
