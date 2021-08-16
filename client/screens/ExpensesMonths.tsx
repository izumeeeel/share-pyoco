import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import { useRoute } from '@react-navigation/native';
import { View } from '../components/Themed'
import { Row } from '../components/molecules/Row'
import { useExpenses } from '../hooks/useExpenses'

const Expenses: React.FC = () => {
  const navigation = useNavigation()
  const fetchedExpenses = useExpenses('year').data
  console.log({ fetchedExpenses })
  // const route = useRoute()
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <>
            {fetchedExpenses?.data &&
              fetchedExpenses.data['2021'].monthlyExpenses.map((expense) => (
                <View key={expense.span}>
                  <Row
                    leftText={expense.span.toString() + '月'}
                    rightText={`¥${expense.totalExpense}`}
                    onPress={() =>
                      navigation.navigate('ExpensesMonth', {
                        screen: 'Expenses',
                        month: expense.span
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
