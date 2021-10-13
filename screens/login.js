'use strict';
import React, { useState } from 'react';
import { View, Text, TextInput ,StyleSheet,Pressable } from 'react-native';
import { useValidation } from 'react-native-form-validator';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: {  email, newPassword },
    });  

    const _onPressButton = () => {
        validate({
          email: { email: true,required:true },
          newPassword: {required:true},
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
                    placeholder='Password'
                    onChangeText={setNewPassword}
                    value={newPassword}
                    secureTextEntry={true}
                /> 
                  
            <Pressable style={styles.button} onPress={() => {_onPressButton() }}>
                    <Text style={styles.text}>Validate</Text>
                </Pressable>
                <Text>{getErrorMessages()}</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('signin')}>
                    <Text style={styles.text}>SIGNUP</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('bottomtabs')}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>  

                
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
export default Login;