import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

interface AlertBoxProps {
  title: string; // title of alert
  titleColor: string; // Add titleColor prop for exp: red or green
  message: string; // message
  onClose: () => void; // what to do on close (toggle to not be visible)
  visible: boolean; // toggle visibility
}

const AlertBox: React.FC<AlertBoxProps> = ({ title, titleColor, message, onClose, visible }) => {
    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.alertOverlay}>
                <View style={styles.alertBox}>
                    <Text style={[styles.alertTitle, { color: titleColor }]}>{title}</Text>
                    <Text style={styles.alertMessage}>{message}</Text>
                    <TouchableOpacity style={styles.alertButton} onPress={onClose}>
                        <Text style={styles.alertButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    alertOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 'auto',
    },
    alertBox: {
        backgroundColor: '#2B2E46',
        padding: 20,
        borderRadius: 15,
        width: 'auto',
        maxWidth: 250,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        borderWidth: 1,
        borderColor: 'white',
    },
    alertTitle: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
        height: 'auto',
    },
    alertMessage: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
        height: 'auto',
        color: 'white',
    },
    alertButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        height: 'auto',
        width: 'auto',
    },
    alertButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        height: 'auto',
    },
});

export default AlertBox;
