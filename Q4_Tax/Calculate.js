import { ScrollView, Text, TextInput, Button, View } from "react-native";
import React, {useState} from 'react';
import Styles from './style';

const Calculate = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState('');

  const calculateTax = () => {
    const input = parseFloat(income);

    let taxAmount = 0;
    if (input < 10000000) {
      taxAmount = 0;
    } else if (input < 50000000) {
      taxAmount = input*0.01;
    } else {
      taxAmount = input*0.05;
    }
    setTax(`Income Tax: ${taxAmount.toFixed(2)}đ`)
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Income Tax Calculator</Text>
        <TextInput
          style={Styles.input}
          placeholder='Input income'
          value={income}
          onChangeText={text => setIncome(text)}/>
        <Button title="CALCULATE TAX" onPress={calculateTax}/>
        <Text style={Styles.res}>{tax}</Text>
      </View>
    </ScrollView> 
  )
};
export default Calculate;