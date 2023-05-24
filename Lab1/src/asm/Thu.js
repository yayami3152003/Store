import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { AppContext } from './ultil/AppContext';
import AxiosIntance from './ultil/AxiosIntance';

const Thu = (props) => {
  const {navigation} = props;
  const quayve = () => {
    navigation.navigate('Profile');
  }
  const { infoUser, setinfoUser } = useContext(AppContext);
  console.log(infoUser);

  const caprure = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);

    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
    console.log(response.data.path);

    setinfoUser({...infoUser, avatar: response.data.path});
    // if (response.error == false) {
    //     setimageNe(response.data.path);
    //     ToastAndroid.show("Đăng ảnh thành công", ToastAndroid.SHORT);
    // } else {
    //     ToastAndroid.show("Đăng ảnh thất bại", ToastAndroid.SHORT);
    // }
  }; 

  const UpdateProfile = async () => {
    const response = await AxiosIntance().post("/users/update-profile", {name: infoUser.name, address: infoUser.address, phone: infoUser.phone, dob: infoUser.dob, avatar: infoUser.avatar});
    if(response.error==false) {
      ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
        <View style={styles.viewtitle}>
          <TouchableOpacity onPress={quayve}>
          <Image style={styles.imageSocial} source={require('./image/Vector2.png')}></Image>
          </TouchableOpacity>
          <Text style={[styles.texttitle, { fontSize: 16, marginLeft: 117, color: '#000000', fontWeight: 'bold' }]}>Fill your Profile</Text>
        </View>
        <Text>{infoUser.email}</Text>
        <View style={[styles.viewtitle, { justifyContent: 'center', position: 'relative' }]}>
          {/* <Image style={[styles.imageSocial,{height:120,width:120,borderRadius:100,marginTop:16,position: 'absolute'}]} source={require('./image/tui.jpg')}></Image> */}
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', marginTop: 80 }} onPress={caprure}>
            {
              infoUser.avatar == "" ? (<Image style={[styles.imageSocial, { height: 120, width: 120, borderRadius: 100, marginTop: 16, position: 'absolute' }]} source={require("../asm/image/tui.jpg")} />)
                :
                (<Image style={[styles.imageSocial, { height: 120, width: 120, borderRadius: 100, marginTop: 16, position: 'absolute' }]} source={{ uri: infoUser.avatar }} />)
            }
          </TouchableOpacity>
          <Image style={[styles.imageSocial, { height: 30, width: 30, position: 'absolute', bottom: -135, transform: [{ translateX: 40 }] }]} source={require('./image/Frame.png')}></Image>
        </View>
        <Text style={[styles.texttitle, { marginTop: 150 }]}>Username</Text>
        <TextInput style={styles.textInput} placeholder='Họ tên' value={infoUser.name} onChangeText={(text)=> setinfoUser({...infoUser, name: text})}></TextInput>
        <Text style={styles.texttitle}>Address</Text>
        <TextInput style={[styles.textInput, { marginBottom: 4 }]} placeholder='Địa chỉ' value={infoUser.address} onChangeText={(text)=> setinfoUser({...infoUser, address: text})}></TextInput>
        <View style={[styles.viewtitle, { marginTop: 16 }]}>
          <Text style={styles.texttitle}>Phone Number</Text>
          <Text style={[styles.texttitle, { color: 'red', marginStart: 2 }]}>*</Text>
        </View>
        <TextInput style={[styles.textInput, { marginBottom: 4 }]} placeholder='Số điện thoại' value={infoUser.phone} onChangeText={(text)=> setinfoUser({...infoUser, phone: text})}></TextInput>
        <View style={[styles.viewtitle, { marginTop: 16 }]}>
          <Text style={styles.texttitle}>Date of birth</Text>
          <Text style={[styles.texttitle, { color: 'red', marginStart: 2 }]}>*</Text>
        </View>
        <TextInput style={[styles.textInput, { marginBottom: 4 }]} placeholder='Ngày sinh' value={infoUser.dob} onChangeText={(text)=> setinfoUser({...infoUser, dob: text})}></TextInput>

        <Pressable style={styles.buttonLogin} onPress={UpdateProfile}>
          <Text style={styles.textLogin}>Cập nhật</Text>
        </Pressable>

      </View>
    </View>
  )
}

export default Thu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginStart: 20,
    marginEnd: 24,
    flexDirection: 'column'
  },
  viewtitle: {
    flexDirection: 'row',
  },
  texttitle: {
    fontFamily: 'Popins',
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '600',
    color: '#4E4B66',
    letterSpacing: 0.12,
    fontStyle: 'normal',
  },
  textInput: {
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4E4B66',
    marginBottom: 16,

  },
  imageSocial: {
    width: 16,
    height: 16,
  },
  buttonLogin: {
    height: 50,
    marginTop: 90,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

})