import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../Context/BlogContext';
import {EvilIcons} from '@expo/vector-icons'

export default function ShowScreen({navigation}){

    const id = navigation.getParam('id')
    const {state} = useContext(BlogContext)
    const blogPost = state.find((item) => item.id == id)
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>
                {blogPost.title}
            </Text>
            <Text style = {styles.content}>
                {blogPost.content}
            </Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight :() => <TouchableOpacity onPress = {() => navigation.navigate("Edit",{id: navigation.getParam('id')})}>
                              <View style = {{margin:10,}}>
                                <EvilIcons name = "pencil" size = {40} />
                              </View>
                            </TouchableOpacity>
    
      };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontSize:30,
        alignSelf:'center',
        margin:15,
        marginBottom:50,
    },
    content:{
        fontSize:20,
        margin:15,
        marginBottom:50,
    }

})