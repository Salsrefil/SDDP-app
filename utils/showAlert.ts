import { Alert as RNAlert, Platform } from 'react-native';

const showAlert = (title: string, message: string) => {
    window.alert(`${title}\n\n${message}`);
};

export default showAlert;