import React, {useState} from "react"
import {SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity, AsyncStorage} from "react-native"
import CreTodo from "./components/cretodo"
import {Icon, Button, Left, Body, Right} from "native-base"

function Todo(){
    const [todoList, setTodos] = useState([
        {text:"やること1", key:"1"},
        {text:"やること2", key:"2"},
        {text:"やること3", key:"3"},
    ])

    const submitTodo = (todo) =>{
        if (todo !== ""){
            setTodos((prev)=>{
                return[
                    {text:todo, key:Math.random().toString()},
                    ...prev
                ]
            })
        }
    }

    const delTodo = (key) =>{
        setTodos((prev) =>{
            return prev.filter(todoList => todoList.key != key)
        })
    };
    
    return(
        <SafeAreaView style={styles.container}>
            <CreTodo submitTodo={submitTodo} />
            <View style={styles.list}>
                <FlatList data={todoList} renderItem={({item}) =>(
                    <TouchableOpacity style={styles.itemList} >
                        <Left>
                            <Button style={styles.checkButton}>
                                <Icon name="checkmark-circle-outline" style={{fontSize:20, color:"green"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.text}>{item.text}</Text>
                        </Body>
                        <Right>
                            <Button style={styles.trashButton} onPress={()=> delTodo(item.key)}>
                                <Icon name="trash" style={{fontSize:20, color:"gray"}}/>
                            </Button>
                        </Right>
                    </TouchableOpacity>
                )}/>
            </View>
        </SafeAreaView>
    )
}
export default Todo

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
    },
    list:{
        marginTop:20,
    },
    itemList:{
        flexDirection:"row",
        borderColor:"#bbb",
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10,
        marginVertical:5,
        width:360,
        paddingHorizontal:5,
        paddingVertical:5,
    },
    text:{
        width:200,
        fontSize:17,
        textAlign:"center",
    },
    checkButton:{
        backgroundColor:"#fff"
    },
    trashButton:{
        backgroundColor:"#fff"
    }
    
})