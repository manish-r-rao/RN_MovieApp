import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import {image} from "../api/movieDB"

const Cast = ({ cast }) => {

  const personName = "Sudip"
  const characterName = "Kempe Gowda"
  
  const router=useRouter();

  return (
    <View className="mt-6 mx-4">
      <Text className="text-white font-semibold text-2xl">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {cast?.map((item) => {
          return (
            <View className="mr-4 mt-4">
              <Pressable
                onPress={()=>router.push({pathname:"./PersonScreen",params:item})}
              >
                <Image
                  source={{uri : image(item.profile_path)}}
                  className="rounded-full"
                  style={{
                    width: 80,
                    height: 80,
                    // borderRadius: "100%",
                    borderColor: "grey",
                    borderWidth: 2
                  }}
                >
                </Image>
              </Pressable>
              <Text className="text-white text-center">{item.character?.length > 10 ? item.character.slice(0, 10) + "..." : item.character}</Text>
              <Text className="text-white text-center"> {item.name?.length > 10 ? item.name.slice(0, 10) + "..." : item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Cast