/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.text}>BIENVENIDO</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Hola!')}>
        <Text style={styles.buttonText}>Registrar Cajero</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Hola!')}>
        <Text style={styles.buttonText}>Registrar venta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Hola!')}>
        <Text style={styles.buttonText}>Consultar cajeros</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    gap: 15,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35,
  },
  button:{
    backgroundColor: 'black',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HomeScreen;
