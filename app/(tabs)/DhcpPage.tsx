import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import InformationDisplay from '@/components/phpPageComponents/InformationDisplay';
import LeasesListDisplay from '@/components/dhcpPageComponents/LeasesListDisplay';
import ServerClientSwitchButton from '@/components/dhcpPageComponents/ServerClientSwitchButton';
import ScanForDhcpButton from '@/components/dhcpPageComponents/ScanForDhcpButton';
import Config from '@/config';

// fetche działają
// Narazie endpointy testowane lokalnie przy pomocy pliku testowego serwera z potrzebnymi end-pointami:
// TODO: nie wiem czy to wszystko co przyciski mają robić, 
// czy jak zeskanuje jako client i się okaże, że jest server to co wtedy? 
// nic czy wyświetlić wiadomość, 
// jeżeli wyświetlić to jakiś endpoint get ze strony servera by się przydał czy źle myśle?

export default function DhcpPage() {

    var address = Config.serverAddress;

    const [dhcpInformation, setDhcpInformation] = useState({
        dhcp_server_active: false,
        leases: null,
        my_ip: null,
        foreign_dhcp_server: null,
    });

    const fetchDhcpInfo = async () => {
        try {
            // hardcoded ip, zmieńcie na te które macie po odpaleniu skryptu z pliku testPythonServerDhcp,
            // który stworzyłem do testowania takiego lokalnego
            const response = await fetch(address + '/dhcp_info', {  
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
                value={dhcpInformation.dhcp_server_active ? "Server" : "Client"}
            />
            {!dhcpInformation.dhcp_server_active && (
            <InformationDisplay
                name={"Foreign server IP"}
                value={dhcpInformation.foreign_dhcp_server ? dhcpInformation.foreign_dhcp_server : "No foreign DHCP server detected"}
            />
            )}
            <InformationDisplay
                name={"Leased IP"}
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
            {!dhcpInformation.dhcp_server_active && (
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
