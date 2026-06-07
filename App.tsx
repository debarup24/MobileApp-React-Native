/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  View,
  Button,
  ScrollView,
} from 'react-native';
import Basics from './src/components/Basics';

import TextInputComponent from './src/components/TextInputComponent';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {' '}
      <ScrollView contentContainerStyle={styles.scrollviewContent}>
        <Basics />
        <TextInputComponent />
      </ScrollView>
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

  scrollviewContent: {
    padding: 19,
  },
});

export default App;
