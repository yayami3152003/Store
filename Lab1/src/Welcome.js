import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Welcome = (props) => {
    const {name, old} = props;
    const [hoTen, sethoTen] = useState('Quý');
    
    const clickDiNe = () => {
      sethoTen('Quý Nè');
    }

  const clickDungSai = (luachon) =>{
    if(luachon){
      console.log('Hello FPTT');
    }else{
      console.log('Goodbye FPT');
    }
  }

  return (
    <View>
      <Text>Welcome FPT</Text>
      <Text>Welcome {name}</Text>
      <Text>Welcome {old}</Text>
      <Text>Welcome {hoTen}</Text>
      <Button title='Click em đi' onPress={clickDiNe}/>
      <Button title='Click đúng' onPress={() => clickDungSai(true)}/>
      <Button title='Click sai' onPress={() => clickDungSai(false)}/>
    </View>
  )
}

export default Welcome