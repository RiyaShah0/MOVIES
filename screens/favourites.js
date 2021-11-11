import React, {useState, useEffect} from 'react'
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, 
TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
export default function Favourite() {
    const users=[];
    const [movies, setMovies] = useState();
    const getFrom=()=>{
    const userRef=firestore().collection('users').where('email', '==', 
    auth().currentUser.email);
    userRef.onSnapshot(querySnapshot=>{
    querySnapshot.forEach(documentSnapshot=>{
    users.push({
    ...documentSnapshot.data(),
    key:documentSnapshot.id,
    });
    setMovies(users)
    console.log(users);
    });
    })
    }
    useEffect(() => {
    getFrom();
    }, []);
    return (
        <View style={{ flex: 1, padding: 24, backgroundColor:"black" }}>
      
          <FlatList
            data={movies}
            keyExtractor={item=>item.key}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Image
                style={styles.logo}
                source={{
                    uri:'https://image.tmdb.org/t/p/original/'+item.poster,
                }}
              /> 
              <Text> </Text>
               <Text style={styles.text}> {item.favourites}</Text>
              </View>
            )}
          />
      </View>
    );
  };
  const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop:  1,
        backgroundColor: '#212121',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal: 20,
    },
    text:{
      color:"white",
      fontSize: 20,
      justifyContent:"center",
      alignItems:"center"
    },
    tinyLogo: {
      width: 900,
      height: 100,
    },
    logo:{
      width: 80,
      height: 120,
    },
  });
        