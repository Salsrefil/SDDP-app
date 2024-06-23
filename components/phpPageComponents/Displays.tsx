import React from "react";
import InformationDisplay from "./InformationDisplay";
import TimeDisplay from "./TimeDisplay";

interface DisplaysProps {
    ptpInfo: PtpInfo;
};

interface PtpInfo {
    clock_count: number;
    current_master: string;
    current_offset: string | null;
    current_time: string;
    foreign_master: boolean;
    master_description: string | null;
    ptp_master_active: boolean;
};

const Displays:React.FunctionComponent<DisplaysProps> = ({ptpInfo}) => {
    return (
        <>
            <InformationDisplay
                name={"Role"}
                value={ptpInfo.ptp_master_active ? "Master" : "Slave"}
            />
            {(!ptpInfo.ptp_master_active && !ptpInfo.foreign_master) ? (
                <InformationDisplay
                    name={"Status"}
                    value={"No foreign masters found."}
                />
            ) : (
                <>
                    <InformationDisplay
                        name={"Master MAC"}
                        value={ptpInfo.current_master}
                    />
                    {!ptpInfo.ptp_master_active && (
                        <InformationDisplay
                            name={"Master Description"}
                            value={ptpInfo.master_description || 'Not Defined'}
                        />
                    )}
                    <TimeDisplay
                        time={ptpInfo.current_time}
                    />
                    {!ptpInfo.ptp_master_active && (
                        <InformationDisplay
                            name={"Current Offset"}
                            value={ptpInfo.current_offset ? ptpInfo.current_offset.toString() + ' ns' : '0 ns'}
                        />
                    )}
                    <InformationDisplay
                        name={"Clock Count"}
                        value={ptpInfo.clock_count.toString()}
                    />
                </>
            )}
        </>
    );
};

export default Displays;