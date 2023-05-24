import { View, Text, StyleSheet, Pressable, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './ultil/AxiosIntance'

const PostNews = () => {

    const [imageNe, setimageNe] = useState(null);
    const [titleNe, settitleNe] = useState("");
    const [contentNe, setcontentNe] = useState("");

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
        if (response.error == false) {
            setimageNe(response.data.path);
            ToastAndroid.show("Đăng ảnh thành công", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Đăng ảnh thất bại", ToastAndroid.SHORT);
        }
    }

    const getImageLibrary = async () => {
        const result = await launchImageLibrary();
        console.log(result.assets[0].uri);

        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',
        });

        const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
        console.log(response.data.path);
        // if (response.error == false) {
        //     setimageNe(response.data.path);
        //     ToastAndroid.show("Đăng ảnh thành công", ToastAndroid.SHORT);
        // } else {
        //     ToastAndroid.show("Đăng ảnh thất bại", ToastAndroid.SHORT);
        // }
    }

    const dangTin = async () => {
        const response = await AxiosIntance().post("/articles", { title: titleNe, content: contentNe, image: imageNe });
        if (response.error == false) {
            setimageNe(response.data.path);
            ToastAndroid.show("Đăng tin thành công", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Đăng tin thất bại", ToastAndroid.SHORT);
        }
    }


    return (
        // <View>
        //     <Text>Đăng tin</Text>
        //     <View style={{width: 200, height: 200}}>
        //         <Image style={[styles.image, {width: 100, height:100}]} source={{uri: imageNe}}/>
        //     </View>

        //     <Pressable onPress={caprure}>
        //         <Text>Chụp ảnh</Text>
        //     </Pressable>
        //     <Pressable onPress={getImageLibrary}>
        //         <Text>Chọn ảnh từ thư viện</Text>
        //     </Pressable>
        //     <TextInput placeholder='Tiêu đề' onChangeText={settitleNe}/>
        //     <TextInput placeholder='Nội dung' onChangeText={setcontentNe}/>
        //     <Pressable onPress={dangTin}>
        //         <Text>Đăng tin</Text>
        //     </Pressable>
        // </View>

        <View style={{ flex: 1, backgroundColor: '#FFFFFF', }}>
            <View style={styles.container}>
                <View style={styles.viewtitle}>
                    <Image style={{ marginStart: 4 }} source={require('./image/Vector2.png')}></Image>
                    <Text>Create News</Text>
                    <Image style={{ marginRight: 10 }} source={require('./image/dot.png')}></Image>
                </View>
                <Pressable style={styles.pressable} onPress={caprure}>
                    {/* <Image style={styles.image} source={{ uri: imageNe }} /> */}
                    {/* <Image source={require('./image/pluscong.png')} />
                    <Text style={styles.preText}>Add Cover Photo</Text> */}
                    <>
                        {
                            imageNe == null ?
                                <>
                                <Image source={require('./image/pluscong.png')} />
                                <Text style={styles.preText}>Add Cover Photo</Text>
                                </>
                                :
                                <Image style={styles.image} source={{ uri: imageNe }} />
                        }
                    </>
                </Pressable>
                <TextInput placeholder='News title' onChangeText={settitleNe} style={[styles.Input, {
                    borderBottomWidth: 1,
                    borderBottomColor: '#C4C4C4',
                }]} />
                <TextInput placeholder='Add News/Article' onChangeText={setcontentNe} style={[styles.Input, { fontSize: 16 }]} />
                <Image style={styles.image} rource={{ uri: imageNe }} />
                <Image style={{ marginStart: 5, marginTop: 250, height: 40, width: 218 }} source={require('./image/205frame.png')}></Image>
            </View>
            <View style={styles.pre}>
                <Pressable onPress={getImageLibrary}>
                    <Image style={{ marginStart: 24, marginTop: 27, height: 20, width: 168 }} source={require('./image/layout.png')} />
                </Pressable>
                <Pressable style={styles.pre2} onPress={dangTin}>
                    <Text style={styles.preText2}>Publish</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default PostNews

const styles = StyleSheet.create({
    container: {
        marginStart: 24,
        marginEnd: 24,
        marginTop: 68,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'
    },
    image: {
        flex: 1,
        height: 183,
        width: 343
    },
    viewtitle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    pressable: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        height: 183,
        backgroundColor: '#EEF1F4',
        borderWidth: 1,
        borderColor: '#4E4B66',
        borderStyle: 'dashed'
    },
    preText: {
        color: '#4E4B66',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 14,
    },
    Input: {
        fontSize: 24,
        color: '#A0A3BD',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
    },
    pre: {
        borderTopWidth: 1,
        borderTopColor: '#C4C4C4',
        flex: 1,
        height: 78,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    preText2: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: 'bold'
    },
    pre2: {
        backgroundColor: '#1877F2',
        borderRadius: 10,
        width: 109,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
        marginRight: 24
    }
})