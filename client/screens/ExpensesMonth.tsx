import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import { useRoute } from '@react-navigation/native'

import { View } from '../components/Themed'
import { Row } from '../components/molecules/Row'

const expenses = [
  {
    id: 0,
    title: 'ハナマサ',
    expense: 5460
  },
  {
    id: 1,
    title: 'ABAB',
    expense: 6460
  },
  {
    id: 2,
    title: 'Spotify',
    expense: 1200
  },
  {
    id: 3,
    title: '電気',
    expense: 2460
  }
]

const ExpensesMonth: React.FC = () => {
  const navigation = useNavigation()
  // const route = useRoute()
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <>
            {expenses.map((expense) => (
              <View key={expense.id}>
                <Row
                  leftText={expense.title}
                  rightText={`¥${expense.expense}`}
                  onPress={() =>
                    navigation.navigate('Expenses', {
                      screen: 'Expenses',
                      expense: expense.id
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

export default ExpensesMonth
