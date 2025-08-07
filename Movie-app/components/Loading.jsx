import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from "react-native-progress"

const Loading = () => {
  return (
    <View className='flex-1 items-center  justify-center'>
      <Progress.CircleSnail color={["orange","skyblue","green"]} size={200}  thickness={10} indeterminate={true} ></Progress.CircleSnail >
    </View>
  )
}

export default Loading