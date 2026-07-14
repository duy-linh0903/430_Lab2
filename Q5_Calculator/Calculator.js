import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {useState} from 'react';
import Styles from "./style";

const Calculator = () => {
    const [operation, setOperation] = useState('');
    const [firstNum, setFirstNum] = useState('');
    const [curNum, setCurNum] = useState('');
    const [display, setDisplay] = useState('0');

    const numberBtn = (num) => {
      if (display==='0') {
        setDisplay(num.toString());
      } else {
        setDisplay(display + num.toString());
      }
      setCurNum(curNum + num.toString());
    }

    const operatorBtn = (operator) => {
      setFirstNum(curNum);
      setOperation(operator);
      setDisplay(display+operator);
      setCurNum('');
    }

    const clear = () => {
      setOperation('');
      setFirstNum('');
      setCurNum('');
      setDisplay('0');
    }

    const calculate = () => {
      const first = parseFloat(firstNum);
      const second = parseFloat(curNum);
      if (operation==='+') {
        setDisplay((first + second).toString());
      } else if (operation==='-') {
        setDisplay((first - second).toString());
      } else if (operation==='x') {
        setDisplay((first * second).toString());
      } else if (operation==='/') {
        if (second===0) {
          setDisplay('Error');
        } else setDisplay((first / second).toString());
      }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={Styles.container}>
            <View style={Styles.display}>
                <Text style={Styles.result}>{display}</Text>
            </View>
            <View>
              <View style={Styles.row}>
                <TouchableOpacity style={Styles.btn} onPress={() => numberBtn(7)}>
                  <Text style={Styles.btn_text}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btn} onPress={() => numberBtn(8)}>
                  <Text style={Styles.btn_text}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btn} onPress={() => numberBtn(9)}>
                  <Text style={Styles.btn_text}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn,Styles.btn_operator]} onPress={()=> operatorBtn('/')}>
                  <Text style={Styles.btn_cal}>/</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.row}>
                <TouchableOpacity style={Styles.btn} onPress={() => numberBtn(4)}>
                  <Text style={Styles.btn_text}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btn} onPress={() => numberBtn(5)}>
                  <Text style={Styles.btn_text}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btn} onPress={() => numberBtn(6)}>
                  <Text style={Styles.btn_text}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn,Styles.btn_operator]} onPress={()=> operatorBtn('x')}>
                  <Text style={Styles.btn_cal}>x</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.row}>
                <TouchableOpacity style={Styles.btn} onPress={() => numberBtn(1)}>
                  <Text style={Styles.btn_text}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btn} onPress={() => numberBtn(2)}>
                  <Text style={Styles.btn_text}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btn} onPress={() => numberBtn(3)}>
                  <Text style={Styles.btn_text}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn,Styles.btn_operator]} onPress={()=> operatorBtn('-')}>
                  <Text style={Styles.btn_cal}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.row}>
                <TouchableOpacity style={[Styles.specialBtn,Styles.two]} onPress={() => numberBtn(0)}>
                  <Text style={Styles.btn_text}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn,Styles.btn_equal]} onPress={()=>calculate()}>
                  <Text style={Styles.text_equal}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.btn,Styles.btn_operator]} onPress={()=> operatorBtn('+')}>
                  <Text style={Styles.btn_cal}>+</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={[Styles.specialBtn,Styles.full]} onPress={()=>clear()}>
                  <Text style={Styles.btn_text}>C</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
    );
};

export default Calculator;