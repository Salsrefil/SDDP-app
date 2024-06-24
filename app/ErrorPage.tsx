// ErrorPage.tsx
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useServer } from "@/contexts/ServerContext";

const ErrorPage: React.FC = () => {
  const router = useRouter();
  //const { address } = useServer();
    const  address  = "http://127.0.0.1:5000"
    
  const handleRetry = () => {
    router.push('/'); // Navigate to the main index page
  };

  const fetchDhcpInfo = async () => {
    try {
        const response = await fetch(address + '/dhcp_info', { method: 'GET' });
        if (!response.ok) {
            throw new Error('Failed to fetch DHCP information');
        }
        const data = await response.json();
        router.push("/");
    } catch (error) {
        router.push("/ErrorPage");
    }
};

useEffect(() => {
    fetchDhcpInfo();

    const intervalId = setInterval(() => {
        fetchDhcpInfo();
    }, 1000);

    return () => clearInterval(intervalId);
}, []);

useEffect

  return (
    <View style={styles.container}>
      <Text style={styles.errorTitle}>Failed to connect to server</Text>
      <Text style={styles.errorText}>You must connect to hotspot</Text>
      <Text style={styles.errorText}>Hotspot name: 'sddip'</Text>
      <Button title="Retry" onPress={handleRetry} color="#2B2E46" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#21233D',
    paddingVertical: '3%',
    paddingTop: 30,
    paddingBottom: 30,
  },
  errorTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2E46',
    width: '100%',
    minWidth: '100%',
    height: 'auto',
    minHeight: 80,
    borderRadius: 40,
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 3
    },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ErrorPage;
