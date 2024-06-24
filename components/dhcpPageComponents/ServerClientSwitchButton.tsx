import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

interface ServerClientSwitchButtonProps {
    CurrentView: string,
    onPress: () => void;
}

const ServerClientSwitchButton: React.FunctionComponent<ServerClientSwitchButtonProps> = ({ CurrentView, onPress }) => {
    return (
        <Button
            title={`Switch to ${CurrentView} Mode`}
            onPress={onPress}
            buttonStyle={styles.ServerClientSwitchButton}
            titleStyle={styles.title}
        />
    );
}

const styles = StyleSheet.create({
    ServerClientSwitchButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2E46',
        width: "100%",
        height: 80,
        borderRadius: 40,
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 3
    },
    
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
        width: '100%'
    }
})

export default ServerClientSwitchButton;