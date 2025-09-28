import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Subscriptions() {

  const Router=useRouter();
  return (
    <LinearGradient
      style={styles.container}
      colors={['#0f0c29', '#302b63', '#24243e']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View>
        <View style={styles.glow}>
          <Text style={styles.title}>Subscriptions</Text>
        </View>

        <ScrollView horizontal contentContainerStyle={styles.whole_box} showsHorizontalScrollIndicator={false}>

          
          <LinearGradient
            colors={['#4facfe', '#00f2fe']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.planBox}
          >
            <Text style={[styles.planTitle, { color: 'black', textAlign: 'center' }]}>Free Plan</Text>
            <Text style={[styles.planDetails, { textAlign: 'center' }]}>
              Price: $0/month{'\n'}
              20 messages/day{'\n'}
              Access to basic GPT model (e.g., GPT-3.5){'\n'}
              Community support{'\n'}
              Limited memory (no chat history saved)
            </Text>
            <Text style={styles.purchased_text}>Purchased</Text>
          </LinearGradient>

          
          <LinearGradient
            colors={['#a18cd1', '#fbc2eb']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.planBox}
          >
            <Text style={[styles.planTitle, { textAlign: 'center' }]}>Pro Plan</Text>
            <Text style={[styles.planDetails, { textAlign: 'center' }]}>
              Price: $19/month{'\n'}
              1,000 messages/month{'\n'}
              Access to GPT-4 or other premium model{'\n'}
              Priority chat performance{'\n'}
              Basic API access{'\n'}
              Chat history & memory features{'\n'}
              Email support
            </Text>
            <TouchableOpacity onPress={()=>Router.push("/WayofPay")}>
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.Buy_button2}
              >
                <Text style={styles.buy_text}>Buy</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>

         
          <LinearGradient
            colors={['#FFD700', '#FFA500']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.planBox}
          >
            <Text style={[styles.planTitle, { textAlign: 'center' }]}>Business Plan</Text>
            <Text style={[styles.planDetails, { textAlign: 'center' }]}>
              Price: $99/month{'\n'}
              10,000 messages/month (scalable){'\n'}
              Access to GPT-4o or fine-tuned models{'\n'}
              Dedicated API keys{'\n'}
              Team collaboration tools{'\n'}
              Advanced analytics & logging{'\n'}
              Priority email & live chat support{'\n'}
              Custom onboarding
            </Text>
            <TouchableOpacity>
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.Buy_button2}
              >
                <Text style={styles.buy_text} onPress={()=>Router.push("/WayofPay")}>Buy</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>

        </ScrollView>
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },

  glow:{
    shadowOffset:{width:0, height:0},
    shadowColor:"red",
    shadowRadius:5,
    elevation:5,
    shadowOpacity:0.2
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color:"white",
    textAlign:"center",
    
  },
  whole_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:100
    
  },
  planBox: {

    borderRadius: 12,
    width: 250,
    padding: 20,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    height:450
  },
  pro_box: {

    borderRadius: 12,
    width: 200,
    padding: 20,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    height:450

  },
  business_box: {
    
    borderRadius: 12,
    width: 200,
    padding: 20,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    height:450

  },
  planTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  planDetails: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
  },

  Buy_button1:{
    width:100,
    height:50,
    textAlign:"center",
    marginLeft:55, 
    marginTop:50,
    borderRadius:15
  },

  buy_text:{
    textAlign:"center",
    fontWeight:500,
    fontSize:20,
    marginTop:10
  },
  Buy_button2:{
    width:100,
    height:50,
    textAlign:"center",
    marginLeft:50, 
    marginTop:50,
    borderRadius:15
  },

  purchased_text:{
    textAlign:"center",
    fontWeight:700,
    fontSize:20,
    marginTop:50


  }

 
});
