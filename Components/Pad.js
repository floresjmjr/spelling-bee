import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import TextInputButtons from './TextInputButtons';

const Pad = () => {
  const [lettersPressed, setLettersPressed] = useState('Some W');

  const buttonLHandler = (letter) => {
    setLettersPressed((prevState) => prevState + letter)
  }

  const deleteHandler = () => {
    setLettersPressed((prevState) => prevState.substring(0, prevState.length - 1))
  }

  const LETTERS = ['W', 'N', 'G', 'I', 'L', 'C', 'A']

  const buttons = LETTERS.map((letter) => <Button title={`Letter ${letter}`} key={letter} onPress={() => buttonLHandler(letter)}>L</Button>)
  return (<>
    <View>
      <TextInput caretHidden={false}>{lettersPressed}</TextInput>
    </View>
    <View>
      <Text>Pafdfdsfsfd</Text>
      {buttons}
    </View>
    <TextInputButtons delete={deleteHandler} ></TextInputButtons>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red'
  }
});


export default Pad;