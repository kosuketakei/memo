import React, {useState, useEffect} from "react"
import {StyleSheet, FlatList, TouchableOpacity, Text, View, SafeAreaView, AsyncStorage, Keyboard} from "react-native"
import CreMemo from "./components/crememo"
import {Icon, Button, Right} from "native-base"

function Memo (){
    const [memoList, setMemos] = useState([
        {text:"sample-memo1", key:"1"},
        {text:"sample-memo2", key:"2"},
        {text:"sample-memo3", key:"3"},
    ]);


    useEffect(()=>{
        get()
    }, []);

//インプットしたテキストをmemoListに追加してAsyncStorageに保存
    const submitMemo = (memo)=>{
       if (memo !== ""){
            setMemos((prevState)=>{
                return[
                    {text:memo, key:Math.random().toString()},
                    ...prevState
                ]
            })
            save()//保存
            Keyboard.dismiss()
        }
    };

//memoListからテキストを削除
    const delMemo = (key) =>{
        setMemos((prev) =>{
            return prev.filter(memoList => memoList.key != key)
        })
    };

//AsyncStorageでデータ保存
    const save = async () =>{
        try{
            await AsyncStorage.setItem("key1", JSON.stringify(memoList))
        }catch(error){
            alert(error)
        }
    };
//AsyncStorageでデータ取得
    const get = async ()=>{
        try{
            const data = await AsyncStorage.getItem("key1")
            const parsedData = JSON.parse(data)
            if (parsedData !== null){
               setMemos(parsedData)
            }
        }catch(error){
            alert(error)
        }
    } 
 


    return(
        <SafeAreaView style={styles.container}>
            <CreMemo submitMemo={submitMemo} />
            <View style={styles.list}>
                <FlatList data={memoList} renderItem={({item})=>(
                    <TouchableOpacity style={styles.itemList}>
                        <Text style={styles.text}>{item.text}</Text>
                        <Right>
                            <Button style={styles.button} onPress={()=>delMemo(item.key)}>
                                <Icon name="trash" style={{fontSize:25, color:"gray"}}/>
                            </Button>
                        </Right>
                    </TouchableOpacity>
                )}/>
            </View>
        </SafeAreaView>
    )
    
}
export default Memo




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
        width:280,
        fontSize:15,
    },
    button:{
        marginLeft:5,
        backgroundColor:"#fff"
    },
    a:{
        flex:1,
        marginTop:30,
        borderColor:"black",
        backgroundColor:"orange",
    }
})