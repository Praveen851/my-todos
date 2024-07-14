import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/RootStackParamList'
import ScreenNames from '../utils/constants/ScreenNames'


type Props = NativeStackScreenProps<RootStackParamList, ScreenNames>

const LoginScreen = ({ route}: Props) => {
  return (
    <View>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default LoginScreen