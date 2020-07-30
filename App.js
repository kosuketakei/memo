import React, {Component} from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native';
import Memo from "./src/memo"
import Todo from "./src/todo"
import Icon from "native-base"

const Stack = createStackNavigator()

function MemoStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Memo" component={Memo} />
      </Stack.Navigator>
  )
}

function TodoStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Todo" component={Todo} />
      </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
          }}>
          <Tab.Screen name="MemoStack" component={MemoStack} options={{title:"Memo"}}/>
          <Tab.Screen name="TodoStack" component={TodoStack} options={{title:"Todo"}}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
