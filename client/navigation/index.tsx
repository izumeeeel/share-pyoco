/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import Expenses from '../screens/Expenses'
import ExpensesMonths from '../screens/ExpensesMonths'
import ExpensesMonth from '../screens/ExpensesMonth'

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName
}): JSX.Element {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name='Expenses'
        component={Expenses}
        options={{ title: '支出合計' }}
      />
      <Stack.Screen
        name='ExpensesMonths'
        component={ExpensesMonths}
        options={(route) => ({ title: route.route.params?.year + '年' })}
      />
      <Stack.Screen
        name='ExpensesMonth'
        component={ExpensesMonth}
        options={(route) => ({ title: route.route.params?.month + '月' })}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  )
}
