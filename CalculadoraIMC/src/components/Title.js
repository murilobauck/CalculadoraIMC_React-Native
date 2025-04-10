import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = () => {
  return (
    <Text style={styles.title}>Calculadora de IMC</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '320',
    textAlign: 'center',
    marginTop: 32,
    color: '#2c3e50',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowRadius: 2,
  },
});

export default Title;