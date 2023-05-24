import { ScrollView, StyleSheet, Text, View, Image, Pressable, ToastAndroid, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemListNews from './ItemListNews'
import AxiosIntance from './ultil/AxiosIntance';



const NewsDetail = (props) => {

    const { route } = props;
    const { params } = route;
    const [data, setdata] = useState([]);
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [images, setimage] = useState("");
    const [isLoading, setisLoading] = useState(true);

    const {navigation} = props;
    const quayve = () => {
    navigation.navigate('ListNews');
  }

    useEffect(() => {
        const getDetail = async () => {
            const response = await AxiosIntance().get("/articles/" + params.id + "/detail");
            console.log(response);
            if (response.error == false) {
                settitle(response.data[0].title);
                setcontent(response.data[0].content);
                setimage(response.data[0].image);
                setisLoading(false);
            } else {
                ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
            }
        }

        getDetail();

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
    }, [])


    return (
        <>
        {
            isLoading == true ?
            <View>
                <ActivityIndicator size={'large'} color={'#fff00'} />
                <Text>Loading...</Text>
            </View>
            :
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <ScrollView style={styles.container}>
                    <View style={[styles.viewtitle, { justifyContent: 'space-between', marginTop: 38.72, marginRight: 34.5 }]}>
                        <TouchableOpacity onPress={quayve}>
                        <Image style={[styles.imageSocial, { width: 16, height: 15.56, marginLeft: 28 }]} source={require('./image/Vector2.png')}></Image>
                        </TouchableOpacity>
                        <View style={styles.viewtitle}>
                            <Image style={[styles.imageSocial, { width: 19, height: 20, marginRight: 21.5 }]} source={require('./image/share.png')}></Image>
                            <Image style={[styles.imageSocial, { width: 3, height: 18, }]} source={require('./image/dot.png')}></Image>
                        </View>
                    </View>
                    <View style={[styles.viewtitle, { justifyContent: 'space-between', marginTop: 22.2, marginRight: 34.5 }]}>
                        <View style={[styles.viewtitle, { marginStart: 24, marginEnd: 24, }]}>
                            <Image style={[styles.imageSocial, { marginRight: 4 }]} source={require('./image/Ellipse.png')}></Image>
                            <View>
                                <Text style={[styles.texttitle, { fontSize: 16, color: '#000000', fontWeight: 'bold' }]}>BBC News</Text>
                                <Text style={styles.text}>14m ago</Text>
                            </View>
                        </View>

                        <Pressable style={styles.buttonLogin}>
                            <Text style={styles.textLogin}>Following</Text>
                        </Pressable>
                    </View>
                    <View style={styles.content}>
                        <Image style={styles.image} source={{ uri: images }}></Image>
                        <Text style={styles.text}>Europe</Text>

                        <Text style={[styles.texttitle, { fontSize: 24, color: '#000000' }]}>
                            {/* Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil */}
                            {title}
                        </Text>
                        <Text>
                            {content}
                            {/* Ukrainian President Volodymyr Zelensky has accused European countries that continue to buy Russian oil of "earning their money in other people's blood".{'\n'}{'\n'}{'\n'}

                        In an interview with the BBC, President Zelensky singled out Germany and Hungary, accusing them of blocking efforts to embargo energy sales, from which Russia stands to make up to £250bn ($326bn) this year.

                        There has been a growing frustration among Ukraine's leadership with Berlin, which has backed some sanctions against Russia but so far resisted calls to back tougher action on oil sales. */}
                        </Text>
                        <View style={[styles.viewtitle, {
                            justifyContent: 'space-between', marginTop: 29, marginBottom: 28.6, position: 'relative',
                            bottom: 0,
                            left: 0
                        }]}>
                            <View style={styles.viewtitle}>
                                <Image style={[styles.imageSocial, { width: 20, height: 18.5, marginRight: 4 }]} source={require('./image/heart.png')}></Image>
                                <Text style={[styles.texttitle, { fontSize: 16, color: '#000000', marginRight: 31 }]}>24.5k</Text>
                                <Image style={[styles.imageSocial, { width: 20, height: 18, marginRight: 4 }]} source={require('./image/comment.png')}></Image>
                                <Text style={[styles.texttitle, { fontSize: 16, color: '#000000' }]}>1k</Text>
                            </View>

                            <Image style={[styles.imageSocial, { width: 16, height: 20.64, marginRight: 4 }]} source={require('./image/ghim.png')}></Image>
                        </View>
                        <Text style={[styles.texttitle, { fontSize: 14, color: 'red', fontWeight: 'bold', marginTop: 10 }]}>Đọc thêm tin tức</Text>
                        {
                            data.map((item) => <ItemListNews key={item.id} data={item} />)
                        }
                    </View >

                </ScrollView>
            </View>
}
        </>

    )
}

export default NewsDetail

const styles = StyleSheet.create({
    content: {
        marginStart: 24,
        marginEnd: 24,
        marginTop: 10
    },
    image: {
        width: 340,
        height: 210,
    },
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'column'
    },

    viewtitle: {
        flexDirection: 'row',
    },
    texttitle: {
        fontFamily: 'Popins',
        fontSize: 14,
        marginBottom: 4,
        fontWeight: '400',
        color: '#4E4B66',
        letterSpacing: 0.12,
        fontStyle: 'normal',
    },
    buttonLogin: {
        width: 102,
        height: 34,
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
    imageSocial: {
        width: 50,
        height: 50,
    },

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