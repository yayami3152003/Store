import { View, Text, Image, StyleSheet, Dimensions,ToastAndroid, TouchableOpacity } from 'react-native'
import React from 'react'
import AxiosIntance from './ultil/AxiosIntance';

const ItemListNews = (props) => {
  const { data, navigation } = props;

  const ClickItem = () => {
    console.log('click Item');
    navigation.navigate("NewsDetail", {id: data._id});
  }
  return (
    <TouchableOpacity onPress={ClickItem}>
      <View style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>{data.title}</Text>
          <Text numberOfLines={2}>{data.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemListNews

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 32
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 10
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000'
  },
  content: {
    marginStart: 6,
    width: Dimensions.get('window').width - 96 - 60
  },
  btn: {
    borderWidth: 1,
    height: 20,
    backgroundColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 16
  },
})