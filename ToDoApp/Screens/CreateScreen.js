import React, { useContext} from 'react';
import { Context as BlogContext } from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

export default function CreateScreen({navigation}){
    
    const {addBlogPost} = useContext(BlogContext)
    return <BlogPostForm onSubmit = {(title,content) => {addBlogPost(title,content,() => navigation.navigate("Index"))}}/>
    
}
