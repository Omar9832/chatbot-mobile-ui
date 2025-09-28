import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { HeaderTitle } from '@react-navigation/elements'
import { blue } from 'react-native-reanimated/lib/typescript/Colors'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

export default function _layout() {
  return (
    
    <Tabs screenOptions={{ headerShown: false, tabBarInactiveTintColor:"white",tabBarActiveTintColor:"black",tabBarShowLabel:true, tabBarStyle:{backgroundColor:"green", height:70, }, tabBarBackground:()=>(<LinearGradient colors={["rgba(157, 0, 255, 0.9)", "rgba(70, 20, 249, 0.9)"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{flex: 1}}/>)}}>
        <Tabs.Screen  name="home" options={{headerShown:false,  title:"Home", headerTitleAlign:"center", headerTintColor: "black", tabBarIcon:({ size})=>( <Ionicons name="home" color="black" size={size}></Ionicons>)
    }}>
                
            
        

        </Tabs.Screen>

        <Tabs.Screen name="Add" options={{headerShown:false,title:"Create",headerTitleAlign:"center", headerTintColor: "black", tabBarIcon:({size})=>( <Ionicons name="add-circle"  color="black" size={size}></Ionicons>)
    }}>
                
            
        

        </Tabs.Screen>
        <Tabs.Screen name="subscriptions" options={{headerShown:false,title:"Subscriptions",headerTitleAlign:"center", headerTintColor: "black", tabBarIcon:({size})=>( <Ionicons name="card-outline"   color="black" size={size}></Ionicons>)
    }}></Tabs.Screen>

    <Tabs.Screen name="AboutUs" options={{headerShown:false,title:"About Us",headerTitleAlign:"center", headerTintColor: "black", tabBarIcon:({size})=>( <Ionicons name="information-circle"  color="black" size={size}></Ionicons>)
    }}></Tabs.Screen>

        
    </Tabs>
    
  )
}