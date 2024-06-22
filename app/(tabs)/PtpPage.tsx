import React, {useState} from 'react';
import {StyleSheet, ScrollView} from "react-native";
import ChangeTimeButton from '@/components/phpPageComponents/ChangeTimeButton';
import SyncTimeButton from '@/components/phpPageComponents/SyncTimeButton';
import ToggleRoleButton from '@/components/phpPageComponents/ToggleRoleButton';
import { ServerProvider, useServer } from '@/contexts/ServerContext';
import Displays from '@/components/phpPageComponents/Displays';

export default function PtpPage() {
    const [serverStatus, setServerStatus] = useState(false); // false - disabled | true - active
    const [ptpInfo, setPtpInfo] = useState({ // currently hardcoded, this data should be loaded via http requests
        clock_count: 1,
        current_master: 'e0:d5:5e:83:cd:13',
        current_offset: "-60455223566229",
        current_time: '2024-06-12 15:09:26.878196',
        foreign_master: true,
        master_description: null,
        ptp_master_active: true
    });

    return (
        <ServerProvider>
            <ScrollView contentContainerStyle={styles.view}>
                <Displays serverStatus={serverStatus} ptpInfo={ptpInfo}/>
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