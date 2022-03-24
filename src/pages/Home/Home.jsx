import React from "react";
import { Text, View } from 'react-native';

import {styles} from "./Home.styles";

import ButtonComponent from "../../components/Button";

export default function HomeScreen({ onPress }){

    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <ButtonComponent title="Logout" onPress={onPress} color="#55DA12" />
      </View>
    )
  }