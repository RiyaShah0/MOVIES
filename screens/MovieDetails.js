import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,Alert
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function MovieDetails({route}) {
    const imagepath= route.params.paramImage
    const dbRef=firestore().collection('users');
    const addToFavourites = async() => {
        await dbRef
        .add({
        email:auth().currentUser.email,
        favourites: route.params.paramName,
        poster: route.params.paramImage,
})
alert('Added to Favourites');
}
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
                style={styles.logo}
                source={{
                    uri:'https://image.tmdb.org/t/p/original/'+imagepath,
                }}
        />
        <Text>
         {route.params.paramName}
        </Text>
        <Text>
         {route.params.paramDate}
        </Text>
        <Text>
         {route.params.paramView}
        </Text>
        <Pressable>
            <Pressable style={styles.button} onPress={() => {addToFavourites()}}>
                <Text style={styles.text}>Add To Favorites</Text>
            </Pressable>  
            </Pressable>  
            
      </View>
    )
  }
  const styles = StyleSheet.create({
    image: {
      aspectRatio: 670/250
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
    title: {
      fontWeight: 'bold',
      fontSize: 30
    },
    text: {
      fontSize: 20,
      flexWrap: 'wrap'
    },
    logo:{
        width: 120,
        height: 200,
      },
      
  });
  
