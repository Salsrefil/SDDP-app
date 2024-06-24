import React, {ReactNode, createContext, useContext, useState} from 'react';

interface ServerContextState {
    address: string,
    setServerAddress: (serverAddress: string) => void;
};

const ServerContext = createContext<ServerContextState | undefined>(undefined);

export const ServerProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [address, setServerAddress] = useState<string>('http://192.168.0.1');
    return (
        <ServerContext.Provider value ={{address, setServerAddress}}>
            {children}
        </ServerContext.Provider>
    )
};

export const useServerAddress = () => useContext(ServerContext);

export const useServer = (): ServerContextState => {
        const context = useContext(ServerContext);
        if (!context) {
            throw new Error('not used within ServerProvider');
        }
        return context;
}