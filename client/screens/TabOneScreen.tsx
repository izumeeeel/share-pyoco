import React, {useState, useCallback, useEffect} from 'react';
import { Button, ScrollView, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal'
import axios from 'axios'
import { colors } from '../lib/colors';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import fonts from '../lib/fonts';

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

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)

  const [commonExpense, setCommonExpense] = useState(0)

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
        <Button color={colors.text.black} title='Add' onPress={handleCreatePurchase}/>
      </View>
      <View style={styles.btnContainer}>
        <Button color={colors.text.black} title='Open' onPress={handleOpenModal}/>
      </View>
      <SlideModal
        visible={openModal}
        setOpenModal={setOpenModal}
      >
        <ExpenseForm
          commonExpense={commonExpense}
          setCommonExpense={setCommonExpense}
        />
      </SlideModal>
      </>
  );
}

interface ISlideModal {
  visible: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlideModal: React.FC<ISlideModal> = ({visible, setOpenModal, children}) => {
  const handelCloseModal = () => {
    setOpenModal(false)
  }
  return (
    <Modal
      swipeDirection='down'
      isVisible={visible}
      onSwipeComplete={handelCloseModal}
      style={styles.modal}
    >
      {children}
    </Modal>
  )
}

interface IExpenseForm {
  commonExpense: number,
  setCommonExpense: React.Dispatch<React.SetStateAction<number>>; 
}

const ExpenseForm: React.FC<IExpenseForm> = ({commonExpense, setCommonExpense}) => {
  return (
    <View style={styles.expenseContainer}>
    <View　style={styles.expenseTitleContainer}>
      <Text style={styles.expenseTitle}>¥</Text>
      <TextInput
        style={styles.expenseTitle}
        keyboardType='numeric'
        value={commonExpense.toString()}
        onChangeText={setCommonExpense}
      />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    margin: 0
  },
  expenseContainer: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 24
  },
  expenseTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 24
  },
  expenseTitle: {
    fontSize: fonts.size.exLarge,
    fontWeight: fonts.weight.bold,
    textAlign: 'right'
  },
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
