import React, {useEffect} from "react";
import { useServer } from "@/contexts/ServerContext";
import axios from 'axios';

interface DataFetcherProps {
    setPtpInfo: (info: PtpInfo) => void;
    setServerStatus: (status: boolean) => void;
};

interface PtpInfo {
    clock_count: number;
    current_master: string;
    current_offset: string;
    current_time: string;
    foreign_master: boolean;
    master_description: string | null;
    ptp_master_active: boolean;
};

const DataFetcher:React.FunctionComponent<DataFetcherProps> = ({setPtpInfo, setServerStatus}) => {
    const { address } = useServer();

    const fetchPtpInfo = async () => {
        const url = address + '/ptp_info';
        try {
            let response = await axios.get(url);
            setPtpInfo(response.data);
            setServerStatus(true);
        } catch (error) {
            setServerStatus(false);
        }
    };

    useEffect(() => {
        fetchPtpInfo();

        const intervalId = setInterval(() => {
            fetchPtpInfo();
        }, 1000) // currently will fetch data in 5 seconds long intervals.

        return () => clearInterval(intervalId);
    }, [])

    return null;
};

export default DataFetcher;