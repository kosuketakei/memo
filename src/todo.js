import React, {useState, useEffect} from "react";
import {SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity, AsyncStorage, Keyboard} from "react-native";
import CreTodo from "./components/cretodo";
import {Icon, Button, Left, Body, Right} from "native-base";

function Todo(){
    const [todoList, setTodos] = useState([
        {text:"sample-todo1", key:"1"},
        {text:"sample-todo2", key:"2"},
        {text:"sample-todo3", key:"3"},
    ])
    

    useEffect(()=>{
        get()
    }, [setTodos]);

    useEffect(()=>{
        save()
    })

    //インプットしたテキストをtodoListに追加してAsyncStorageに保存
    const submitTodo = (todo) =>{
        if (todo !== ""){
            setTodos((prevState)=>{
                return[
                    {text:todo, key:Math.random().toString()},
                    ...prevState
                ]
            })
            save()//保存
            Keyboard.dismiss()
        }
    }

    const delTodo = (key) =>{
        setTodos((prev) =>{
            return prev.filter(todoList => todoList.key != key)
        })
        save()
    };

    //AsyncStorageでデータ保存
    const save = async () =>{
        try{
            await AsyncStorage.setItem("key2", JSON.stringify(todoList))
        }catch(error){
            alert(error)
        }
    };
//AsyncStorageでデータ取得
    const get = async ()=>{
        try{
            const data = await AsyncStorage.getItem("key2")
            const parsedData = JSON.parse(data)
            if (parsedData !== null){
               setTodos(parsedData)
            }
        }catch(error){
            alert(error)
        }
    } 
    
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