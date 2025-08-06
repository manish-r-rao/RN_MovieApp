import { View, Text, ScrollView, Pressable, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useRouter } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import {LinearGradient } from "expo-linear-gradient"
import Cast from './Cast';
import MovieList from "../components/MovieList"

const {height,width}=Dimensions.get("window")

const MovieScreen = () => {

  const { params: item } = useRouter();

  const [isFavourite,setIsFavourite]=useState();

  useEffect(() => {
    // api call
  }, [item])

  const [cast,setCast]=useState([1,2,3,4,4]);

  return (
    <>
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
            onPress={()=>setIsFavourite(!isFavourite)}
            className="mr-4"
          >
            <Ionicons
              className={`${isFavourite ? "color-red-600" : "color-white"}`}
             name="heart-sharp" size={30} ></Ionicons>
          </Pressable>
        </SafeAreaView>
        <View>
          <Image
            source={require("../assets/images/3RokBWEkQqJRZEVP3DPwGm5MYh6.webp")}
            style={{height:height*0.5,width}}
          ></Image>
        </View>
        <LinearGradient
          colors={["transparent" , "rgba(38,38,38,0.8)","rgba(38,38,38,1)"]}
          className="absolute"
          style={{width,height:height*0.5}}
          start={{x:0.5,y:0}}
          end={{x:0.5,y:1}}
        ></LinearGradient>
        {/* movie details */}
        <View>
          <Text className="w-full text-white font-semibold text-center text-3xl tracking-wider -mt-8">Movie name very big movie name</Text>
          <Text className="text-neutral-400 font-semibold text-base text-center tracking-wide mt-1">Release  •  2020  •  170 min</Text>
          <Text className="text-base tracking-wide text-center text-neutral-400 text-base font-semibold">Action • Thrill • Comedy</Text>
          <Text className="mx-4 text-neutral-400 mt-5 text-base tracking-normal">React will try to recreate this component tree from scratch using the error boundary you provided, React will try to recreate this component tree from scratch using the error boundary you provided, LogBoion.</Text>
        </View>
        <Cast cast={cast}></Cast>
        <MovieList title="Similar Movies" data={[1,2,3,2,1,1]} hideSeeAll={true}></MovieList>
      </View>
    </ScrollView>
    </>
  )
}

export default MovieScreen