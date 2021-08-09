import { StyleSheet } from 'react-native'
import { colors } from '../../lib/colors'
import fonts from '../../lib/fonts'

const width = 280
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    marginBottom: 36,
    width
  },
  title: {
    fontSize: fonts.size.large,
    fontWeight: fonts.weight.bold
  },
  inputContainer: {
    marginTop: 16,
    width
  },
  input: {
    fontSize: fonts.size.medium,
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 8,
    marginTop: 4
  },
  inputTitle: {
    fontSize: fonts.size.small
  },
  error: {
    fontSize: fonts.size.small,
    color: colors.text.error
  },
  submitBtn: {
    backgroundColor: colors.primary[500],
    marginTop: 44,
    borderRadius: 20,
    shadowColor: colors.bg.black,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    width
  }
})
