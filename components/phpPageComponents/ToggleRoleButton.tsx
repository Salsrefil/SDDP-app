import PtpButton from "./PtpButton";
import { useServer } from "@/contexts/ServerContext";
import axios from "axios";

type ToggleRoleProps = {
    role: boolean
};

const ToggleRoleButton:React.FunctionComponent<ToggleRoleProps> = ({role}) =>{
    const { address } = useServer();


    const toggleRole = () => {
        const url = `${address}/ptp_toggle`;
    };

    return (
        <PtpButton
            handlePress={toggleRole}
            text={`Change to ${role ? 'Slave' : 'Master'}`}/>
    );
}

export default ToggleRoleButton;