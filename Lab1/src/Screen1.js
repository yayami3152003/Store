import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const Screen1 = (props) => {
  const {navigation} = props;

  const ClickNe = () => {
    // navigation.navigate('Screen2', {'name' : 'Nguyen Phuc Quy', 'old': 20});
    navigation.navigate('Screen2');
  }
  return (
    <View>
      <Text>Screen1</Text>
      <Pressable style={styles.pressable} onPress={ClickNe}>
        <Text style={styles.text}>Go to Screen2</Text>
      </Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    pressable: {
        height: 30,
        backgroundColor: 'blue',
        borderRadius: 10
    },
    text: {
        color: 'white'
    }
})