import { View, Text, Pressable, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import {image } from "../api/movieDB"

const { width, height } = Dimensions.get("window");

const MovieList = ({ title, data, hideSeeAll }) => {

  const router = useRouter();

  return (
    <>
      <View className='mt-8 ml-4'>
        <View className='flex-row justify-between'>
          <Text className='text-white text-xl'>{title}</Text>
          { hideSeeAll ? null :
            <Pressable>
              <Text className='text-yellow-600 mt-2'>See more</Text>
            </Pressable>
          }
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName='mt-5 '
        >
          {
            data.map((item, index) => {
              return (
                <><View>
                  <Pressable
                    onPress={() => { router.push({pathname:"/MovieScreen" , params:item}) }}
                  >
                    <View className='mr-4'>
                      <Image
                        source={{uri : image(item.poster_path)}}
                        style={{
                          width: width * 0.3,
                          height: height * 0.25
                        }}
                        className='border-none rounded-2xl'
                      ></Image>
                    </View>
                  </Pressable>
                  <Text className='text-white -ml-4 text-center'>{
                    typeof item.title === "string" ?
                     item.title.length > 15 ? item.title.slice(0,15)+"..." : item.title :""
                  }</Text>
                </View></>
              )
            })
          }
        </ScrollView>
      </View>
    </>
  )
}

export default MovieList