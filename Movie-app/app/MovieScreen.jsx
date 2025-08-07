import { View, Text, ScrollView, Pressable, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useRouter } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient"
import Cast from './Cast';
import MovieList from "../components/MovieList"
import Loading from "../components/Loading"
import { image, movieDetails, personDetails, similarMovies } from "../api/movieDB"
import { useLocalSearchParams } from 'expo-router';

const { height, width } = Dimensions.get("window")

const MovieScreen = () => {

  const item = useLocalSearchParams();
  const [load, isLoad] = useState(false);
  const [similar,setSimilar]=useState([]);
  const [movieData, setMovieData] = useState({});
  const [cast, setCast] = useState([]);
  const [isFavourite, setIsFavourite] = useState();

  const getMovieDetails = async () => {
    let data = await movieDetails(item.id);
    setMovieData(data);
    data=await personDetails(item.id)
    setCast(data)
    data=await similarMovies(item.id)
    setSimilar(data.results);
    console.log(data.results)
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  

  return (
    <>
      {
        load ?
          <View className="flex-1 bg-neutral-800">
            <Loading ></Loading>
          </View> :
          <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-800"
          >
            <View className="w-full">
              <SafeAreaView className="absolute z-10 justify-between w-full flex-row">
                <Pressable
                  onPress={router.back}
                  className="bg-yellow-500 ml-4 items-center rounded-lg"
                >
                  <Ionicons name="chevron-back-outline" size={30} color="white" />
                </Pressable>
                <Pressable
                  onPress={() => setIsFavourite(!isFavourite)}
                  className="mr-4"
                >
                  <Ionicons
                    className={`${isFavourite ? "color-red-600" : "color-white"}`}
                    name="heart-sharp" size={30} ></Ionicons>
                </Pressable>
              </SafeAreaView>
              <View>
                <Image
                  source={{ uri: image(item.poster_path) }}
                  style={{ height: height * 0.5, width }}
                ></Image>
              </View>
              <LinearGradient
                colors={["transparent", "rgba(38,38,38,0.6)", "rgba(38,38,38,1)"]}
                className="absolute"
                style={{ width, height: height * 0.51 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              ></LinearGradient>
              {/* movie details */}
              <View>
                <Text className="w-full text-white font-semibold text-center text-3xl tracking-wider -mt-4">{item.title}</Text>
                <Text className="text-neutral-400 font-semibold text-base text-center tracking-wide mt-1">{movieData.status}  •  {movieData.release_date?.slice(0, 4)}  •  {movieData.runtime} min</Text>
                <View className="flex-row justify-center">
                  {movieData.genres?.map((item, index) => {

                    let showdot = index + 1 != movieData.genres?.length
                    return (
                      < Text className="text-base tracking-wide  text-neutral-400 text-base font-semibold">{item.name} {showdot ? "  •  " :null}</Text>
                    )
                  })}
                </View>
                <Text className="mx-4 text-neutral-400 mt-5 text-base tracking-normal">{item.overview}</Text>
              </View>
              {
                cast.cast?.length === 0 ? null :<Cast cast={cast.cast}></Cast>
              }
              
              <MovieList title="Similar Movies" data={similar} hideSeeAll={true}></MovieList>
            </View>
          </ScrollView >

      }

    </>
  )
}

export default MovieScreen