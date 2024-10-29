import { useState } from 'react';
import {TextButton} from './components/TextButton';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState(0);
  const [estatura, setEstatura] = useState(0);
  const [imc, setImc] = useState(null);
  const [estadoNutricional, setEstadoNutricional] = useState(null);

  function PesoInputHandler(enteredText) {
    setPeso(enteredText); 
  } 
  
    function EstaturaInputHandler(enteredText) {
    setEstatura(enteredText); 
  }

  function IndiceDeMasaCorporal(peso, estatura) {
    return peso / (estatura * estatura); 
  }
 
  function DeterminaEstadoNutricional(imc) {
    if (imc < 18.5) {
      return "Peso bajo";
    }
    if (imc < 25.0) {
      return "Peso normal";
    }
    if (imc < 30.0) {
      return "Sobrepeso";
    }
    if (imc < 40.0) {
      return "Obesidad";
    }
    return "Obesidad Extrema"; 
  }

  function onCalcularButtonTapped(){
    const bmi = IndiceDeMasaCorporal(peso, estatura);
    setImc(bmi.toFixed(4));
    setEstadoNutricional(DeterminaEstadoNutricional(bmi));
  }

  function onLimpiarButtonTapped() {
    setPeso(0);
    setEstatura(0);
    setImc(null);
    setEstadoNutricional(null);
  }


  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        placeholder='Peso de la persona en kilogramos'
        onChangeText={PesoInputHandler}
        value={peso} />
        <TextInput 
        style={styles.textInput}
        placeholder='Estatura de la persona en metros'
        onChangeText={EstaturaInputHandler}
        value={estatura} />
      </View>

      <View style={styles.commandsContainer}>
          <TextButton title= 'Calcular' onPress={onCalcularButtonTapped}/>
          <TextButton title= 'Limpiar' onPress={onLimpiarButtonTapped}/>
        {/*<View> 
          <Pressable onPress={onCalcularButtonTapped}>
          <View style={styles.buttonCalcular}>
          <Text style={styles.textButton}>Calcular</Text>
          </View>
        </Pressable> 
        </View> */}
        {/* <View>
        <Pressable onPress={onLimpiarButtonTapped}>
          <View style={styles.buttonLimpiar}>
          <Text style={styles.textButton}>Limpiar</Text>
          </View>
        </Pressable>
        </View> */}
        {/* <Button title='Calcular' color={'green'}
        onPress={onCalcularButtonTapped} />
        <Button title='Limpiar' color={'red'}
        onPress={onLimpiarButtonTapped} /> */}
        </View> 
      
      <View style={styles.resultsContainer}>
        <Text style={styles.resultText}>El índice de masa corporal es:</Text>
        <Text style={styles.result}>{imc}</Text>
        <Text style={styles.resultText}>El estado nutricional es:</Text>
        <Text style={styles.result}>{estadoNutricional}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputContainer: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 8,
    padding: 16
  },
  commandsContainer: {
    flexDirection: 'row',
    marginVertical: 24,
    justifyContent: 'center',
    gap: 48
  }, 
  resultsContainer: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 8,
    padding: 16
  },
  textInput: {
    borderColor: 'lightgray',
    borderWidth: 1, 
    margin: 4,
    fontSize: 18
  },
  resultText: {
    fontSize: 18
  }, 
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12
  },
  // buttonCalcular: {
  //   borderColor: 'green',
  //   backgroundColor: 'green',
  //   borderWidth: 2, 
  //   borderRadius: 5,
  //   padding: 8
  // },
  // buttonLimpiar: {
  //   borderColor: 'red',
  //   backgroundColor: 'red',
  //   borderWidth: 2, 
  //   borderRadius: 5,
  //   padding: 8
  // },
  // textButton: {
  //   color: 'white',
  //   fontSize: 18
  // }

});
