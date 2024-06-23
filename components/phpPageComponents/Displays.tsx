import React from "react";
import ServerStatusDisplay from "./ServerStatusDisplay";
import InformationDisplay from "./InformationDisplay";
import TimeDisplay from "./TimeDisplay";

interface DisplaysProps {
    serverStatus: boolean;
    ptpInfo: PtpInfo;
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

const Displays:React.FunctionComponent<DisplaysProps> = ({serverStatus, ptpInfo}) => {
    return (
        <>
            <ServerStatusDisplay
                status={serverStatus}
            />
            <InformationDisplay
                    name={"Role"}
                    value={ptpInfo.foreign_master ? "Master" : "Slave"}
                />
                <InformationDisplay
                    name={"Master MAC"}
                    value={ptpInfo.current_master}
                />
                <InformationDisplay
                    name={"Master Description"}
                    value={ptpInfo.current_master}
                />
                <TimeDisplay
                    time={ptpInfo.current_time}
                />
                <InformationDisplay
                    name={"Current Offset"}
                    value={ptpInfo.current_offset.toString()}
                />
                <InformationDisplay
                    name={"Clock Count"}
                    value={ptpInfo.clock_count.toString()}
                />
        </>
    );
};

export default Displays;