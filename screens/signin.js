
import React, { useState,useContext } from 'react';
import { View, Text, TextInput ,StyleSheet,Pressable,Alert } from 'react-native';
import auth, { firebase } from "@react-native-firebase/auth";
import { AuthContext } from '../navigation/AuthProvider';


const Signin = ({navigation}) => {
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {register} = useContext(AuthContext);


    return (
        
        <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <TextInput
          label={"Email"}
          autoCapitalize={false}
          keyboardType="email-address"
          placeholder="Mail address"
          onChangeText={text => {
            setEmail(text)
          }}
        />

        <TextInput
          label={"Password"}
          secureTextEntry
          autoCapitalize={false}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
      </View>
            
             <Pressable>
                <Pressable style={styles.button} onPress={() => {register(email, password)}}>
                    <Text style={styles.text}>SIGNUP</Text>
                </Pressable>  
                </Pressable>  
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
      errorLabelContainerStyle: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center"
      },
      errorTextStyle: {
        color: "red",
        textAlign: "center"
      },
});
export default Signin;
    
