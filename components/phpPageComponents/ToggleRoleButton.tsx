import PtpButton from "./PtpButton";
import { useServer } from "@/contexts/ServerContext";
import axios from "axios";

type ToggleRoleProps = {
    role: boolean
};

const ToggleRoleButton:React.FunctionComponent<ToggleRoleProps> = ({role}) =>{
    const { address } = useServer();


    const toggleRole = async () => {
        const url = `${address}/ptp_toggle`;
        try {
            let response = axios.post(url);
        } catch (error) {
            
        }
    };

    return (
        <PtpButton
            handlePress={toggleRole}
            text={`Change to ${role ? 'Slave' : 'Master'}`}/>
    );
}

export default ToggleRoleButton;