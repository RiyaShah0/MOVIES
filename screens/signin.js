'use strict';
import React, { useState } from 'react';
import { View, Text, TextInput ,StyleSheet,Pressable } from 'react-native';
import { useValidation } from 'react-native-form-validator';

const Signin = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: {  email, newPassword, confirmPassword },
    });

    const _onPressButton = () => {
        validate({
          email: { email: true, required:true },
          newPassword: {required:true},
          confirmPassword: { equalPassword: newPassword,required:true },
        });
      };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <TextInput
                    style={styles.input}
                    placeholder='Email address'
                    value={email}
                    onChangeText={setEmail}
                />  
            <TextInput
                    style={styles.input}
                    placeholder='New Password'
                    onChangeText={setNewPassword}
                    value={newPassword}
                    secureTextEntry={true}
                /> 
            <TextInput
                     style={styles.input}
                     placeholder='Confirm Password'
                     onChangeText={setConfirmPassword}
                     value={confirmPassword}
                     secureTextEntry={true}
            />
         {isFieldInError('confirmPassword') &&
         getErrorsInField('confirmPassword').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))} 
             <Pressable>
                <Pressable style={styles.button} onPress={() => {_onPressButton() }}>
                    <Text style={styles.text}>SIGNIN</Text>
                </Pressable> 
                <Pressable style={styles.button} onPress={() => {navigation.navigate('profile') }}>
                    <Text style={styles.text}>VIEW PROFILE</Text>
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
      },
});
export default Signin;
    
