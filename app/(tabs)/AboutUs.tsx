import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export default function AboutUs() {
  const email = "contact@example.com";
  const phone = "No Phone";

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleLearnMorePress = () => {
    Linking.openURL("https://yourwebsite.com/about");
  };

  return (
    <LinearGradient
        colors={['#17290cff', '#eb306fff', '#24243e']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backround}
        
        
        >
      <MaskedView
                  maskElement={
                    <View>
                      <Text style={[styles.title, { backgroundColor: 'transparent' }]}>
                        About Us
                      </Text>
                    </View>
                  }
                >
                  <LinearGradient
                    colors={['#17290cFF', '#eb306FFF', '#24243EFF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    
                  >
                   <Text style={[styles.title, { opacity: 0 }]}>About Us</Text> 
                  </LinearGradient>
                </MaskedView>

      <View style={styles.infoRow}>
        <Ionicons name="mail-outline" size={35} color="black" />
        <Text style={styles.infoText} onPress={handleEmailPress}>
          {email}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="call-outline" size={35} color="black" 
        
        />
        <Text style={styles.infoText} onPress={handlePhonePress}>
          {phone}
        </Text>
      </View>
      <LinearGradient
      style={styles.learnMoreBtn}
        colors={['#151414ff', '#e62e2eff']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        
        >
        
      <TouchableOpacity  onPress={handleLearnMorePress}>
        <Text style={styles.learnMoreText}>Learn More</Text>
      </TouchableOpacity>
      </LinearGradient>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
    marginTop:50,
    
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -150,
    marginLeft:80,
    marginTop:200
    
  },
  infoText: {
    fontSize: 18,
    marginLeft: 15,
    color: 'white',
  
    
  },
  learnMoreBtn: {
    marginTop: 400,
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius:10,
    
  },
  learnMoreText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  backround:{
    flex:1,
  
  }
});
