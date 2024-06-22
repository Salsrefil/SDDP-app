import React, {useState} from 'react';
import {StyleSheet, ScrollView} from "react-native";
import TimeDisplay from '@/components/phpPageComponents/TimeDisplay';
import InformationDisplay from '@/components/phpPageComponents/InformationDisplay';
import ServerStatusDisplay from '@/components/phpPageComponents/ServerStatusDisplay';
import ChangeTimeButton from '@/components/phpPageComponents/ChangeTimeButton';
import SyncTimeButton from '@/components/phpPageComponents/SyncTimeButton';
import ToggleRoleButton from '@/components/phpPageComponents/ToggleRoleButton';
import ServerContext from '@react-navigation/native/lib/typescript/src/ServerContext';
import { ServerProvider, useServer } from '@/contexts/ServerContext';

export default function PtpPage() {
    const [serverStatus, setServerStatus] = useState(false); // false - disabled | true - active
    const [ptpInfo, setPtpInfo] = useState({ // currently hardcoded, this data should be loaded via http requests
        clock_count: 1,
        current_master: 'e0:d5:5e:83:cd:13',
        current_offset: -60455223566229,
        current_time: '2024-06-12 15:09:26.878196',
        foreign_master: true,
        master_description: null,
        ptp_master_active: true
    });

    return (
        <ServerProvider>
            <ScrollView contentContainerStyle={styles.view}>
                <ServerStatusDisplay
                    status = {serverStatus}
                />
                <InformationDisplay
                    name={"Role"}
                    value={ptpInfo.foreign_master ? "Master" : "Slave"}
                />
                <InformationDisplay
                    name={"Master MAC"}
                    value={ptpInfo.current_master}
                />
                <InformationDisplay
                    name={"Master Description"}
                    value={ptpInfo.current_master}
                />
                <TimeDisplay
                    time={ptpInfo.current_time}
                />
                <InformationDisplay
                    name={"Current Offset"}
                    value={ptpInfo.current_offset.toString()}
                />
                <InformationDisplay
                    name={"Clock Count"}
                    value={ptpInfo.clock_count.toString()}
                />
                <ChangeTimeButton />
                <SyncTimeButton />
                <ToggleRoleButton role={ptpInfo.ptp_master_active}/>
            </ScrollView>
        </ServerProvider>
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
    }
});