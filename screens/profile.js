'use strict';
import React, { useState } from 'react';
import { View, Text, TextInput ,StyleSheet,Pressable } from 'react-native';
import { useValidation } from 'react-native-form-validator';
import DatePicker from 'react-native-datepicker';


const Profile = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
 
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { name, email, number,date },
    });

    const _onPressButton = () => {
        validate({
          name: { minlength: 3, required: true },
          email: { email: true ,required:true},
          number: { numbers: true,required:true },
          date:{required:true},
          });
      };
      
    
    
      return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <TextInput
                    style={styles.input}
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                /> 
            <TextInput
                    style={styles.input}
                    placeholder='Email address'
                    value={email}
                    onChangeText={setEmail}
                />  
            <TextInput
                    style={styles.input}
                    placeholder='Phone No.'
                    keyboardType='number-pad'
                    value={number}
                    onChangeText={setNumber}
                />  
             <DatePicker
                     style={styles.datePickerStyle}
                      date={date} // Initial date from state
                     mode="date" // The enum of date, datetime and time
                    placeholder="BirthDate"
                    format="DD-MM-YYYY"
                    minDate="01-01-2000"
                    maxDate="01-10-2021"
                    confirmBtnText="Confirm"
                   cancelBtnText="Cancel"
                   customStyles={{
                  dateIcon: {
                       //display: 'none',
                       position: 'absolute',
                       left: 0,
                       top: 4,
                       marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
            <Pressable>
                <Pressable style={styles.button} onPress={() => {_onPressButton()  }}>
                    <Text style={styles.text}>SUBMIT</Text>
                </Pressable>  
                </Pressable>  
           <Text>{getErrorMessages()}</Text>
         </View>
         </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    inputContainer: {
        padding: 10,
        margin: 10
    },
    input: {
        height: 45,
        paddingLeft: 10,
        margin: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 15
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      marginTop:15,
      marginBottom:15,
      borderRadius: 15,
      elevation: 3,
      backgroundColor: 'purple',
    },
    
      text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        textAlign: 'center'
      },
      datePickerStyle: {
        width: 200,
        marginTop: 20,
      },
      
});
export default Profile;