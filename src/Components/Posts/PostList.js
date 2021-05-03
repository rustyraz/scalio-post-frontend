import React, { useState, useEffect } from 'react';
import ApiHelper from '../../ApiHelper';
import '../../App.css';

const PostsList = () => {
    const [posts, setPosts] = useState([]);    

    useEffect(() => {
        const fetchPostsAndSetPosts = async () => {
          const { posts } = await ApiHelper.getAllPosts();
          setPosts(posts)
        };
        fetchPostsAndSetPosts();
    }, []);    

    return (
      <div className="App">
            <header className="App-header">
                <h4>All Posts View</h4>
                <div>
                  <ul>
                    {posts.map(({id, title, body}, i) =>(
                      <li
                        key={i}             
                      >
                        <p>{title}</p>              
                      </li>
                    ))}
                  </ul>
                </div>
            </header>
        </div>
        
    );
};

export default PostsList;