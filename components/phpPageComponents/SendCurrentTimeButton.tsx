import PtpButton from "./PtpButton";
import { useServer } from "@/contexts/ServerContext";
import axios from "axios";

const SendCurrentTimeButton = () => {
    const {address} = useServer();

    const sendCurrentTime = () => {
        const url = `${address}/set_time`;
        const currentTime={
            time: new Date().toJSON()
        };
        try {
            let response = axios.post(url, currentTime, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });
        } catch(error) {

        }
    };

    return (
        <PtpButton handlePress={sendCurrentTime} text="Set current time"/>
    );
}

export default SendCurrentTimeButton;