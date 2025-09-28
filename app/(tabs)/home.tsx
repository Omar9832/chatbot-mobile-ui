import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'


export default function() {

  const [text, setText]=useState('');
  const [bot_message, setBot_Message]=useState('');

  const clear=()=>{
    setText(''); 
    setBot_Message("Hi I am Galaxy AI. Nice to meet you!"); 

    setTimeout(() => {
      setBot_Message("");
    }, 8000);
    

  }
  return (
    <LinearGradient
    colors={['#0f0c29', '#302b63', '#24243e']} 
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.backround}
    
    
    >
    <MaskedView
            maskElement={
              <View>
                <Text style={[styles.title, { backgroundColor: 'transparent' }]}>
                  Chat With Me
                </Text>
              </View>
            }
          >
            <LinearGradient
              colors={['#c10ef3ff', '#1063f3ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              
            >
             <Text style={[styles.title, { opacity: 0 }]}>Chat With Me</Text> 
            </LinearGradient>
          </MaskedView>

          <View style={styles.text_box}>
            <TextInput style={styles.input_text} 
            value={text}
            onChangeText={setText}
            ></TextInput>
          </View>
            
              
                
            <Text style={styles.bot_text}>{bot_message}</Text>

          
          <TouchableOpacity onPress={clear}  >

            <LinearGradient style={styles.button}  colors={['#f30e0eff', '#0f5ce1ff']}
              start={{x:0, y:0}}
              end={{x:1, y:1}}
              >
            <Text style={styles.button_text}  >Enter</Text>

  
              </LinearGradient>
          </TouchableOpacity>
            
            
    </LinearGradient>
  )
}


const styles=StyleSheet.create({
backround:{

  flex:1
},
title:{
  textAlign:"center",
  color:"white",
  fontSize:40,
   marginTop:50
},

text_box:{
  backgroundColor:"white",
  width:415,
  height:350,
  borderRadius:20,
  marginTop:60,
  borderColor:"white",
  shadowColor:"aqua",
  shadowRadius:100,
  elevation:110,
  borderWidth:20,
  shadowOpacity:1,
  shadowOffset: {width:0, height:0}
},
input_text:{
  color:"black",
  fontWeight:"500",
  fontSize: 20
},
button:{
width:100,
height:50,
borderColor:"aqua",
marginTop:30,
borderRadius:20,
justifyContent:"center",
marginLeft:150,




},
button_text:{
  textAlign:"center",
  fontSize:30,
  fontWeight:500, color:"white"
},

bot_text:{
color: "white",
fontWeight:500,
fontSize:20,
marginTop:20,
textAlign:"center",
textShadowColor:"white",
textShadowRadius:20,
textShadowOffset:{width:0, height:0},
elevation:20

}



})

