import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import TimeDisplay from '@/components/phpPageComponents/TimeDisplay';

export default function PtpPage() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.view}>
                <TimeDisplay />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#21233D',
    },
    view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: '3%',
    }
});