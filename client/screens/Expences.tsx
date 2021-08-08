import React, {useState, useCallback, useEffect} from 'react';
import { Button, ScrollView, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal'
import axios from 'axios'
import { colors } from '../lib/colors';
import { useNavigation } from '@react-navigation/native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import fonts from '../lib/fonts';
import { Row } from '../components/molecules/Row';

interface IProduct {
  title: string;
  price: number;
}

const years = [
  {
    year: 2018,
    totalExpence: 246000,
  }, 
  {
    year: 2019,
    totalExpence: 251000,
  },
  {
    year: 2020,
    totalExpence: 229000,
  }, 
  {
    year: 2021,
    totalExpence: 235000,
  }, 
]

export default function Expences() {
  const navigation = useNavigation()
  return (
    <>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <>
      {years.map(year => 
      <View key={year.year}>
        <Row 
          leftText={year.year.toString()}
          rightText={'¥' + year.totalExpence}
          onPress={() => navigation.navigate('ExpencesMonths', {
            screen: 'Expences',
            year: year.year
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
