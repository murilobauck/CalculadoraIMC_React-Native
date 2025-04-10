import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import Result from './Result';

const FormIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [pesoIdeal, setPesoIdeal] = useState({ min: 0, max: 0 });

  // Função para calcular o IMC e classificação
  const calcularIMC = () => {

    // Validação de campos vazios
    if (!peso || !altura) {
      Alert.alert('Erro', 'Por favor, preencha peso e altura');
      return;
    }

    // Conversão de string para número
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Validação de valores inválidos
    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0 || pesoNum <= 0) {
      Alert.alert('Erro', 'Por favor, insira valores válidos');
      return;
    }

    // Cálculo do IMC
    const alturaMetros = alturaNum / 100;
    const imcCalculado = (pesoNum / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);

    // Calcula o peso ideal
    const min = (18.5 * Math.pow(alturaMetros, 2)).toFixed(1);
    const max = (24.9 * Math.pow(alturaMetros, 2)).toFixed(1);
    setPesoIdeal({ min, max });

    // Determina a classificação
    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado < 25) {
      setClassificacao('Peso normal');
    } else if (imcCalculado < 30) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado < 35) {
      setClassificacao('Obesidade grau 1');
    } else if (imcCalculado < 40) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />
          <TextInput
            style={styles.input}
            placeholder="Altura (cm)"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />
          <Button 
            title="Calcular IMC" 
            onPress={calcularIMC} 
            color="#4a90e2"
          />
          {imc && <Result imc={imc} classificacao={classificacao} pesoIdeal={pesoIdeal} />}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default FormIMC;