import React, { useState } from "react";
import {View, Text, Modal, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { DatePickerModal, registerTranslation, en } from 'react-native-paper-dates';
import {Button} from 'react-native-elements';
import moment from "moment";

registerTranslation('en', en);

interface TimePickerModalProps {
    modalVisible: boolean,
    setModalVisible: (visible: boolean) => void;
    onConfirm: (date: Date) => void;
}



const TimePickerModal:React.FunctionComponent<TimePickerModalProps> = ({modalVisible, setModalVisible, onConfirm}) => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [hours, setHours] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');
    const [milliseconds, setMilliseconds] = useState<string>('');

    const validateInputs = () => {
        const parsedHours = parseInt(hours);
        const parsedMinutes = parseInt(minutes);
        const parsedSeconds = parseInt(seconds);
        const parsedMilliseconds = parseInt(milliseconds);
        if (isNaN(parsedHours) || parsedHours < 0 || parsedHours > 23) {
            alert("Hours must be between 0 and 23.");
            return false;
        }
        if (isNaN(parsedMinutes) || parsedMinutes < 0 || parsedMinutes > 59) {
            alert("Minutes must be between 0 and 59.");
            return false;
        }
        if (isNaN(parsedSeconds) || parsedSeconds < 0 || parsedSeconds > 59) {
            alert("Seconds must be between 0 and 59.");
            return false;
        }
        if (isNaN(parsedMilliseconds) || parsedMilliseconds < 0 || parsedMilliseconds > 999) {
            alert("Milliseconds must be between 0 and 999.");
            return false;
        }
        return true;
    }

    const passTime = () => {
        if (!validateInputs()) {
            return;
        }
        if (!date) return;
        const updatedDate = new Date(date);
        updatedDate.setHours(parseInt(hours) || 0);
        updatedDate.setMinutes(parseInt(minutes) || 0);
        updatedDate.setSeconds(parseInt(seconds) || 0);
        updatedDate.setMilliseconds(parseInt(milliseconds) || 0);
        onConfirm(updatedDate);
        setModalVisible(false);
    };

    const onDateChange = (params: { date: Date }) => {
        setDate(params.date);
        setShowDatePicker(false);
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.dateText}>{date ? moment(date).format('YYYY-MM-DD') : "Select Date"}</Text>
                    </TouchableOpacity>
                    <DatePickerModal
                        locale="en"
                        mode="single"
                        visible={showDatePicker}
                        onDismiss={() => setShowDatePicker(false)}
                        date={date}
                        onConfirm={(params) => {
                            if (params.date) {
                                onDateChange({ date: params.date });
                            }
                        }}
                    />

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Hours</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={hours}
                            onChangeText={setHours}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Minutes</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={minutes}
                            onChangeText={setMinutes}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Seconds</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={seconds}
                            onChangeText={setSeconds}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Milliseconds</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={milliseconds}
                            onChangeText={setMilliseconds}
                        />
                    </View>

                    <Button buttonStyle={styles.timeButton} title="Change Time" onPress={passTime} />
                    <Button buttonStyle={styles.timeButton} title="Close" onPress={() => setModalVisible(!modalVisible)} />
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    inputLabel: {
        fontSize: 20,
        color: 'white',
        width: '40%',
        textAlign: 'right'
    },
    modalView: {
        justifyContent:'center',
        backgroundColor: '#2B2E46',
        borderRadius: 20,
        borderWidth: 2,
        height: 360,
        width: 360,
        borderColor:'white',
        alignItems: 'center',
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 50,
    },
    dateText: {
      marginBottom: 20,
      fontSize: 32,
      textAlign: 'center',
      color: 'white',
      fontWeight:'bold'
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      width:'100%'
    },
    input: {
      borderBottomWidth: 1,
      borderColor: 'gray',
      marginLeft: 10,
      width: '50%',
      textAlign: 'center',
      color:'white',
    },
    timeButton: {
        width: 160,
        marginBottom: 15,
        height: 45,
        fontSize: 32,
        color: 'white',
        backgroundColor:'',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20
    }
  });

export default TimePickerModal;