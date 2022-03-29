import React from "react";
import { Text, View } from 'react-native';
import {styles} from "./Home.styles";
import ButtonComponent from "../../components/Button";
import {Authenticator, withAuthenticator} from 'aws-amplify-react-native'
import {Amplify} from "aws-amplify"

export default function HomeScreen(){

  async function signOut(){
    try{
      await Amplify.Auth.signOut({gloobal:true});

    } catch(error)
    {
      console.log(error)
    }

  }

    return (

      <View style={styles.container}>
        <Text>Home Screen</Text>
        <ButtonComponent title="Logout" onPress={signOut} />
      </View>
    )
  }