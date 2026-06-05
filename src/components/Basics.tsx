import { useState } from 'react';
import { Image, View, Button, StyleSheet } from 'react-native';
import { Text } from 'react-native';

function Basics() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <View style={styles.boxContainer}>
        <View style={styles.boxContainer} />
        <View />
        <View />
        <Text style={styles.myText}>Hello. this is my React Native..</Text>
        <Text style={styles.nestedText}>
          Hello. this is the nested text. Text component can be{' '}
          <Text style={styles.boldText}>nested</Text>
        </Text>{' '}
        <View style={styles.ImgContainer}>
          <Image
            style={styles.myImage}
            source={{
              uri: 'https://randomimageurl.com/assets/images/local/20260103_0522_Pristine%20Image%20Quality_simple_compose_01ke20ajtre4eaykj0j132wk58_compressed_q80.jpeg',
            }}
          />
          <Image
            style={styles.myImage}
            source={{
              uri: 'https://randomimageurl.com/assets/images/local/20260103_0519_Candid%20Lifestyle%20Moment_simple_compose_01ke2071pmfpsa9bcmegewm074_compressed_q80.jpeg',
            }}
          />
          <Image
            style={styles.myImage}
            source={{
              uri: 'https://randomimageurl.com/assets/images/local/20260103_0523_Crystal%20Clear%20Image_simple_compose_01ke20cjm8fpwaa2qja1gjs7mn_compressed_q80.jpeg',
            }}
          />
          {/* Local Img */}
          <Image
            style={styles.myImage}
            source={require('../../assets/dhurandhar.jpg')}
          />
        </View>
      </View>
      <Button
        title="Click Me"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Text>Count : {count}</Text>
    </>
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

export default Basics;
