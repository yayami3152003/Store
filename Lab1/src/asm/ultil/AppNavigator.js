import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import login from '../Login'
import Register from '../Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile';
import ListNews from '../ListNews';
import NewsDetail from '../NewsDetail';
import PostNews from '../PostNews';
import { AppContext } from './AppContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Thu from '../Thu';
import home from '../Home';


const Stack = createNativeStackNavigator();
// quản lý màng hình login, register => stack
const User = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

const News = () => {
  return (
      <Stack.Navigator initialRouteName='ListNews' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ListNews" component={ListNews} />
          <Stack.Screen name="NewsDetail" component={NewsDetail} />
      </Stack.Navigator>
  )
}
const Canhan = () => {
  return (
      <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Thu" component={Thu} />
      </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
// quản lý list new, profile, new manage => tab
const Main = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused
                ? 'ios-home-sharp'
                : 'ios-home-outline';
            }
            else if (route.name === 'ListNews') {
              iconName = focused ? 'compass' : 'compass';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'md-person-circle-sharp' : 'md-person-circle-outline';
            }
            // else if (route.name === 'Xổ số') {
            //   iconName = focused ? 'repeat' : 'repeat';
            // }
            // else if (route.name === 'Tính toán') {
            //   iconName = focused ? 'calculator' : 'calculator';
            // }
            // else if (route.name === 'Login') {
            //   iconName = focused ? 'person-add' : 'person-add';
            // } 
            else if (route.name === 'PostNews') {
              iconName = focused ? 'ios-bookmark-sharp' : 'bookmark-outline';
              // } 
              // else if (route.name === 'Tài xỉu') {
              // iconName = focused ? 'pulse-outline' : 'pulse-outline';
              // hoặc lấy ảnh trong thẻ
              // return <Image source/>
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1877F2',
          tabBarInactiveTintColor: 'gray',
          headerShown:false
        })}
      >
        {/* <Tab.Screen name="Xổ số" component={Xoso} options={{ title: "Xổ số" }} />
        <Tab.Screen name="Tính toán" component={Tinhtoan} options={{ title: "Tính toán" }} /> */}
        {/* <Tab.Screen name="Login" component={TabNe} options={{ title: "Login" }} /> */}
        <Tab.Screen name="home" component={home} options={{ title: "Home" }} />
        <Tab.Screen name="ListNews" component={News} options={{ title: "Explore" }} />
        <Tab.Screen name="PostNews" component={PostNews} options={{ title: "Bookmark" }} />  
        <Tab.Screen name="Profile" component={Canhan} options={{ title: "Profile" }} /> 
        {/* <Tab.Screen name="Tài xỉu" component={Taixiu} options={{ title: "Cờ bạc" }} /> */}
      </Tab.Navigator>
    )
}

const AppNavigator = () => {
    const {isLogin} = useContext(AppContext);
    return (
        <>
        {
            isLogin == false ? <User/> : <Main/>
        }
        </>
    )
}

export default AppNavigator