import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

const Tinhtoan = () => {
    const [num1, setnum1] = useState(0)
    const [num2, setnum2] = useState(1)
    const [result, setresult] = useState(10)

    const luachon = (isChoose) => {

        let tong = num1 + num2;
        if ((tong == result && isChoose == true) || (tong != result && isChoose == false)) {
            setnum1(Math.floor(Math.random() * 10));
            setnum2(Math.floor(Math.random() * 10));
            setresult(Math.floor(Math.random() * 10));
        } else {
            alert('Bạn đã chọn sai, GAME OVER');
            setnum1(Math.floor(Math.random() * 10));
            setnum2(Math.floor(Math.random() * 10));
            setresult(Math.floor(Math.random() * 10));
        }
    }

    return (
        <View>
            <Text style={{ color: 'red', textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: 30 }}>
                BẠN GIỎI PHÉP CỘNG?</Text>
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 60, fontWeight: 'bold', marginTop: 30 }}>{num1} + {num2}</Text>
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 60, fontWeight: 'bold' }}>=</Text>
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 60, fontWeight: 'bold' }}>{result}</Text>
            <Pressable onPress={() => luachon(true)}>
                <Text style={{ borderWidth: 1, padding: 10, margin: 10, backgroundColor: 'green', textAlign: 'center', borderRadius: 5, fontSize: 20, fontWeight: 'bold', color: 'black' }}>ĐÚNG</Text>
            </Pressable>
            <Pressable onPress={() => luachon(false)}>
                <Text style={{ borderWidth: 1, padding: 10, margin: 10, backgroundColor: 'gray', textAlign: 'center', borderRadius: 5, fontSize: 20, fontWeight: 'bold', color: 'black' }}>SAI</Text>
            </Pressable>
        </View>
    )
}

export default Tinhtoan