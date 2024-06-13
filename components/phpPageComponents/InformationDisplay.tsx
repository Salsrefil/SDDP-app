import React from "react";
import {StyleSheet, View, Text} from "react-native";

interface InformationDisplayProps {
    name: string,
    value: string
};

const InformationDisplay: React.FunctionComponent<InformationDisplayProps> = ({name, value}) =>{
    return (
        <View style={stylesheet.InformationDisplay}>
            <Text style={stylesheet.name}>
                {name}
            </Text>
            <Text style={stylesheet.value}>
                {value}
            </Text>
        </View>
    );
};

const stylesheet = StyleSheet.create({
    InformationDisplay: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2E46',
        width: '80%',
        height: 80,
        borderRadius: 40,
        marginTop: 10
    },
    name: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        height: 32,
        fontSize: 24
    },
    value: {
        textAlign: 'center',
        color: 'white',
        width: '100%',
        height: 40,
        fontSize: 22
    }
});

export default InformationDisplay;
