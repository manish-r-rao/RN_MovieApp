import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import axiosInstance from '../api/axiosConfig'


const apiData = () => {

  let trendingMoviesData={};
  const getData = async () => {
    trendingMoviesData = await axiosInstance.get("/popular?api_key=48278951ad7dedb8d61e582f60b5eaa1'")
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <View>
      <Text>apiData</Text>
    </View>
  )
}

export default apiData