import React, { useContext } from 'react';
import { Context as BlogContext } from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

export default function EditScreen({navigation}){

    const id = navigation.getParam('id')
    const {state, editBlogPost} = useContext(BlogContext)
    const blogPost = state.find((item) => item.id == id)
    
    return(
        <BlogPostForm initialValue = {blogPost} onSubmit = {(title,content) => {editBlogPost(id,title,content,() => navigation.navigate("Show"))}}/>
    );
}