import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../lib/colors'
import { useForm, Controller } from 'react-hook-form'
import styles from './styles/Signin'

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data: unknown) => console.log(data)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ログイン</Text>
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>メールアドレス</Text>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                // eslint-disable-next-line
                value={value}
              />
            </View>
          )}
          name='firstName'
          defaultValue=''
        />
        {errors.firstName && (
          <Text style={styles.error}>This is required.</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>パスワード</Text>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                // eslint-disable-next-line
                value={value}
              />
            </View>
          )}
          name='lastName'
          defaultValue=''
        />
        <View style={styles.submitBtn}>
          <Button
            title='ログイン'
            color={colors.text.white}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
