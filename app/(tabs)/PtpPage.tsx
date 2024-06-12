import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import TimeDisplay from '@/components/phpPageComponents/TimeDisplay';
import UpdateTimeButton from '@/components/phpPageComponents/UpdateTimeButton';
import InformationDisplay from '@/components/phpPageComponents/InformationDisplay';

export default function PtpPage() {
    const [ptpInformation, setPtpInformation] = useState({ // currently hardcoded, this data should be loaded via http requests
        clockCount: 1,
        currentMaster: 'e0:d5:5e:83:cd:13',
        currentOffset: -60455223566229,
        currentTime: '2024-06-12 15:09:26.878196',
        foreignMaster: true,
        masterDescription: null
    });

    return (
        <View style={styles.view}>
            <InformationDisplay
                name={"Role"}
                value={ptpInformation.foreignMaster ? "Master" : "Slave"}
            />
            <InformationDisplay
                name={"Master MAC"}
                value={ptpInformation.currentMaster}
            />
            <InformationDisplay
                name={"Master Description"}
                value={ptpInformation.currentMaster}
            />
            <TimeDisplay
                time={ptpInformation.currentTime}
            />
            <InformationDisplay
                name={"Current Offset"}
                value={ptpInformation.currentOffset.toString()}
            />
            <InformationDisplay
                name={"Clock Count"}
                value={ptpInformation.clockCount.toString()}
            />
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