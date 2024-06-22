import PtpButton from "./PtpButton";
import { useServerAddress } from "@/contexts/ServerContext";

function ChangeTimeButton() {

    const changeTime = () => {

    };

    return (
        <PtpButton handlePress={changeTime} text="Change Time"/>
    );
}

export default ChangeTimeButton;