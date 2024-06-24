import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import InformationDisplay from '@/components/phpPageComponents/InformationDisplay';
import LeasesListDisplay from '@/components/dhcpPageComponents/LeasesListDisplay';
import ServerClientSwitchButton from '@/components/dhcpPageComponents/ServerClientSwitchButton';
import ScanForDhcpButton from '@/components/dhcpPageComponents/ScanForDhcpButton';
import AlertBox from '@/components/AlertBox';
import { useRouter } from 'expo-router';

export default function DhcpPage() {
    const router = useRouter();
    const address = "http://192.168.0.1"

    const [dhcpInformation, setDhcpInformation] = useState({
        dhcp_server_active: false,
        leases: null,
        my_ip: null,
        foreign_dhcp_server: null,
    });

    const [dhcpScanInformation, setDhcpScanInformation] = useState({
        dhcp_server_active: false,
        leases: null,
        my_ip: null,
        foreign_dhcp_server: null,
    });

    const [foreignDhcpDetected, setForeignDhcpDetected] = useState(false);
    const [alert, setAlert] = useState({
        visible: false,
        title: "",
        titleColor: "",
        message: "",
    });

    const fetchDhcpInfo = async (setState: React.Dispatch<React.SetStateAction<typeof dhcpInformation>>) => {
        try {
            const response = await fetch(`${address}/dhcp_info`, { method: 'GET' });
            if (!response.ok) {
                throw new Error('Failed to fetch DHCP information');
            }
            const data = await response.json();

            if (!data.dhcp_server_active && data.foreign_dhcp_server) {
                setForeignDhcpDetected(true);
            } else {
                setForeignDhcpDetected(false);
            }
            setState(data);
            return data;
        } catch (error) {
            router.push("/ErrorPage");
        }
    };

    const toggleDhcpServer = async () => {
        if (foreignDhcpDetected) {
            setAlert({
                visible: true,
                title: "Foreign DHCP Server Detected",
                titleColor: "red",
                message: "A foreign DHCP server was detected. Cannot switch to server mode now.",
            });
            return;
        }
        try {
            const response = await fetch(`${address}/dhcp_toggle`, {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Failed to toggle DHCP server');
            }
            fetchDhcpInfo(setDhcpInformation);
        } catch (error) {
            router.push("/ErrorPage");
        }
    };

    const handleScanForDhcp = async () => {
        try {
            const response = await fetch(`${address}/dhcp_scan`, {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Failed to scan for DHCP');
            }

            const data = await fetchDhcpInfo(setDhcpScanInformation);

            if (!data.foreign_dhcp_server) {
                setAlert({
                    visible: true,
                    title: "Scan alert",
                    titleColor: "green",
                    message: "A foreign DHCP server was not detected.",
                });
                setDhcpInformation((prev) => ({
                    ...prev,
                    foreign_dhcp_server: data.foreign_dhcp_server,
                }));
            } else {
                setAlert({
                    visible: true,
                    title: "Scan alert",
                    titleColor: "red",
                    message: "A foreign DHCP server was detected!",
                });
            }
        } catch (error) {
            router.push("/ErrorPage");
        }
    };

    useEffect(() => {
        fetchDhcpInfo(setDhcpInformation);

        const intervalId = setInterval(() => {
            fetchDhcpInfo(setDhcpInformation);
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
                {alert.visible && (
                    <AlertBox
                        visible={alert.visible}
                        title={alert.title}
                        titleColor={alert.titleColor}
                        message={alert.message}
                        onClose={() => setAlert({ ...alert, visible: false })}
                    />
                )}
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
        paddingBottom: 30,
    },
});
