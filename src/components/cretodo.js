import { Text } from "native-base";
import React, {useState} from "react";
import {View, TextInput, StyleSheet, TouchableOpacity} from "react-native";


export default function CreTodo({submitTodo}){
    const [todo, setTodo] = useState("")
    const change = (value) =>{
        setTodo(value)
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="new todos..." onChangeText={value => change(value)} clearTextOnFocus={true} enablesReturnKeyAutomatically={true} />
            <TouchableOpacity style={styles.save} onPress={()=> submitTodo(todo)} >
                <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        alignItems:"center",
    },
    input:{
        width:350,
        marginBottom:20,
        marginTop:20, 
        paddingHorizontal:40,
        paddingVertical:20,
        borderColor: 'black',
        borderWidth: 1,
    },
    save:{
        alignItems:"center",
        justifyContent:"center",
        borderColor:"#007AFF",
        borderWidth:1,
        borderRadius:10,
        paddingVertical:17,
        paddingHorizontal:10,
        width:200,
    },
    text:{
        color:"#007AFF",
        fontSize:15,
    }

})