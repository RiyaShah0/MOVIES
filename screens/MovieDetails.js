import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default function MovieDetails({route}) {
    const imagepath= route.params.paramImage
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
        
      </View>
    )
  }
  const styles = StyleSheet.create({
    image: {
      aspectRatio: 670/250
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30
    },
    text: {
      fontSize: 50,
      flexWrap: 'wrap'
    },
    logo:{
        width: 120,
        height: 200,
      },
  });
  
