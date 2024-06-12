import { View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

function UpdateTimeButton() {
    return (
        <Button
            title="Change Time"
            buttonStyle={styles.UpdateTimeButton}
        >
        </Button>
    );
}

const styles = StyleSheet.create({
    UpdateTimeButton: {
        backgroundColor: '#2B2E46',
        color: 'white',
        width: '80%',
        height: 80,
        borderRadius: 40,
        fontSize: 32
    }
})

export default UpdateTimeButton;