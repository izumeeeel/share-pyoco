import React, {useState, useCallback, useEffect} from 'react';
import { Button, ScrollView, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal'
import axios from 'axios'
import { colors } from '../lib/colors';
import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import fonts from '../lib/fonts';
import { Row } from '../components/molecules/Row';

interface IProduct {
  title: string;
  price: number;
}

const months = [
  {
    month: 2018,
    totalExpence: 246000,
  }, 
  {
    month: 2019,
    totalExpence: 251000,
  },
  {
    month: 2020,
    totalExpence: 229000,
  }, 
  {
    month: 2021,
    totalExpence: 235000,
  }, 
]

const Stack = createStackNavigator<RootStackParamList>()

export default function Expences() {
  const navigation = useNavigation()
  return (
    <>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <>
      {months.map(month => 
      <View key={month.month}>
        <Row 
          leftText={month.month.toString()}
          rightText={'¥' + month.totalExpence}
          onPress={() => navigation.navigate('Expences', {
            screen: 'Expences',
            month: month.month
          })}
        />
        </View>
      )}
      </>
    </ScrollView>
      </SafeAreaView>
      </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
    width: '100%',
  },
});
