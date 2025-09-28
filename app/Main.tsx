import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useRouter } from 'expo-router';



export default function Index() {
  
  const router = useRouter();
  return (
    <View style={styles.container}>
      <MaskedView
        maskElement={
          <View>
            <Text style={[styles.logo, { backgroundColor: 'transparent' }]}>
              GALAXY AI
            </Text>
          </View>
        }
      >
        <LinearGradient
          colors={['#a020f0', '#00f0ff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientText}
        >
          <Text style={[styles.logo, { opacity: 0 }]}>GALAXY AI</Text>
        </LinearGradient>
      </MaskedView>

      {/* Rest of the content */}
      <Text style={styles.title}>NEXT GEN</Text>
      <Text style={styles.subtitle}>CHATBOT</Text>
      <Text style={styles.description}>
        GALAXY AI is a futuristic AI platform built to power space-age technologies. Blending machine learning,
        real-time data, and autonomous systems, it helps drive smarter decisions both on Earth and in space. From
        optimizing satellite systems to exploring new frontiers, GALAXY AI brings intelligent innovation to the edge
        of the universe.
      </Text>

      {/* Buttons */}
      <TouchableOpacity onPress={() => router.push("/LogIn")} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity onPress={()=>router.push("/SignUp")} style={styles.button2}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20
    
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  gradientText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered: {
    
    
  },
  title: {
    fontSize: 15,
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#00f0ff',
    marginVertical: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#a020f0',
    borderRadius: 25,
    width: 200,
    alignSelf: 'center',
  },
  button2: {
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#98FF98',
    borderRadius: 25,
    width: 200,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  orText: {
    fontSize: 20,
    color: '#ccc',
    marginVertical: 15,
    textAlign: 'center',
    fontWeight: '500',
    marginTop:50
  },
});

