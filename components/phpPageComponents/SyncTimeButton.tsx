import PtpButton from "./PtpButton";
import { useServer } from "@/contexts/ServerContext";
import axios from "axios";
import React from "react";
import { router } from 'expo-router';
import setErrorState from '@/app/ErrorPage';

type SyncTimeProps = {
    role: boolean,
    foreignMaster: boolean
};

const SyncTimeButton:React.FunctionComponent<SyncTimeProps> = ({role, foreignMaster}) => {
    const { address } = useServer();

    const synchronizeTime = async () => {
        if ((!role && foreignMaster) === false) {
            return;
        }
        const url = `${address}/sync_time`;
        try {
            let response = axios.post(url);
        } catch (error) {   
            router.push("/ErrorPage")
        }
    };

    return (
        <PtpButton handlePress={synchronizeTime} text="Synchronize Time"/>
    );
}

export default SyncTimeButton;