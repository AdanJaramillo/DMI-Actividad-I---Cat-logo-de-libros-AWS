import React, {useEffect, useState} from "react";
import { Text, View, TextInput } from "react-native";
import {styles} from "./AddLibro.styles";

import { list, create, onCreate } from "../../services/todos";
import ButtonComponent from "../../components/Button";


export default function AddLibroScreen(){
  const [todos, setTodos] = useState();

  const [todo, setTodo] = useState({name:"", description:""})
async function listTodos(){
  const todosFetched = await list();
  if(todosFetched) setTodos(todosFetched);
} 
async function createTodo(name, description){
  const todoCreated = await create({name, description});
  return todoCreated;
}
const addData = () => {
  createTodo(todo.name, todo.description);
};

useEffect(() =>{
  listTodos();
  let subscription;
  (async function subscribe(){
    subscription = await onCreate(listTodos);

    })();
    return () => {
      subscription?.unsubscribe();
    };
}, []);

return (
      <View style={styles.container}>
        <Text>Agregar Libro</Text>

        <Text>Titulo</Text>
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, name: text}))
      }
       style={{width:100, height:50, backgroundColor:"#e8eaed"}} 
       />
       <Text>Autor</Text>
        <TextInput 
        onChangeText={(text)=>
          setTodo((current) =>({...current, description: text}))
      }
         style={{
           width:100, 
           height:50, 
           backgroundColor:"#e8eaed",
           paddingHorizontal:10, 
           marginVertical:10,
          }} 
           />
        <ButtonComponent title="Create todo" onPress={addData} />

      </View>
    );
  }