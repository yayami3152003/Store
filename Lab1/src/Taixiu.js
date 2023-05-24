import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Taixiu = () => {
    const [kq, setkq] = useState('Kết quả sẽ hiển thị ở đây')
    const [tien, settien] = useState(20000)
    const [so, setso] = useState('0')
   
    const luachon = (isChoose) => {
        let numRand = Math.floor(Math.random() * 10);
        if (tien>40000) {
                numRand == 0;
        }
        if (tien<=2000) {
            setkq('Bạn cần nạp thêm tiền để được chơi tiếp!');
        }
        if (((numRand>0&&numRand<=5) && isChoose == false)) {
            setkq('Bạn đã được cộng 2500! \n Xỉu: ' + numRand);
            settien(tien+2500);
        } else if (((numRand>5&&numRand<=8) && isChoose == true)){
            setkq('Bạn đã được cộng 2500! \n Tài: ' + numRand);
            settien(tien+2500);
        } else if (((numRand>0&&numRand<=5) && isChoose == true)){
            setkq('Bạn đã bị trừ 2000! \n Xỉu: ' + numRand);
            settien(tien-2000);
        } else if (((numRand>5&&numRand<=8) && isChoose == false)){
            setkq('Bạn đã bị trừ 2000! \n Tài: ' + numRand);
            settien(tien-2000);
        } else {
            setkq('Chúc may mắn lần sau! \n Bạn đã bị trừ 2000! \n Kết quả là: ' + numRand);
            settien(tien-2000);
        }
    }
    const luachon1 = (isChoose) => {
        let numRand = Math.floor(Math.random() * 10);
        if (tien>40000) {
                numRand == 0;
        }
        if (tien<=2000) {
            setkq('Bạn cần nạp thêm tiền để được chơi tiếp!');
        }
        if (((numRand%2==0) && isChoose == true)) {
            setkq('Bạn đã được cộng 2500! \n Chẵn: ' + numRand);
            settien(tien+2500);
        } else if (((numRand%2!=0) && isChoose == false)){
            setkq('Bạn đã được cộng 2500! \n Lẻ: ' + numRand);
            settien(tien+2500);
        } else if (((numRand%2!=0) && isChoose == true)){
            setkq('Bạn đã bị trừ 2000! \n Lẻ: ' + numRand);
            settien(tien-2000);
        } else if (((numRand%2==0) && isChoose == false)){
            setkq('Bạn đã bị trừ 2000! \n Chẵn: ' + numRand);
            settien(tien-2000);
        } else {
            setkq('Chúc may mắn lần sau! \n Bạn đã bị trừ 2000! \n Kết quả là: ' + numRand);
            settien(tien-2000);
        }
    }

    return (
        <View>
            <Text style={{ color: 'blue', fontSize: 40, textAlign: 'center', fontWeight: 'bold', marginTop: 20, marginBottom:20 }} >Cờ bạc đê!!!</Text>
            <Text style={{textAlign: 'right',marginRight: 16, fontSize:18, marginBottom:10 }}>Tiền: {tien}</Text>
            <View style={styles.view}>
            <Pressable onPress={() => luachon(true)} style={styles.pressable}>
                <Text style={styles.text}>Tài</Text>
            </Pressable>
            <Pressable onPress={() => luachon(false)} style={styles.pressable}>
                <Text style={styles.text}>Xỉu</Text>
            </Pressable>
            </View>
            <View style={styles.view}>
            <Pressable onPress={() => luachon1(true)} style={styles.pressable}>
                <Text style={styles.text}>Chẵn</Text>
            </Pressable>
            <Pressable onPress={() => luachon1(false)} style={styles.pressable}>
                <Text style={styles.text}>Lẻ</Text>
            </Pressable>
            </View>
            <Text style={{ color: 'violet', fontSize: 20, textAlign: 'center' }}>{kq}</Text>
        </View>
    )
}

export default Taixiu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      },
    pressable: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: 20,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        margin: 10,
        width: 100,
        borderRadius: 10,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        marginBottom: 30
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})