import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import InformationDisplay from '@/components/phpPageComponents/InformationDisplay';
import LeasesListDisplay from '@/components/dhcpPageComponents/LeasesListDisplay';
import ServerClientSwitchButton from '@/components/dhcpPageComponents/ServerClientSwitchButton';
import ScanForDhcpButton from '@/components/dhcpPageComponents/ScanForDhcpButton';

// Narazie endpointy testowane lokalnie przy pomocy pliku testowego serwera z potrzebnymi end-pointami: 
export default function DhcpPage() {
    const [dhcpInformation, setDhcpInformation] = useState({
        dhcpServerActive: false,
        leases: [],
        myIP: null,
        foreign_dhcp_server: null,
    });

    const fetchDhcpInfo = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/dhcp_info', {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch DHCP information');
            }
            const data = await response.json();
            setDhcpInformation(data);
        } catch (error) {
            console.error('Error fetching DHCP information:', error);
        }
    };

    const toggleDhcpServer = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/dhcp_toggle', {
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
            const response = await fetch('http://127.0.0.1:5000/dhcp_scan', {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Failed to scan for DHCP');
            }
            // Handle success if needed
        } catch (error) {
            console.error('Error scanning for DHCP:', error);
        }
    };

    useEffect(() => {
        fetchDhcpInfo();
    }, []);

    if (dhcpInformation === null) {
        return (
            <ScrollView contentContainerStyle={styles.view}>
                <h2>Loading...</h2>
            </ScrollView>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.view}>
            <InformationDisplay
                name={"Current Mode"}
                value={dhcpInformation.dhcpServerActive ? "Server" : "Client"}
            />
            <InformationDisplay
                name={"Static IP"}
                value={dhcpInformation.myIP ? dhcpInformation.myIP : "No address"}
            />
            {dhcpInformation.dhcpServerActive ? (
                dhcpInformation.leases.length > 0 ? (
                    <LeasesListDisplay leases={dhcpInformation.leases} />
                ) : (
                    <InformationDisplay name={"List of leases"} value={"No available leases to show"} />
                )
            ) : (
                <Text></Text>
            )}
            <ServerClientSwitchButton
                CurrentView={dhcpInformation.dhcpServerActive ? "Client" : "Server"}
                onPress={toggleDhcpServer}
            />
            {!dhcpInformation.dhcpServerActive && (
                <ScanForDhcpButton onPress={handleScanForDhcp} />
            )}
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
