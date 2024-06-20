import { Alert as RNAlert, Platform } from 'react-native';

const showAlert = (title: string, message: string) => {
    if (Platform.OS === 'web') {
        window.alert(`${title}\n\n${message}`);
    } else {
        RNAlert.alert(title, message);
    }
};

export default showAlert;