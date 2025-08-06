import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

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
        {cast.map((item) => {
          return (
            <View className="mr-4 mt-4">
              <Pressable
                onPress={()=>router.push("./PersonScreen")}
              >
                <Image
                  source={require("../assets/images/modi.webp")}
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
              <Text className="text-white text-center">{characterName.length > 10 ? characterName.slice(0, 10) + "..." : characterName}</Text>
              <Text className="text-white text-center"> {personName}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Cast