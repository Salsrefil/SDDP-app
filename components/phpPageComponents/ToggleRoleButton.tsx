import PtpButton from "./PtpButton";

type ToggleRoleProps = {
    role: boolean
};

const ToggleRoleButton:React.FunctionComponent<ToggleRoleProps> = ({role}) =>{

    const toggleRole = () => {

    };

    return (
        <PtpButton
            handlePress={toggleRole}
            text={`Change to ${role ? 'Slave' : 'Master'}`}/>
    );
}

export default ToggleRoleButton;