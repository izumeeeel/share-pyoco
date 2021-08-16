import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import _ from 'lodash'

import { View } from '../components/Themed'
import { Row } from '../components/molecules/Row'
import { useExpenses } from '../hooks/useExpenses'

const Expenses: React.FC = () => {
  const navigation = useNavigation()
  const fetchedExpenses = useExpenses('year').data
  console.log({ fetchedExpenses })
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <>
            {fetchedExpenses?.data &&
              fetchedExpenses.data.map((expense) => (
                <View key={expense}>
                  <Row
                    leftText={expense.year.toString() + '年'}
                    rightText={`¥${expense.totalExpense}`}
                    onPress={() =>
                      navigation.navigate('ExpensesMonths', {
                        screen: 'Expenses',
                        year: expense.year
                      })
                    }
                  />
                </View>
              ))}
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
