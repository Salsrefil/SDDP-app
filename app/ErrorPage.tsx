import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const ErrorPage: React.FC = () => {
    const router = useRouter();
    
    const handleRetry = () => {
        router.push('/');
    };

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
});

export default ErrorPage;
