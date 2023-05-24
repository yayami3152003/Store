import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View style= {StyleFlex.container}>
      {/* <Text style = {StyleFlex.text}>Flex</Text> */}
      <View style= {StyleFlex.view}></View>
      <View style= {StyleFlex.view1}></View>
      <View style= {StyleFlex.view2}></View>
      <View style= {StyleFlex.view3}></View>
      <View style= {StyleFlex.view}></View>
      <View style= {StyleFlex.view1}></View>
      <View style= {StyleFlex.view2}></View>
      <View style= {StyleFlex.view3}></View>
      <View style= {StyleFlex.view}></View>
      <View style= {StyleFlex.view1}></View>
      <View style= {StyleFlex.view2}></View>
      <View style= {StyleFlex.view3}></View>
      <View style= {StyleFlex.view}></View>
      <View style= {StyleFlex.view1}></View>
      <View style= {StyleFlex.view2}></View>
      <View style= {StyleFlex.view3}></View>
    </View>
  )
}

export default Flex

const StyleFlex = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
         // canh theo hướng của flexDirection
        alignItems: 'center',
         // canh hướng ngược lại của flexDirection
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    },
    view: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    view1: {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },
    view2: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        // alignSelf: 'flex-start'
    },
    view3: {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        // alignSelf: 'flex-end'
    }
})