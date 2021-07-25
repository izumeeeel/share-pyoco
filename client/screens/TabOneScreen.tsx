import React, {useState, useCallback, useEffect} from 'react';
import { Button, ScrollView, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import axios from 'axios'
import { colors } from '../lib/colors';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

interface IProduct {
  title: string;
  price: number;
}

export default function TabOneScreen() {
  const [text, setText] = useState('')
  const [number, setNumber] = useState('')
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
    await handleFetchPurchases()
  }

  const handleFetchPurchases = useCallback(async () => {
    try {
      const purchases = await axios.get('http://127.0.0.1:3002/items')
      setProducts(purchases.data)
    } catch(error) { 
      console.log('error occured with fetching', error);
    };
    }, [setProducts])

  useEffect(() => {
    handleFetchPurchases()
  }, [])

  return (
    <>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      {products.map((product: IProduct, index: number) => 
      <View key={index} style={styles.purchaseItem}>
        <Text>{product.title}</Text>
        <Text>{product.price + '円'}</Text>
        </View>
      )}
    </ScrollView>
      </SafeAreaView>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} value={text} placeholder='項目名' onChangeText={setText}/>
      <TextInput style={styles.input} value={number} placeholder='価格' onChangeText={setNumber} keyboardType="numeric"/>
      </View>
      <View style={styles.btnContainer}>
        <Button color={colors.text.black} title='Add' onPress={() => handleCreatePurchase()}/>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
    width: '100%',
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
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.primary[500],
    borderRadius: 20
  },
  purchaseItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: 4,
    padding: 2,
    backgroundColor: colors.primary[50]
  }
});
