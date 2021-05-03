import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ApiHelper from '../../ApiHelper';
import '../../App.css';

const PostsList = () => {   
    const { id } = useParams();
    const initialPostState = {
        id,
        userId: null,
        title: "",
        body: ""
    };
    const [post, setPost] = useState(initialPostState); 

    useEffect(() => {
        const fetchPostAndSetPost = async () => {
          const { post } = await ApiHelper.getPost(id);
          setPost(post)
        };
        fetchPostAndSetPost();
    }, [id]);    

    return (
      <div className="App">
            <header className="App-header">
                <Link to="/">Back</Link>
                <h3>Details</h3>
                <h5>Title: {post.title}</h5>
                <div>
                  <p>User id: {post.userId}</p>
                  <p>{post.title}</p>
                </div>
            </header>
        </div>
        
    );
};

export default PostsList;