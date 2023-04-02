import { useState } from 'react';
import { Text,TouchableOpacity,  View,TextInput,StyleSheet, Alert } from 'react-native'



export default function Loginj({navigation}) {
  const [email,setEmail] = useState('');

 
  // const [agree,setAgree] = useState(false);

  const onSubmit = () =>{

    console.log(email)

    if(email ===''){
      Alert.alert('email not emapty')
      } else{
        Alert.alert('thanks for login')
        setEmail('')
      }


    }
   
  

    return (

      <View style={styles.login}>

      
      <TouchableOpacity 
      style={{
        backgroundColor:"black",
        height:45,
        width:"50%",
        justifyContent:"center",
        alignItems:"center",
        

      }}>

      <Text style={{color:"white",fontSize:20}}

      onPress={()=>navigation.navigate("register")}
      >Go To Register
      </Text>
      
      </TouchableOpacity>

      <Text style={styles.head}>Login Here</Text>


      <TextInput
        placeholder="Enter Email"
        value={email}
       
        onChangeText={(actual) => setEmail(actual)}
        

        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          marginVertical: 12,
          marginHorizontal: 22,
          fontSize: 20,

        }}
      />

   


  
  


      
  
      <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
       




      </View>
    )
  }

  const styles = StyleSheet.create({
    submit: {
      backgroundColor: '#3b5998',
      margin: 50,
      padding: 18,
      alignItems: 'center',
      borderRadius: 4,
    },
    login: {
      backgroundColor: '#3b5998',
      padding: 18,
      alignItems: 'center',
      marginBottom: 50,
      marginTop:190
    },
    submitText: {
      fontSize: 20,
      color: '#fff',
    },
    head:{
      color:"white",
      fontSize:29,
      marginBottom:30
    }
  });
  
 
  
   
  
  
    
  
  












