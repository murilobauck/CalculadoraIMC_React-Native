import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = ({ imc, classificacao, pesoIdeal }) => {
  return (
    <View style={styles.container}>

      // Valor do IMC
      <Text style={styles.result}>Seu IMC: {imc}</Text>

      // Classificação do IMC
      <Text style={styles.classification}>Classificação: {classificacao}</Text>

      // Peso ideal
      <View style={styles.idealWeightContainer}>
        <Text style={styles.idealWeightTitle}>Peso Ideal:</Text>
        <Text style={styles.idealWeight}>Mínimo: {pesoIdeal.min} kg</Text>
        <Text style={styles.idealWeight}>Máximo: {pesoIdeal.max} kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  classification: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginBottom: 15,
  },
  idealWeightContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  idealWeightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  idealWeight: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});

export default Result;