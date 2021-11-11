import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default upcoming = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=d90825d47218a3cfcae9c7f12291df14');
      const json = await response.json();
      setData(json.results);
      console.log(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor:"black" }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', {
                paramKey: item.id,
                paramName: item.title,
                paramDate: item.release_date,
                paramView: item.overview,
                paramImage: item.poster_path,

              })
              }>
            <View style={styles.container}>
              <Image
                style={styles.logo}
                source={{
                    uri:'https://image.tmdb.org/t/p/original/'+item.poster_path,
                }}
              /> 
              <Text> </Text>
             <Text style={styles.text}> {item.title} , {item.release_date}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop: 70 ,
    backgroundColor: '#212121',
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


