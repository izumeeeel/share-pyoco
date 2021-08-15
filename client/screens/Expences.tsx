import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { View } from '../components/Themed'
import { Row } from '../components/molecules/Row'
import { useExpences } from '../hooks/useExpences'

const years = [
  {
    year: 2018,
    totalExpence: 246000
  },
  {
    year: 2019,
    totalExpence: 251000
  },
  {
    year: 2020,
    totalExpence: 229000
  },
  {
    year: 2021,
    totalExpence: 235000
  }
]

const Expences: React.FC = () => {
  const navigation = useNavigation()
  const fetchedExpences = useExpences()

  console.log()

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <>
            {years.map((year) => (
              <View key={year.year}>
                <Row
                  leftText={year.year.toString() + '年'}
                  rightText={`¥${year.totalExpence}`}
                  onPress={() =>
                    navigation.navigate('ExpencesMonths', {
                      screen: 'Expences',
                      year: year.year
                    })
                  }
                />
              </View>
            ))}
            <Text>{JSON.stringify(fetchedExpences)}</Text>
          </>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
    width: '100%'
  }
})

export default Expences
