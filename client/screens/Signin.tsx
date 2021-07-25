import React, { useContext, useState } from 'react';
import { Text, View, TextInput, Button, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../lib/colors';
import { useForm, Controller } from "react-hook-form";
import styles from './styles/Signin'


type Inputs = {
  example: string,
  exampleRequired: string,
};

const SignIn = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


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
            value={value}
          />
          </View>
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && <Text style={styles.error}>This is required.</Text>}

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
            value={value}
          />
          </View>
        )}
        name="lastName"
        defaultValue=""
      />
      <View style={styles.submitBtn}>
        <Button title="ログイン" color={colors.text.white}  onPress={handleSubmit(onSubmit)}/>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default SignIn;
