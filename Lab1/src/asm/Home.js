import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemListNews from './ItemListNews'

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={styles.container}>
        <View style={styles.image}>
                    <Image source={require('./image/kapar.png')} style={styles.imagekapar} />
                    <Image source={require('./image/chuong.png')} style={styles.imagechuong} />
                </View>
                <View style={styles.congcu}>
                    <Image source={require('./image/Iconsearch.png')} style={[styles.icon, {marginStart: 12}]}/>
                    <TextInput placeholder='Search' style={{fontFamily: 'Poppins',fontStyle: 'normal',fontSize: 14,color: '#A0A3BD', flex: 1, marginStart: 12}}/>
                    <Image source={require('./image/Iconcongcu.png')} style={[styles.icon, {marginEnd: 12}]}/>
                </View>
                <View style={[styles.image, {marginBottom: 10}]}>
                    <Text style={[styles.Latest, { fontWeight: 'bold', fontSize: 16 }]}>Trending</Text>
                    <Text style={[styles.Latest, { color: '#4E4B66' }]}>See all</Text>
                </View>
        </View>
                <ScrollView style={styles.container2}>
                    <View style={styles.content}>
                        <Image style={styles.image2} source={require('./image/detail.png')}></Image>
                        <Text style={styles.text}>Europe</Text>

                        <Text style={[styles.texttitle, { fontSize: 18, color: '#000000' }]}>
                            Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil
                        </Text>
                        <Image source={require('./image/31.png')}/>
                        <View style={[styles.image, { marginBottom: 24, marginTop: 16}]}>
                    <Text style={[styles.Latest, { fontSize: 16, fontWeight: 'bold' }]}>All</Text>
                    <Text style={[styles.Latest, { color: '#4E4B66', fontSize: 16 }]}>Sports</Text>
                    <Text style={[styles.Latest, { color: '#4E4B66', fontSize: 16 }]}>Bussiness</Text>
                    <Text style={[styles.Latest, { color: '#4E4B66', fontSize: 16 }]}>Health</Text>
                    <Text style={[styles.Latest, { color: '#4E4B66', fontSize: 16 }]}>Travel</Text>
                    <Text style={[styles.Latest, { color: '#4E4B66', fontSize: 16 }]}>Science</Text>
                </View>
                        {
                            dataNe.map((item) => <ItemListNews key={item.id} data={item} />)
                        }
                    </View >

                </ScrollView>
            </View>
  )
}

export default Home

const styles = StyleSheet.create({
    content: {
        marginStart: 24,
        marginEnd: 24,
        marginTop: 10
    },
    container: {
        marginTop: 30,
        marginEnd: 25,
        marginStart: 24,
        flexDirection: 'column'
    },
    image2: {
        width: 340,
        height: 210,
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 42
    },
    container2: {
        flex: 1,
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
    Latest: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 14,
        color: '#000000'
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
    imagekapar: {
        width: 99,
        height: 30
    },
    imagechuong: {
        width: 18,
        height: 21.5
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