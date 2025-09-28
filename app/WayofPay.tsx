import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function WayofPay() {
  const Router = useRouter();

  const handlePayment = (method) => {
    Alert.alert(
      'Payment Selected',
      `You chose to pay with ${method}.`,
      [{ text: 'OK', onPress: () => Router.push('/(tabs)/home') }]
    );
  };

  return (
    <LinearGradient
      colors={['#5f9f4cff', '#3b9877ff', '#19566aff']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.title}>Complete Your Payment</Text>

      <TouchableOpacity
      
        onPress={() => handlePayment('Credit Card')}

      >
        <LinearGradient
        colors={["red", "yellow"]}
        
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.paymentOption}
    >
        
        <Text style={styles.paymentText}>Pay with Credit Card</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        
        onPress={() => handlePayment('PayPal')}
      >
        <LinearGradient
        colors={["purple", "aqua"]}
        
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.paymentOption}
    >
        <Text style={styles.paymentText}>Pay with PayPal</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        
        onPress={() => handlePayment('Google Pay')}
      >
        <LinearGradient
        colors={['red', 'yellow', 'green', 'blue']}
        
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.paymentOption}
    >
        <Text style={styles.paymentText}>Pay with Google Pay</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Router.push("/(tabs)/subscriptions")}
        style={styles.goBackBtn}
      >
        <LinearGradient
          colors={['#1696a4ff', '#f1ebeaff']}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.goBackGradient}
        >
          <Text style={styles.goBackText}>Go Back</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',

  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    marginTop:10
    
  },
  paymentOption: {
    backgroundColor: '#983b68ff',
    paddingVertical: 18,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  
  },
  paymentText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  goBackBtn: {
    marginTop: 400,
    borderRadius: 12,
    alignSelf: 'center',
    width:150,
    
  },
  goBackGradient: {
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  
  },
  goBackText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
});
