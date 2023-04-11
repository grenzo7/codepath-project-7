import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import { supabase } from './client'


const App = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    // READ all post from table
    const fetchPosts = async () => {
      const {data} = await supabase
      .from('Posts')
      .select()
      .order('created_at', { ascending: true })

      // set state of posts
      setPosts(data)
      
      

    }

    fetchPosts()

  }, []);
  console.log("I am here")
  console.log(posts)
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  console.log(element);

  
  return ( 

    <div className="App">

      <div className="header">
        <h1>Write Posts</h1>
        <Link to="/"><button className="headerBtn"> Explore Challenges 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Submit Challenge 🏆 </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;