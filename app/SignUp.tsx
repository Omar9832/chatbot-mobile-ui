import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native';
import { TextInput, Switch } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';


export default function SignUp() {
    const [showPassword, setShowPassword]=useState(false);
    const Router=useRouter();
  return (

    <View style={styles.container}>
      <MaskedView
              maskElement={
                <View>
                  <Text style={[styles.logo, { backgroundColor: 'transparent' }]}>
                    Sign Up
                  </Text>
                </View>
              }
            >
              <LinearGradient
                colors={['#8A2BE2', '#98FF98']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                
              >
                <Text style={  [styles.logo, {opacity:0 }]}>GALAXY AI</Text>
              </LinearGradient>
            </MaskedView>
            <View style={styles.whole}>
            <View style={styles.entry_row}>
                <Text style={styles.section}>First Name:</Text>
                <View style={styles.entry}>
                <TextInput style={styles.typing}></TextInput>
                </View>

            </View >
            <View style={styles.entry_row}>
            <Text style={styles.section}>Last Name:</Text>
            <View style={styles.entry}>
            <TextInput style={styles.typing}></TextInput>
            </View>

            </View>
            <View style={styles.entry_row}>
            <Text style={styles.section}>Email:</Text>
            <View style={styles.entry}>
            <TextInput style={styles.typing}></TextInput>
            </View>
            </View>
            <View style={styles.entry_row}>
            <Text style={styles.section}>Password:</Text>
            <View style={styles.entry}>
            <TextInput secureTextEntry={!showPassword} style={styles.typing}></TextInput>
            </View>
            </View>
            </View>
            <Switch  style={styles.switch} value={showPassword} onValueChange={setShowPassword} 
          thumbColor={showPassword ? '#8A2BE2' : '#ccc'}></Switch>
            <TouchableOpacity onPress={()=> Router.push("/(tabs)/home")}>
            <LinearGradient
                colors={['#6a11cb', '#2575fc']} 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
                >
            <Text style={styles.button_text}>Submit</Text>
            </LinearGradient>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
    
  },
  

logo:{
    textAlign:"center",
    fontSize: 30, 

    marginTop: 20
},
section:{
    fontSize: 16,
    color: '#ccc',
    padding:20,
    marginTop:10
    
    
}, 
entry_row:{
    flexDirection:"row",
    
}, 

entry:{

    width:250,
    height:42,
    backgroundColor:"white",
    marginTop:20
    
    
},

whole:{
marginTop:20

},

typing:{
    color:"black",
    fontFamily:"Ariel",
    fontSize:20,
    fontWeight:200
},
button: {
    marginTop: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
    overflow:"hidden",
    borderRadius: 25,
    width: 200,
    height:50,
    alignSelf: 'center',
    marginLeft:2

  },

  button_text:{
    textAlign:"center",
    fontWeight:600,
    color:"white", 
    fontSize:20,
    paddingVertical:-3000, 
    height:50, 
    marginTop:-8
    
  },

  switch:{
    marginRight:200,
    transform:[{scaleX:2}, {scaleY: 2}],
    marginTop: 20
  }




});








