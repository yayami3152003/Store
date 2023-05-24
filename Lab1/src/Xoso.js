import { View, Text, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'

const Xoso = () => {
  const [kq, setkq] = useState('Kết quả sẽ hiển thị ở đây')
  const [sodudoan, setsodudoan] = useState('-1')

  const DuDoan = () => {
    let numRand = Math.floor(Math.random()* 10)+1;
    console.log(numRand);
    if(sodudoan == numRand) {
      setkq('Bạn đã đoán đúng!' + numRand);
    } else {
      setkq('Chúc may mắn lần sau! \n Kết quả là: '+numRand );
    }
  }

  return (
    <View>
      <Text style = {{color:'blue', fontSize:40, textAlign:'center', fontWeight:'bold', marginTop:20}} >XỔ SỐ ĐÊ!!!</Text>
      <Text style = {{color:'green', fontSize:22, textAlign:'center', fontWeight:'bold', marginTop:20}} >Nhập một số từ 1 đến 100</Text>
      <TextInput onChangeText={newText => setsodudoan(newText)} placeholder='Nhập số dự đoán' style = {{borderWidth: 2, borderColor: 'black', borderRadius: 10, margin: 10, padding: 10,fontSize: 20 }}></TextInput>
      <Pressable onPress={DuDoan}>
        <Text style = {{backgroundColor: 'red', color: 'white', fontSize: 20, borderWidth: 1, textAlign: 'center', fontSize: 20, padding: 10, margin:10, borderRadius: 10, fontWeight: 'bold'}}>Dự đoán</Text>
      </Pressable>
      <Text style = {{color:'violet', fontSize:20, textAlign:'center'}}>{kq}</Text>
    </View>
  )
}

export default Xoso