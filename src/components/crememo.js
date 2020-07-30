import React, {useState} from "react"
import {StyleSheet, View, TextInput, Button,} from "react-native"


export default function CreMemo ({submitMemo}){
    const [memo, setMemo] = useState("")
    const change = (value) =>{
        setMemo(value)
    }
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="new memo..." onChangeText={value => change(value)} clearTextOnFocus={true} enablesReturnKeyAutomatically={true} />
            <Button title="保存" onPress={()=> submitMemo(memo)} />
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