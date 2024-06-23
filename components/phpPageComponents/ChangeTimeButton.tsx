import PtpButton from "./PtpButton";
import { useServer } from "@/contexts/ServerContext";

const ChangeTimeButton = () => {
    const {address} = useServer();

    const changeTime = () => {
        const url = `${address}/set_time`;
    };

    return (
        <PtpButton handlePress={changeTime} text="Change Time"/>
    );
}

export default ChangeTimeButton;