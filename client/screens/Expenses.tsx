import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { View } from '../components/Themed'
import { Row } from '../components/molecules/Row'
import { useExpenses } from '../hooks/useExpenses'

const years = [
  {
    year: 2018,
    totalExpense: 246000
  },
  {
    year: 2019,
    totalExpense: 251000
  },
  {
    year: 2020,
    totalExpense: 229000
  },
  {
    year: 2021,
    totalExpense: 235000
  }
]

const Expenses: React.FC = () => {
  const navigation = useNavigation()
  const fetchedExpenses = useExpenses()

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <>
            {years.map((year) => (
              <View key={year.year}>
                <Row
                  leftText={year.year.toString() + '年'}
                  rightText={`¥${year.totalExpense}`}
                  onPress={() =>
                    navigation.navigate('ExpensesMonths', {
                      screen: 'Expenses',
                      year: year.year
                    })
                  }
                />
              </View>
            ))}
            <Text>{JSON.stringify(fetchedExpenses)}</Text>
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

export default Expenses
