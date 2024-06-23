import React, {useState} from 'react';
import {StyleSheet, ScrollView, Modal} from "react-native";
import ChangeTimeButton from '@/components/phpPageComponents/ChangeTimeButton';
import SyncTimeButton from '@/components/phpPageComponents/SyncTimeButton';
import ToggleRoleButton from '@/components/phpPageComponents/ToggleRoleButton';
import { ServerProvider} from '@/contexts/ServerContext';
import Displays from '@/components/phpPageComponents/Displays';
import DataFetcher from '@/components/phpPageComponents/DataFetcher';

interface PtpInfo {
    clock_count: number;
    current_master: string;
    current_offset: string | null;
    current_time: string;
    foreign_master: boolean;
    master_description: string | null;
    ptp_master_active: boolean;
};

const PtpPage =() => {
    const [ptpInfo, setPtpInfo] = useState<PtpInfo>({ // currently hardcoded, this data should be loaded via http requests
        clock_count: 0,
        current_master: 'Unknown',
        current_offset: "Unknown",
        current_time: 'Unknown',
        foreign_master: false,
        master_description: null,
        ptp_master_active: false
    });

    return (
        <ServerProvider>
            <DataFetcher
                setPtpInfo={setPtpInfo}
            />
            <ScrollView contentContainerStyle={styles.view}>
                <Displays
                    ptpInfo={ptpInfo}
                />
                <ChangeTimeButton />
                {(!ptpInfo.ptp_master_active && !ptpInfo.foreign_master) ?(
                    <></>
                ) : (
                    <SyncTimeButton />
                )}
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

export default PtpPage;