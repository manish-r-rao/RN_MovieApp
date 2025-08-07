import { View, Text, ScrollView, TextInput, Image, Pressable, Dimensions } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import Loading from '../components/Loading';
import {image,search} from "../api/movieDB"
import debounce  from "lodash.debounce"

const { width, height } = Dimensions.get("window");

const SearchScreen = () => {

  const movieName="he"

  const [result, setResult] = useState([]);
  const [query,setQuery]=useState("");
  
  const [load,isLoad]=useState(false);

  const getSearchedMovies=async ()=>{
    const data=await search(query)
    setResult(data.results);
  }

  useEffect(()=>{
    getSearchedMovies()
  },[query])

  const handleChange=(value)=>{
    setQuery(value)
  }

  const handleTextDebounce=useCallback(debounce(handleChange,700))

  const router = useRouter();
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView>
        <View className="mx-4 border flex-row border-neutral-500 rounded-full p-2 justify-between">
          <TextInput
            placeholder='Search Movie'
            className="text-white border-none ml-2 text-xl font-semibold"
            style={{
              borderWidth: 0,
              outlineStyle: "none"
            }}
            onChangeText={handleTextDebounce}
            placeholderTextColor={"grey"}
          >
          </TextInput>
          <Pressable
            onPress={() => router.back()}
          >
            <View className="bg-neutral-700 my-auto rounded-full">
              <Entypo name="cross" size={30} color="grey" />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
      {
        load ?
        <Loading></Loading> :
        result.length == 0 ? (
          <Image
            source={require("../assets/images/generated-image.png")}
            style={{
              width:width*0.8,
              height:height*0.6
            }}
            className="mx-auto mt-10"
          ></Image>
        ) :
        <ScrollView 
        className="pb-4"
        showsVerticalScrollIndicator={false}
        >
        <Text className="ml-4 text-white tracking-wider font-normal text-base mt-3
      ">Result(4)</Text>
        <View className="flex-row mx-4 gap-y-8 mt-4 justify-between flex-wrap">
          {
            result.map((item) => {
              console.log(item)
              return (
                <Pressable 
                  onPress={()=>router.navigate({pathname:"/MovieScreen",params:item})}
                >
                  <Image
                    source={{uri : image(item.poster_path)}}
                    style={{
                      width: width * 0.43,
                      height: height * 0.35
                    }}
                    className="rounded-3xl"
                  ></Image>
                  <Text className="text-center text-neutral-300 text-base ">{
                  item.title.length > 14 ? item.title.slice(0,14)+"..." :item.title}</Text>
                </Pressable>
              )
            })
          }
        </View>
      </ScrollView>
      }
      
    </View>
  )
}

export default SearchScreen