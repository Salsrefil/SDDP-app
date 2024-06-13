import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface ServerStatusProps {
    status: boolean
};

const ServerStatusDisplay: React.FunctionComponent<ServerStatusProps> = ({status}) => {
    const viewStyleColor = status ? 'Bright Green' : 'red';

    return (
        <View style={{...styles.viewStyle, borderColor: viewStyleColor}}>
            <Text style={{...styles.textStyle, color: viewStyleColor}}>
                {`Status: ${status ? 'Active' : 'Disabled'}`}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 80,
        width: '80%',
        backgroundColor: '#2B2E46',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderWidth: 2,
    },
    textStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default ServerStatusDisplay;