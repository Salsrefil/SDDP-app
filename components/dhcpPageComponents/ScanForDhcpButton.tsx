import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

interface ScanForDhcpButtonProps {
    onPress: () => void;
}

const ScanForDhcpButton: React.FunctionComponent<ScanForDhcpButtonProps> = ({ onPress }) => {
    return (
        <Button
            title={`Scan for DHCP`}
            onPress={onPress}
            buttonStyle={styles.ScanForDhcpButton}
            titleStyle={styles.title}
        />
    );
};

const styles = StyleSheet.create({
    ScanForDhcpButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2E46',
        width: '100%',
        height: 'auto',
        minHeight: 80,
        borderRadius: 40,
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 3
    },
    
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 26,
        width: '100%',
        marginHorizontal: 10,
    }
})

export default ScanForDhcpButton;