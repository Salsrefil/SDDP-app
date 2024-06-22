import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import PtpButton from "./PtpButton";

function ChangeTimeButton() {

    const changeTime = () => {

    };

    return (
        <PtpButton handlePress={changeTime} text="Change Time"/>
    );
}

export default ChangeTimeButton;