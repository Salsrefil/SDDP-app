import React, { useState } from "react";
import axios from "axios";
import {View, Text, Button, Modal, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';

interface TimePickerModalProps {
    modalVisible: boolean,
    setModalVisible: (visible: boolean) => void;
    onConfirm: (date: Date) => void;
}



const TimePickerModal:React.FunctionComponent<TimePickerModalProps> = ({modalVisible, setModalVisible, onConfirm}) => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [hours, setHours] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');
    const [milliseconds, setMilliseconds] = useState<string>('');
    
    const passTime = () => {
        const updatedDate = new Date(date);
        updatedDate.setHours(parseInt(hours) || 0);
        updatedDate.setMinutes(parseInt(minutes) || 0);
        updatedDate.setSeconds(parseInt(seconds) || 0);
        updatedDate.setMilliseconds(parseInt(milliseconds) || 0);
        onConfirm(updatedDate);
        setModalVisible(false);
      };

    const onDateChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
      };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modalView}>
                <TouchableOpacity onPress ={() => setShowDatePicker(true)}>
                    <Text style={styles.dateText}>{date.toDateString()}</Text>
                </TouchableOpacity>

                {showDatePicker && (
                    <DatePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onDateChange}
                    />
                )}
                <View style={styles.inputContainer}>
                    <Text>Hours</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={hours}
                        onChangeText={setHours}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>Minutes</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={minutes}
                        onChangeText={setMinutes}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>Seconds</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={seconds}
                        onChangeText={setSeconds}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>Milliseconds</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={milliseconds}
                        onChangeText={setMilliseconds}
                    />
                </View>

                <Button title="Change Time" onPress={passTime} />
                <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalView: {
        justifyContent:'center',
        backgroundColor: '#2B2E46',
        borderRadius: 20,
        borderWidth: 2,
        height: '60%',
        width: '80%',
        borderColor:'white',
        padding: 35,
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
      fontSize: 18,
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    input: {
      borderBottomWidth: 1,
      borderColor: 'gray',
      marginLeft: 10,
      width: 60,
      textAlign: 'center',
    },
  });

export default TimePickerModal;