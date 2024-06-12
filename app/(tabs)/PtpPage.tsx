import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import TimeDisplay from '@/components/phpPageComponents/TimeDisplay';
import UpdateTimeButton from '@/components/phpPageComponents/UpdateTimeButton';

export default function PtpPage() {
    return (
        <View style={styles.view}>
            <TimeDisplay />
            <UpdateTimeButton />
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