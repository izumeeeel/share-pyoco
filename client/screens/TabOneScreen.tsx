import React, {useState, useCallback, useEffect} from 'react';
import { Button, NativeSyntheticEvent, StyleSheet, TextInput } from 'react-native';
import axios from 'axios'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

interface IProduct {
  title: string;
  price: number;
}

export default function TabOneScreen() {
  const [text, setText] = useState('')
  const [number, setNumber] = useState<Number | null>(null)
  const [products, setProducts] = useState([])

  const handleCreatePurchase = async () => {
    await axios.post('http://127.0.0.1:3002/create', {
      title: text,
      price: number
    }).then(() => {
      console.log('success')
    }).catch((e) => 
      console.log(e)
    )
    await axios.get('http://127.0.0.1:3002/items')
    .then((res) => {
      console.log({res})
      if (res) {
        setProducts(res.data)
      }
    })
    .catch((err) => {
      console.log('error occured', err);
    });
  }


  return (
    <>
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} value={text} placeholder='項目名' onChangeText={setText}/>
      <TextInput style={styles.input} value={number} placeholder='価格' onChangeText={setNumber} keyboardType="numeric"/>
      <Button title='Add' onPress={() => handleCreatePurchase()}/>
      </View>
    <View>
      {products.map((product: IProduct, index: number) => 
      <View key={index}>
        <Text>{index}</Text>
        <Text>{product.title}</Text>
        <Text>{product.price}</Text>
        </View>
      )}
    </View>
    </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    height:25
  },
  inputContainer: {
    width: '100%',
    margin: 8
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
