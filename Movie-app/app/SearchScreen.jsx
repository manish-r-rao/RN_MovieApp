import { View, Text, ScrollView, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

const SearchScreen = () => {
  const router=useRouter();
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView>
        <View className="mx-4 border flex-row border-neutral-500 rounded-full p-5 justify-between">
          <TextInput
            placeholder='Search Movie'
            className="text-white border-none ml-2 text-xl font-semibold"
            style={{borderWidth:0,
              outlineStyle:"none"
            }}
            placeholderTextColor={"grey"}
          >
          </TextInput>
          <Pressable 
            onPress={()=>router.back()}
          >
            <View className="bg-neutral-700 rounded-full">
              <Entypo name="cross" size={35} color="grey" />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
      <Text className="ml-4 text-white tracking-wider font-normal text-base mt-3
      ">Result(4)</Text>
      
    </View>
  )
}

export default SearchScreen