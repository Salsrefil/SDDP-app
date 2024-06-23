import React from "react";
import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

type ButtonActionProps = {
    handlePress: () => void;
    text: string;
};

const PtpButton: React.FunctionComponent<ButtonActionProps> = ({ handlePress, text }) => {
    return (
        <Button
            title={ text }
            buttonStyle={ styles.ptpButton }
            titleStyle={ styles.title }
            onPress={ handlePress }
        />
    );
}

const styles = StyleSheet.create({
    ptpButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2E46',
        width: 320,
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
});

export default PtpButton;