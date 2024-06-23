import PtpButton from "./PtpButton";
import { useServer } from "@/contexts/ServerContext";
import TimePickerModal from './TimePickerModal';
import React, { useState } from 'react';
import axios from "axios";

const ChangeTimeButton = () => {
    const {address} = useServer();
    const [modalVisible, setModalVisible] = useState(false);

    const changeTime = async (date: Date) => {
        const url = `${address}/set_time`;
        const newTime = {
            time: date.toJSON()
        }
        try {
            let response = await axios.post(url, newTime, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {

        }
    };

    const handlePress = () => {
        setModalVisible(true);
    };

    return (
        <>
            <PtpButton handlePress={handlePress} text="Change Time"/>
            <TimePickerModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                onConfirm={changeTime}
            />
        </>
    );
}

export default ChangeTimeButton;