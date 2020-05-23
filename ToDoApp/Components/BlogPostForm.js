import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Context as BlogContext } from '../Context/BlogContext';
import { TextInput } from 'react-native-gesture-handler';

export default function BlogPostForm({navigation, onSubmit, initialValue}){


    const {state} = useContext(BlogContext)
    const [title, setTitle] = useState(initialValue.title)
    const [content, setContent] = useState(initialValue.content)
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.label}>
                Enter Title : 
            </Text>
            <TextInput value = {title} onChangeText = {(item => setTitle(item))} style = {styles.input}/>
            <Text style = {styles.label}>
                Enter Content : 
            </Text>
            <TextInput value = {content} onChangeText = {(item => setContent(item))} style = {styles.input}/>
            <Button
                title = "Save"
                onPress = {() => {onSubmit(title,content)}}
            />
        </View>
);
}

BlogPostForm.defaultProps = {
    initialValue : {title: '', content: ''}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',

    },
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        borderRadius:5,
        marginBottom:15,
        padding:5,
        margin:5,
    },
    label:{
        fontSize:25,
        margin:5,
    }
})