import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'


const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""});

    useEffect(() => {
        const result = data.filter(item => String(item.id) === id)[0];
        setPost({title: result.title, author: result.author, description: result.description});
    }, [data, id]);


    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const updatePost = async (event) => {
        event.preventDefault();
        const { error } = await supabase
        .from('Posts')
        .update({ title: post.title, author: post.author,  description: post.description})
        .eq('id', id)

        if (error) {
            console.log(error);
        }

        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
        const { error } = await supabase
        .from('Posts')
        .delete()
        .eq('id', id) 

        if (error) {
            console.log(error);
        }

        window.location = "/";
    }

    return (
        <div>
            <form>
                <label>Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/><br />
                <br/>

                <label>Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange}/><br />
                <br/>

                <label>Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;