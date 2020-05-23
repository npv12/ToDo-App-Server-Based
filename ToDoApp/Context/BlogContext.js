import React, { useEffect, useState } from 'react';
import createDataContext from './createDataContext';
import JsonServer from '../API/JsonServer'


const BlogReducer = (state, action) =>{
    switch(action.type){
        case 'del_BlogPost' :
            return state.filter((item) => item.id !== action.payload )
        case 'get_BlogPost' :
            return action.payload;
        case 'edit_BlogPost' :
            return state.map((item) => {
                return item.id === action.payload.id ? action.payload : item
            })
        default:
            return state;
    }
}

const getBlogPost = dispatch => {
    return async() => {
        try{
        const response = await JsonServer.get('/blogposts')
        console.log(response)
        dispatch({ type: 'get_BlogPost', payload: response.data})}
        catch(e){
            console.log(e)
        }
    }
}

const addBlogPost = dispatch => {
    return async(title,content,callback) => 
        {
            await JsonServer.post('/blogposts', {title, content}) 
            if(callback())
                callback();
        };
};

const delBlogPost = dispatch => {
    return async(id) => 
        {   
            await JsonServer.delete(`/blogposts/${id}`)
            dispatch({type : "del_BlogPost", payload: id}); 
        };
};

const editBlogPost = dispatch => {
    return async(id,title,content,callback) => 
        {
            await JsonServer.put(`/blogposts/${id}`, {title, content})
            dispatch({type : "edit_BlogPost", payload:{title, content,id}}); 
            if(callback())
                callback();
        };
};



export const {Context, Provider} = createDataContext(
    BlogReducer,
    {addBlogPost,delBlogPost,editBlogPost,getBlogPost },
    []);
