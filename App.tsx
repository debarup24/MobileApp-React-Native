/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StatusBar, StyleSheet, Image, View, Button } from 'react-native';
import Basics from './src/components/Basics';

import TextInputComponent from './src/components/TextInputComponent';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {' '}
      <Basics />
      <TextInputComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 30,
    padding: 10,
  },
  boxContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  myText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'red',
  },
  nestedText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'green',
  },
  boldText: {
    fontWeight: 'bold',
  },
  ImgContainer: {
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  myImage: {
    width: 160,
    height: 180,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 8,
  },
});

export default App;
