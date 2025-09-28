import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



export default function RootLayout() {
  return ( 
    <SafeAreaProvider>
  <SafeAreaView edges={['top' ]} style={{flex:1}}>
<Stack screenOptions={{headerShown:false, headerTintColor:"green", headerTitleAlign:"center", headerStyle: {
  backgroundColor:"blue",
}}}>
    <Stack.Screen
    name="index"
    options={{title: "Home", headerTintColor:"red"}}
   />

  <Stack.Screen
    name="settings"
    options={{title: "settings", headerTintColor:"red"}}
   />
   
  </Stack>


  </SafeAreaView>
  </SafeAreaProvider>
  
  
);
  
}
  

