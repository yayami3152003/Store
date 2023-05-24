import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Tinhtoan2 = () => {
  return (
    <View>
      <Text style={styles.textne}>tính toán 2</Text>
      <Text style={styles.text2}>tính toán 3</Text>
      <Text>Tính toán 4</Text>
    </View>
  )
}

export default Tinhtoan2

const styles = StyleSheet.create({
    textne : {
        color: 'blue', 
        fontSize: 24,
        textAlign:'center'
    },
    text2 : {
        fontFamily:'Roboto',
        fontSize:24,
        marginLeft: 20,
    }
})