import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        placeholder='Peso de la persona en kilogramos'/>
        <TextInput 
        style={styles.textInput}
        placeholder='Estatura de la persona en metros'/>
      </View>

      <View style={styles.commandsContainer}>
        <Button title='Calcular' color={'green'}/>
        <Button title='Limpiar' color={'red'}/>
      </View>
      
      <View style={styles.resultsContainer}>
        <Text style={styles.resultText}>El índice de masa corporal es:</Text>
        <Text style={styles.result}>24.376</Text>
        <Text style={styles.resultText}>El estado nutricional es:</Text>
        <Text style={styles.result}>Peso normal</Text>
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
    padding: 16,
    
  },
  commandsContainer: {
    flexDirection: 'row',
    marginVertical: 24,
    justifyContent: 'center',
    gap: 48,

  }, 
  resultsContainer: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,

  },
  textInput: {
    borderColor: 'lightgray',
    borderWidth: 1, 
    margin: 4,
    fontSize: 18, 
  },
  resultText: {
    fontSize: 18
  }, 
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12
  }
});
