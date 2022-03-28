import React, {useEffect, useState} from "react";
import { Text, View, TextInput } from "react-native";
import {styles} from "./Lista.styles";

import { list, create, onCreate } from "../../services/todos";
import ButtonComponent from "../../components/Button";


export default function ListaScreen(){
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
        


        {todos && 
          todos.map((todo)=> (
          <Text key={todo.id}> {`${todo.name} ${todo.description}`}</Text>
          ))}

      </View>
    );
  }