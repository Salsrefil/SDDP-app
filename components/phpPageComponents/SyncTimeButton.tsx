import PtpButton from "./PtpButton";
import { useServer } from "@/contexts/ServerContext";
import axios from "axios";

const SyncTimeButton = () => {
    const { address } = useServer();

    const synchronizeTime = () => {
        const url = `${address}/sync_time`;
    };

    return (
        <PtpButton handlePress={synchronizeTime} text="Synchronize Time"/>
    );
}

export default SyncTimeButton;