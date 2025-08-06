import { View, Text, Pressable, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

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
                    onPress={() => { router.push("/MovieScreen", item) }}
                  >
                    <View className='mr-4'>
                      <Image
                        source={require("../assets/images/3RokBWEkQqJRZEVP3DPwGm5MYh6.webp")}
                        style={{
                          width: width * 0.3,
                          height: height * 0.25
                        }}
                        className='border-none rounded-2xl'
                      ></Image>
                    </View>
                  </Pressable>
                  <Text className='text-white ml-1'>{
                    item.length > 14 ? item.slice(0, 14) + "..." : item
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