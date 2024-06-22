import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import TimeDisplay from '@/components/phpPageComponents/TimeDisplay';
import UpdateTimeButton from '@/components/phpPageComponents/ChangeTimeButton';
import InformationDisplay from '@/components/phpPageComponents/InformationDisplay';
import ServerStatusDisplay from '@/components/phpPageComponents/ServerStatusDisplay';
import ChangeTimeButton from '@/components/phpPageComponents/ChangeTimeButton';
import SyncTimeButton from '@/components/phpPageComponents/SyncTimeButton';
import ToggleRoleButton from '@/components/phpPageComponents/ToggleRoleButton';

export default function PtpPage() {
    const [serverStatus, setServerStatus] = useState(false); // false - disabled | true - active
    const [ptpInformation, setPtpInformation] = useState({ // currently hardcoded, this data should be loaded via http requests
        clockCount: 1,
        currentMaster: 'e0:d5:5e:83:cd:13',
        currentOffset: -60455223566229,
        currentTime: '2024-06-12 15:09:26.878196',
        foreignMaster: true,
        masterDescription: null
    });

    return (
        <ScrollView contentContainerStyle={styles.view}>
            <ServerStatusDisplay
                status = {serverStatus}
            />
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
            <ChangeTimeButton />
            <SyncTimeButton />
            <ToggleRoleButton role={true}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: '#21233D',
        paddingVertical: '3%',
        paddingTop: 30,
        paddingBottom: 30
    },

});