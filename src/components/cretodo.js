import React, {useState} from "react"
import {View, TextInput, StyleSheet, Button} from "react-native"

export default function CreTodo({submitTodo}){
    const [todo, setTodo] = useState("")
    const change = (value) =>{
        setTodo(value)
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="new todos..." onChangeText={value => change(value)} clearTextOnFocus={true} enablesReturnKeyAutomatically={true} />
            <Button title="Save" onPress={()=> submitTodo(todo)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
    },
    input:{
        width:350,
        marginBottom:20,
        marginTop:20, 
        paddingHorizontal:40,
        paddingVertical:20,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle:"dashed",
    },

})