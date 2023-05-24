import React from 'react';
import {
  Text,
  SafeAreaView,
} from 'react-native';
import Welcome from './src/Welcome'
import Tinhtoan2 from './src/Tinhtoan2';
import Tinhtoan from './src/Tinhtoan';
import Xoso from './src/Xoso';
import Flex from './src/Flex';
import Login from './src/asm/Login';
import ItemListNews from './src/asm/ItemListNews';
import ListNews from './src/asm/ListNews';
import Register from './src/asm/Register';
import Profile from './src/asm/Profile';
import NewsDetail from './src/asm/NewsDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Taixiu from './src/Taixiu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContextProvider } from './src/asm/ultil/AppContext';
import AppNavigator from './src/asm/ultil/AppNavigator';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNe = () => {
//   return (
//     <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
//       <Stack.Screen name="Login" component={Login}/>
//       <Stack.Screen name="Register" component={Register}/>
//     </Stack.Navigator>
//   )
// }

const App = () => {
  // const, let truyền dữ liệu
  // const hằng số ko thay đổi giá trị
  // let thay đổi giá trị
  let ten = 'Quý';
  ten = 'Quý'
  old = '19'
  return (
    // <SafeAreaView>
    //   <Text>Hello Quýy</Text>
    //   <Text>{ten}</Text>
    //   <Text>{old}</Text>
    //   <Welcome name={ten}/>
    //   <Welcome name={old}/> 
    //   <Tinhtoan2/>
    //   <Tinhtoan/>
    //   <Xoso/>
    //   <Flex/>
    // </SafeAreaView>
    // <Flex/>
    // <Login/>
    // <ItemListNews/>
    // <ListNews/>
    // <Register/>
    // <Profile/>
    // <NewsDetail/>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login'>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Register" component={Register} />
    //   </Stack.Navigator>
    // </NavigationContainer>


    <AppContextProvider>
      <NavigationContainer>
      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ListNews') {
              iconName = focused
                ? 'newspaper'
                : 'newspaper';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person';
            }
            else if (route.name === 'Xổ số') {
              iconName = focused ? 'repeat' : 'repeat';
            }
            else if (route.name === 'Tính toán') {
              iconName = focused ? 'calculator' : 'calculator';
            }
            else if (route.name === 'Login') {
              iconName = focused ? 'person-add' : 'person-add';
            } 
            else if (route.name === 'NewsDetail') {
              iconName = focused ? 'newspaper' : 'newspaper';
              } 
              else if (route.name === 'Tài xỉu') {
              iconName = focused ? 'pulse-outline' : 'pulse-outline';
              hoặc lấy ảnh trong thẻ
              return <Image source/>
            }

            You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown:false
        })}
      >
        <Tab.Screen name="Xổ số" component={Xoso} options={{ title: "Xổ số" }} />
        <Tab.Screen name="Tính toán" component={Tinhtoan} options={{ title: "Tính toán" }} />
        <Tab.Screen name="Login" component={TabNe} options={{ title: "Login" }} />
        <Tab.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
        <Tab.Screen name="ListNews" component={ListNews} options={{ title: "ListNews" }} />
        <Tab.Screen name="NewsDetail" component={NewsDetail} options={{ title: "NewsDetail" }} />   
        <Tab.Screen name="Tài xỉu" component={Taixiu} options={{ title: "Cờ bạc" }} />
      </Tab.Navigator> */}
      <AppNavigator/>
    </NavigationContainer>
    </AppContextProvider>

    
  );
};

export default App;