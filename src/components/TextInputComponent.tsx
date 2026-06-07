import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const TextInputComponent = () => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TextInput component</Text>
      <TextInput
        value={value}
        placeholder="placeholde"
        style={styles.input}
        onChangeText={setValue}
      />{' '}
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginBottom: 20,
    padding: 6,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 28,
  },
});
