import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import TimeDisplay from '@/components/phpPageComponents/TimeDisplay';
import UpdateTimeButton from '@/components/phpPageComponents/UpdateTimeButton';

export default function PtpPage() {
    const [ptpInformation, setPtpInformation] = useState({
        clockCount: 0,
        currentMaster: 'None',
        currentOffset: 0,
        currentTime: '2024-06-12 15:09:26.878196',
        foreignMaster: 'False',
        masterDescription: null
    });

    return (
        <View style={styles.view}>
            <TimeDisplay time={ptpInformation.currentTime}/>
            <UpdateTimeButton />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#21233D',
        paddingTop: '3%',
    }
});