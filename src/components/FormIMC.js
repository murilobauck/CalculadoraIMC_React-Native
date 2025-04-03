import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';

const FormIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
    }
  };

  useEffect(() => {
    if (imc !== null) {
      if (imc < 18.5) {
        setClassificacao('Abaixo do peso');
      } else if (imc >= 18.5 && imc < 25) {
        setClassificacao('Peso normal');
      } else if (imc >= 25 && imc < 30) {
        setClassificacao('Sobrepeso');
      } else if (imc >= 30 && imc < 35) {
        setClassificacao('Obesidade grau 1');
      } else if (imc >= 35 && imc < 40) {
        setClassificacao('Obesidade grau 2');
      } else {
        setClassificacao('Obesidade grau 3');
      }
    }
  }, [imc]);

  return (
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
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {imc && <Result imc={imc}  classificacao={classificacao}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default FormIMC;