import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import { useRoute } from '@react-navigation/native';
import { View } from '../components/Themed'
import { Row } from '../components/molecules/Row'

const months = [
  {
    month: 5,
    totalExpence: 24600
  },
  {
    month: 6,
    totalExpence: 25100
  },
  {
    month: 7,
    totalExpence: 22900
  },
  {
    month: 8,
    totalExpence: 23500
  }
]

const Expences: React.FC = () => {
  const navigation = useNavigation()
  // const route = useRoute()
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <>
            {months.map((month) => (
              <View key={month.month}>
                <Row
                  leftText={month.month.toString() + '月'}
                  rightText={`¥${month.totalExpence}`}
                  onPress={() =>
                    navigation.navigate('ExpencesMonth', {
                      screen: 'Expences',
                      month: month.month
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

export default Expences
