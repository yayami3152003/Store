import { StyleSheet, Text, View, Image, Pressable, FlatList,ToastAndroid, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect  } from 'react'
import ItemListNews from './ItemListNews'
import { AppContext } from './ultil/AppContext';
import AxiosIntance from './ultil/AxiosIntance';

const Profile = (props) => {
  const { navigation } = props;
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const {setisLogin} = useContext(AppContext);

  useEffect(() => {
    const getNews = async () => {
        const response = await AxiosIntance().get("/articles/my-articles");
        console.log(response);
        if (response.error == false) { // Lấy dữ liệu thành công
            setdata(response.data);
            setisLoading(false);
        } else {
            ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
        }
    }
    getNews();
    return () => {

    }
}, []);
  const UpdateProfile = () => {
    navigation.navigate('Thu');
  }
  const { infoUser, setinfoUser } = useContext(AppContext);
  console.log(infoUser);

  const dangxuat = async () => {
    try {
      const response = await AxiosIntance().get("/auth/logout");
      if(response.error == false) {
              ToastAndroid.show("Đăng xuất thành công", ToastAndroid.SHORT);
              setisLogin(false);
            } else {
              ToastAndroid.show("Đăng xuất thất bại", ToastAndroid.SHORT);
            }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={[styles.text, { marginStart: 150, fontWeight: '400', color: '#000000', fontWeight: 'bold'}]}>Profile</Text>
          <TouchableOpacity onPress={dangxuat}>
          <Image source={require('./image/Icon2.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <Image source={{ uri: infoUser.avatar }} style={{height: 120, width: 120, borderRadius: 100, marginTop: 13}}/>
          <View style={styles.view}>
            <View style={styles.view2}>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>2165</Text>
              <Text style={[styles.text, { fontWeight: '400', color: '#4E4B66' }]}>Followers</Text>
            </View>
            <View style={styles.view2}>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>567</Text>
              <Text style={[styles.text, { fontWeight: '400', color: '#4E4B66' }]}>Following</Text>
            </View>
            <View style={styles.view2}>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>23</Text>
              <Text style={[styles.text, { fontWeight: '400', color: '#4E4B66' }]}>News</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.text, {fontWeight: 'bold', marginTop:16}]}>{infoUser.name}</Text>
        <Text style={styles.text}>{infoUser.address}</Text>
        <Text style={styles.text}>{infoUser.phone}</Text>
        <Pressable style={styles.btnUpdate} onPress={UpdateProfile}>
          <Text style={[styles.text, { fontWeight: 'bold', color: '#FFFFFF' }]}>Edit profile</Text>
        </Pressable>
        <View style={styles.view}>
          <Text style={[styles.text, { marginStart: 150, fontWeight: '400', color: '#000000', fontWeight: 'bold', marginTop: 16}]}>Recent</Text>
        </View>
        <View style={styles.list}>
                {
                    isLoading == true ?
                        (<View>
                            <ActivityIndicator size={'large'} color={'#fff00'}/>
                            <Text>Loading...</Text>
                        </View>) : (
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <ItemListNews data={item} navigation={navigation}/>}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                            />)
                }
                </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginStart: 20,
    marginEnd: 24,
    flexDirection: 'column'
  },
  btnUpdate: {
    borderWidth: 1,
    height: 50,
    backgroundColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 16
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, text: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#000000'
  }, view2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 16
  },view3: {
    flexDirection: 'row'
  },list:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}


})