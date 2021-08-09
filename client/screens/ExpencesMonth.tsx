import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import { useRoute } from '@react-navigation/native'

import { View } from '../components/Themed'
import { Row } from '../components/molecules/Row'

const expences = [
  {
    id: 0,
    title: 'ハナマサ',
    expence: 5460
  },
  {
    id: 1,
    title: 'ABAB',
    expence: 6460
  },
  {
    id: 2,
    title: 'Spotify',
    expence: 1200
  },
  {
    id: 3,
    title: '電気',
    expence: 2460
  }
]

const ExpencesMonth: React.FC = () => {
  const navigation = useNavigation()
  // const route = useRoute()
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <>
            {expences.map((expence) => (
              <View key={expence.id}>
                <Row
                  leftText={expence.title}
                  rightText={`¥${expence.expence}`}
                  onPress={() =>
                    navigation.navigate('Expences', {
                      screen: 'Expences',
                      expence: expence.id
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

export default ExpencesMonth
