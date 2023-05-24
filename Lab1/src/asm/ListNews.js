import { View, Text, FlatList, StyleSheet, Image, ToastAndroid, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemListNews from './ItemListNews'
import axios from 'axios';
import AxiosIntance from './ultil/AxiosIntance';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ListNews = (props) => {
    const {navigation} = props;
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [searchtext, setsearchtext] = useState("");

    useEffect(() => {
        const getNews = async () => {
            const response = await AxiosIntance().get("/articles");
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

    let timeout = null;
    const countDownSearch = (searchtext) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            search(searchtext);
        }, 500);
    }

    const search = async (searchtext) => {
        setisLoading(true);
        const response = await AxiosIntance().get("/articles/search?title=" + searchtext);
        if(response.error==false) {
            setdata(response.data);
            setisLoading(false);
        } else {
            ToastAndroid.show("Lấy dữ liệu không thành công!", ToastAndroid.SHORT);
        }
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={Style.container}>
                <View style={Style.image}>
                    <Image source={require('./image/kapar.png')} style={Style.imagekapar} />
                    <Image source={require('./image/chuong.png')} style={Style.imagechuong} />
                </View>
                <View style={Style.congcu}>
                    <TextInput placeholder='Search' style={{fontFamily: 'Poppins',fontStyle: 'normal',fontSize: 14,color: '#A0A3BD', flex: 1, marginStart: 12}}
                    onChangeText={
                        // setsearchtext
                        (text) => countDownSearch(text)
                    }
                    />
                    <TouchableOpacity onPress={search}>
                    <Image source={require('./image/Iconsearch.png')} style={[Style.icon, {marginEnd: 12}]}/>
                    </TouchableOpacity>
                </View>
                <View style={[Style.image, { marginBottom: 19 }]}>
                    <Text style={[Style.Latest, { fontWeight: 'bold', fontSize: 16 }]}>Latest</Text>
                    <Text style={[Style.Latest, { color: '#4E4B66' }]}>See all</Text>
                </View>
                <View style={[Style.image, { marginBottom: 24 }]}>
                    <Text style={[Style.Latest, { fontSize: 16, fontWeight: 'bold' }]}>All</Text>
                    <Text style={[Style.Latest, { color: '#4E4B66', fontSize: 16 }]}>Sports</Text>
                    <Text style={[Style.Latest, { color: '#4E4B66', fontSize: 16 }]}>Bussiness</Text>
                    <Text style={[Style.Latest, { color: '#4E4B66', fontSize: 16 }]}>Health</Text>
                    <Text style={[Style.Latest, { color: '#4E4B66', fontSize: 16 }]}>Travel</Text>
                    <Text style={[Style.Latest, { color: '#4E4B66', fontSize: 16 }]}>Science</Text>
                </View>

                <View style={Style.list}>
                {
                    isLoading == true ?
                        (<View>
                            <ActivityIndicator size={'large'} color={'#fff00'}/>
                            <Text>Loading...</Text>
                        </View>) : (
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <ItemListNews data={item} navigation={navigation}/>}
                                keyExtractor={item => item._id}
                                showsVerticalScrollIndicator={false}
                            />)
                }
                </View>

            </View>
        </View>
    )
}

export default ListNews

const Style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginEnd: 25,
        marginStart: 24,
        flexDirection: 'column'
    },
    list:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagekapar: {
        width: 99,
        height: 30
    },
    imagechuong: {
        width: 18,
        height: 21.5
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 42
    },
    Latest: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 14,
        color: '#000000'
    },
    icon: {
        width: 20,
        height: 20,
        color: '#4E4B66',
        marginTop: 14,
        marginBottom: 14
    },
    congcu: {
        borderWidth: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#4E4B66',
        borderRadius: 6,
        marginBottom: 16
    }
})

const dataNe = [
    {
        "_id": "1",
        "title": "Trường công lập đầu tiên dạy và thi chương trình dự bị đại học Mỹ",
        "content": "Phổ thông Năng khiếu là trường công lập đầu tiên ở Việt Nam dạy và thi 6 môn của chương trình Advanced Placement (AP), thường gọi là chương trình dự bị đại học Mỹ.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "2",
        "title": "Lịch thi đánh giá năng lực, tư duy năm 2023",
        "content": "Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL8PDAG85QrsA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "3",
        "title": "Đối phó với bài tập Tết",
        "content": "Ngày nghỉ Tết cuối cùng, hàng chục trang bài tập Toán, Tiếng Việt và Tiếng Anh của Anh Thư được giải quyết, nhưng do mẹ và dì làm giúp.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/4313-1662984910-1675082690-4516-1675083076.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=BnjiAv8Bq8iaZcGQ2jJC3Q",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "4",
        "title": "Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt",
        "content": "Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "5",
        "title": "Cô giáo đèo hai con giữa mưa rét, vượt 100 km đến trường",
        "content": "Cô Nguyễn Thị Hà gây xúc động khi đèo hai con, vượt 100 km trong mưa lạnh để trở lại điểm trường ở xã Trà Dơn, huyện Nam Trà My, sau Tết.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "6",
        "title": "Nam sinh trả lại hơn 40 triệu đồng nhặt được",
        "content": "Lê Hải Thăng, 17 tuổi, được tuyên dương vì nộp lại túi nylon đựng hơn 40 triệu đồng nhặt được hôm 29 Tết.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/tuyenduongnamsinh-1675076463-2581-1675077291.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=vlqGCurXgocetWe4SYl13g",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "7",
        "title": "Cho con đi ngắm trăng, sao từ bé",
        "content": "Từ khi 4 tuổi, con trai chị Hồng Anh đã được đưa đi ngắm nhật thực, mưa sao băng và tham gia câu lạc bộ thiên văn trẻ em.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    }
]
