import { View, Text, ScrollView, Pressable, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import Loading from "../components/Loading"
import {castData, image} from "../api/movieDB"

const { height, width } = Dimensions.get("window");

const PersonScreen = () => {

  const router = useRouter();
  const [load,isLoad]=useState(false);
  const [personData,setPersonData]=useState({});

  const item=useLocalSearchParams();

  const getPersonDetails=async()=>{
    console.log(item)
    const data=await castData(item.id)
    setPersonData(data)
  }

  useEffect(()=>{
    getPersonDetails()
  },[])

  return (
    <View className="flex-1 bg-neutral-800">
      {
        load ? 
        <Loading></Loading> :
        <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className=" mx-4 flex-1 bg-neutral-800"
      >
        <View className="w-full">
          <SafeAreaView className=" justify-between w-full flex-row">
            <Pressable
              onPress={router.back}
              className="bg-yellow-500 items-center rounded-lg"
            >
              <Ionicons name="chevron-back-outline" size={30} color="white" />
            </Pressable>
            {/* <Pressable
            onPress={() => setIsFavourite(!isFavourite)}
            className="mr-4"
          >
            <Ionicons
              className={`${isFavourite ? "color-red-600" : "color-white"}`}
              name="heart-sharp" size={30} ></Ionicons>
          </Pressable> */}
          </SafeAreaView>
          <View className="flex-row justify-center"
            style={{
              // shadowColor:"grey",
              // shadowRadius:40,
              // shadowOffset:{width:0, height:5},
              // shadowOpacity:1
            }}
          >
            <View className={`mt-5 rounded-full overflow-hidden border-neutral-400 border-2`}
              style={{
                  width: width * 0.7,
                  height: height * 0.33
                }}
            >
              <Image
                source={{uri : image(personData.profile_path)}}
                style={{
                  width: width * 0.7,
                  height: height * 0.33
                }}
              ></Image>
            </View>
          </View>
          <Text className="text-3xl text-white font-semibold tracking-wide text-center mt-4">{personData.name}</Text>
          <Text className="text-neutral-400 text-base mt-1 text-center tracking-wide"></Text>
          <View className="bg-neutral-700 mt-4 p-6 rounded-full flex-row justify-between">
            <View className="border-r-2 border-r-neutral-200 px-7 items-center">
              <Text className="text-white font-semibold text-base">Gender</Text>
              <Text className="text-neutral-400 text-base font-medium">{personData.gender === 1 ? "Female" : "Male"}</Text>
            </View>
            <View className="border-r-2 border-r-neutral-200 px-5 items-center">
              <Text className="text-white font-semibold text-base">Birthday</Text>
              <Text className="text-neutral-400 text-base font-medium">{personData.birthday}</Text>
            </View>
            <View className=" px-5 items-center">
              <Text className="text-white font-semibold text-base">Popularity</Text>
              <Text className="text-neutral-400 text-base font-medium">{personData.popularity} M</Text>
            </View>
            
          </View>
          <Text className="text-white text-2xl font-semibold tracking-wide mt-5">Biography</Text>
          <Text className="text-sm tracking-wide  mt-2 text-neutral-400">{personData.biography === "" ? "Very great Artist who played a wonderfull role in different movies. One of the finest actors in film industry who dives into his character and performs as a very responsible actor." : personData.biography}</Text>
        </View>
      </ScrollView>
      }
      
    </View>
  )
}

export default PersonScreen