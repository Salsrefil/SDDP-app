import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import TimeDisplay from '@/components/phpPageComponents/TimeDisplay';

export default function PtpPage() {
    return (
        <View style={styles.view}>
            <TimeDisplay />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#21233D',
        paddingTop: '3%',
    }
});