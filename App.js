import React, {Component} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native';
import {MaterialCommunityIcons} from "react-native-vector-icons";
import {FontAwesome5} from "react-native-vector-icons";
import Memo from "./src/memo";
import Todo from "./src/todo";


const Stack = createStackNavigator()

//memoタブ
function MemoStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Memo" component={Memo} />
      </Stack.Navigator>
  )
}

//todoタブ
function TodoStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Todo" component={Todo} />
      </Stack.Navigator>
  )
}

//memoタブとtodoタブをbuttomに設置
const Tab = createBottomTabNavigator()

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
          }}>
          <Tab.Screen name="MemoStack" component={MemoStack} options={{tabBarLabel:"Memo", tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons  name="notebook" color={color} size={size} /> )}} />
          <Tab.Screen name="TodoStack" component={TodoStack} options={{tabBarLabel:"Todo", tabBarIcon: ({ color, size }) => (
            <FontAwesome5  name="tasks" color={color} size={size} /> )}}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
