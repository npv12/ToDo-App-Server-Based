import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Context as BlogContext} from '../Context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'



export default function IndexScreen({navigation}) {

    const {state, delBlogPost,getBlogPost} = useContext(BlogContext);

    useEffect(() => {
      getBlogPost()
      const listener = navigation.addListener('didFocus', () => {
        getBlogPost()
      })
    
      return () => {
        listener.remove()
      }
    },[])

    function RenderElement(item){
      return(
        <View style = {styles.row}>
        <TouchableOpacity onPress = {() => navigation.navigate('Show',{id: item.id})}>
            <Text style = {styles.text}>
              {item.title}
            </Text>
                      
        </TouchableOpacity>
            <TouchableOpacity onPress = {() => delBlogPost(item.id)}>
              <View>
                <Feather style = {styles.icon} name = "trash"/>
              </View>
            </TouchableOpacity>

        </View>
      )
    }

  return (
    <View style={styles.container}>
      <FlatList 
        data = {state}
        keyExtractor = {(item) => item.title}
        renderItem = {({item}) => {return (RenderElement(item))}}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({navigation}) => {
  return{
    headerRight :() => <TouchableOpacity onPress = {() => navigation.navigate("Create")}>
                          <View style = {styles.newIcon}>
                            <Feather name = "plus" size = {30} />
                          </View>
                        </TouchableOpacity>

  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row:{
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between",
    paddingVertical:20,
    paddingHorizontal:10,
    borderTopWidth:1,
    borderColor:'grey'
 
  },
  text:{
    fontSize:20,
  },
  icon:{
    fontSize:20,
  },
  newIcon:{
    margin:20,
  }
});
