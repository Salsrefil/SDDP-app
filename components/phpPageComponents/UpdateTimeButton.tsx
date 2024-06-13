import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

function UpdateTimeButton() {
    return (
        <Button
            title="Change Time"
            buttonStyle={styles.updateTimeButton}
            titleStyle={styles.title}
        >
        </Button>
    );
}

const styles = StyleSheet.create({
    updateTimeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2E46',
        width: '80%',
        height: 80,
        borderRadius: 40,
        marginTop: 10
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
        width: '100%'
    }
})

export default UpdateTimeButton;