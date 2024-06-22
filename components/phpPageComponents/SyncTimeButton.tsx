import PtpButton from "./PtpButton";

function SyncTimeButton() {

    const synchronizeTime = () => {

    };

    return (
        <PtpButton handlePress={synchronizeTime} text="Synchronize Time"/>
    );
}

export default SyncTimeButton;