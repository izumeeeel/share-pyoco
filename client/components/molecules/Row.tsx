import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import fonts from '../../lib/fonts'
import { IconAntDesign, Text, View } from '../Themed'

interface IRow {
  leftText: string
  rightText: string
  onPress: () => void
}

export const Row: React.FC<IRow> = ({ leftText, rightText, onPress }) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.leftText}>{leftText}</Text>
        </View>
        <View style={styles.rightTextContainer}>
          <Text style={styles.rightText}>{rightText}</Text>
        </View>
        <View style={styles.chevron}>
          <IconAntDesign name='right' color='black' />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    paddingLeft: 16
  },
  leftText: {
    fontSize: fonts.size.medium
  },
  rightTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1
  },
  rightText: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.bold
  },
  chevron: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 44
  }
})
