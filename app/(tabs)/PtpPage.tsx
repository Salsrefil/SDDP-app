import React from 'react';
import {View, Text, StyleSheet } from "react-native";

export default function PtpPage() {
    return (
    <View style={styles.view}>
        <Text>PTP</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#21233D",
    }
});