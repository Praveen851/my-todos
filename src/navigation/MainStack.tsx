import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { RootStackParamList } from './RootStackParamList';
import { ScreenNames } from '../utils/constants/ScreenNames';

const MainStack = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen initialParams={{ title: ScreenNames.Login}} name={ScreenNames.Login} component={LoginScreen}/>
      <Stack.Screen initialParams={{ title: ScreenNames.Register}} name={ScreenNames.Register} component={ RegisterScreen}/>
    </Stack.Navigator>
  )
}

export default MainStack

