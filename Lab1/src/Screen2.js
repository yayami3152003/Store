import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const Screen2 = (props) => {

  // const {navigation, route} = props;
  // const{params} = route;
  const {navigation} = props;


  const ClickNeNe = () => {
    navigation.navigate('Screen1');
    // navigation.goBack();
  }
  return (
    <View>
      <Text>Screen1</Text>
      {/* <Text>{params?.name}</Text>
      <Text>{params?.old}</Text> */}
      <Pressable style={styles.pressable} onPress={ClickNeNe}>
        <Text style={styles.text}>Go to Screen1</Text>
      </Pressable>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    pressable: {
        height: 30,
        backgroundColor: 'green',
        borderRadius: 10
    },
    text: {
        color: 'white'
    }
})