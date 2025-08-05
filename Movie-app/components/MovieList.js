import { View, Text } from 'react-native'
import React from 'react'

const MovieList = ( {title,data}) => {
  return (
    <View>
      <Text className='text-white text-xl'>{title}</Text>
      
    </View>
  )
}

export default MovieList