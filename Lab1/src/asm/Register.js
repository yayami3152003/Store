import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import AxiosIntance from './ultil/AxiosIntance';

const Register = (props) => {
  const { navigation } = props;
  const [emailUser, setemailuser] = useState("");
  const [passwordUser, setpassworduser] = useState("");

  const dangkyne = async () => {
    console.log(emailUser, passwordUser);
    try {
      const response = await AxiosIntance().post("/users/register", { email: emailUser, password: passwordUser });

      console.log(response);
      if(response.error == false) {
        ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
        navigation.navigate("Login");
      } else {
        ToastAndroid.show("Đăng ký thất bại");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const dangnhap = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={StyleFlex.container}>
        <Text style={StyleFlex.textHello}>Hello</Text>
        <Text style={StyleFlex.textWelcomeback}>Signup to get Started</Text>
        <Text style={StyleFlex.textUser}>Username<Text style={[StyleFlex.textUser, { color: '#C30052' }]}>*</Text></Text>
        <TextInput style={StyleFlex.textInput} onChangeText={setemailuser}></TextInput>
        <Text style={[StyleFlex.textUser, { marginTop: 16 }]}>Password<Text style={[StyleFlex.textUser, { color: '#C30052' }]}>*</Text></Text>
        <TextInput style={StyleFlex.textInput} onChangeText={setpassworduser}></TextInput>
        <View style={StyleFlex.viewRemember1}>
          <View style={StyleFlex.viewRemember}>
            <BouncyCheckbox style={StyleFlex.checkbox} fillColor={'blue'}></BouncyCheckbox>
            <Text style={StyleFlex.textRemember}>Remember me</Text>
          </View>
          <Text style={[StyleFlex.textRemember, { color: '#5890FF' }]}>Forgot the password?</Text>
        </View>
        <Pressable style={StyleFlex.btnLogin} onPress={dangkyne}>
          <Text style={StyleFlex.textLogin}>Register</Text>
        </Pressable>
        <Text style={[StyleFlex.textUser, { textAlign: 'center', marginTop: 16 }]}>or continue with</Text>
        <View style={[StyleFlex.viewRemember1, { justifyContent: 'space-between' }]}>
          <Pressable style={StyleFlex.bntScoial}>
            <Image source={require('./image/IconFB.png')} style={StyleFlex.imagScoial} />
            <Text style={StyleFlex.textScoial}>Facebook</Text>
          </Pressable>
          <Pressable style={StyleFlex.bntScoial}>
            <Image source={require('./image/IconGG.png')} style={StyleFlex.imagScoial} />
            <Text style={StyleFlex.textScoial}>Google</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={[StyleFlex.textUser, { marginTop: 16 }]}>don’t have an account ?  </Text>
          <Text style={[StyleFlex.textUser, { marginTop: 16, color: '#1877F2' }]} onPress={dangnhap}>Login</Text>
        </View>
      </View>
    </View>
  )
}

export default Register

const StyleFlex = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 24,
    marginEnd: 25,
    marginTop: 30,
    flexDirection: 'column',
  },
  textHello: {
    color: '#1877F2',
    fontFamily: 'Poppins',
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  textWelcomeback: {
    fontFamily: 'Poppins',
    fontSize: 20,
    marginTop: 4,
    fontStyle: 'normal',
    color: '#4E4B66',
    marginBottom: 48
  },
  textUser: {
    color: '#4E4B66',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
  },
  textInput: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 4,
    padding: 10
  },
  viewRemember: {
    flexDirection: 'row'
  },
  viewRemember1: {
    flexDirection: 'row',
    marginTop: 9.5,
    justifyContent: 'space-between'
  },
  textRemember: {
    color: '#4E4B66',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14
  },
  btnLogin: {
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17.5
  },
  textLogin: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  imagScoial: {
    width: 21,
    height: 21,
    marginEnd: 11.5
  },
  bntScoial: {
    flexDirection: 'row',
    width: 162,
    height: 48,
    backgroundColor: '#EEF1F4',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  textScoial: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#667080',
    fontWeight: 'bold'
  }
})