import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, Platform } from 'react-native';
import InformationDisplay from '@/components/phpPageComponents/InformationDisplay';
import LeasesListDisplay from '@/components/dhcpPageComponents/LeasesListDisplay';
import ServerClientSwitchButton from '@/components/dhcpPageComponents/ServerClientSwitchButton';
import ScanForDhcpButton from '@/components/dhcpPageComponents/ScanForDhcpButton';
import Config from '@/config';
import showAlert from '@/utils/showAlert';

export default function DhcpPage() {

    var address = Config.serverAddress;

    const [dhcpInformation, setDhcpInformation] = useState({
        dhcp_server_active: false,
        leases: null,
        my_ip: null,
        foreign_dhcp_server: null,
    });

    const [foreignDhcpDetected, setForeignDhcpDetected] = useState(false);

    const fetchDhcpInfo = async () => {
        try {
            const response = await fetch(address + '/dhcp_info', {  
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch DHCP information');
            }
            const data = await response.json();

            if (!data.dhcp_server_active && data.foreign_dhcp_server) {
                setForeignDhcpDetected(true);
            } else {
                setForeignDhcpDetected(false);
            }
            console.log(foreignDhcpDetected)
            setDhcpInformation(data);
        } catch (error) {
            console.error('Error fetching DHCP information:', error);
        }
    };

    const toggleDhcpServer = async () => {
        if (foreignDhcpDetected) {
            showAlert(
                "Foreign DHCP Server Detected",
                "A foreign DHCP server was detected. Cannot switch to server mode now."
            );
            return;
        }
        try {
            const response = await fetch(address + '/dhcp_toggle', {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Failed to toggle DHCP server');
            }
            fetchDhcpInfo();
        } catch (error) {
            console.error('Error toggling DHCP server:', error);
        }
    };

    const handleScanForDhcp = async () => {
        try {
            const response = await fetch(address + '/dhcp_scan', {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Failed to scan for DHCP');
            }
            fetchDhcpInfo();
            if(!dhcpInformation.foreign_dhcp_server){
                showAlert(
                    "Scan Alert",
                    "A foreign DHCP server was not detected."
                );
            }else{
                showAlert(
                    "Scan Alert",
                    "A foreign DHCP server was detected."
                );
            }
        } catch (error) {
            console.error('Error scanning for DHCP:', error);
        }
    };

    useEffect(() => {
        fetchDhcpInfo();

        const intervalId = setInterval(() => {
            fetchDhcpInfo();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    if (dhcpInformation === null) {
        return (
            <ScrollView contentContainerStyle={styles.view}>
                <Text>Loading...</Text>
            </ScrollView>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.view}>
            <InformationDisplay
                name={"Current Mode"}
                value={dhcpInformation.dhcp_server_active ? "Server" : "Client"}
            />
            {!dhcpInformation.dhcp_server_active && (
                <InformationDisplay
                    name={"Foreign server IP"}
                    value={dhcpInformation.foreign_dhcp_server ? dhcpInformation.foreign_dhcp_server : "No foreign DHCP server detected"}
                />
            )}
            <InformationDisplay
                name={dhcpInformation.dhcp_server_active ? "Static IP" : "Leased IP"}
                value={dhcpInformation.my_ip ? dhcpInformation.my_ip : "No address"}
            />
            {dhcpInformation.dhcp_server_active ? (
                dhcpInformation.leases ? (
                    <LeasesListDisplay leases={dhcpInformation.leases} />
                ) : (
                    <InformationDisplay name={"List of leases"} value={"No available leases to show"} />
                )
            ) : (
                <Text></Text>
            )}
            <ServerClientSwitchButton
                CurrentView={dhcpInformation.dhcp_server_active ? "Client" : "Server"}
                onPress={toggleDhcpServer}
            />
            <ScanForDhcpButton onPress={handleScanForDhcp} />
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
