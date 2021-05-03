import './../App.css';
import React, {useCallback, useState} from 'react';
import ApiHelper from '../ApiHelper';
import { useHistory } from 'react-router-dom';


function Home() {
  const [postId, setPostId] = useState("");
  const [searchError, setSearchError] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const onNewPostIdChange = useCallback((event) => {
    setPostId(event.target.value);
  },[]);

  const history = useHistory();

  const onSearchPostByID = useCallback(
      
    async (event) => {
      event.preventDefault();
      setSearchStatus('searching');
      const result = await ApiHelper.getPost(postId);
      if(!result.error){
        setSearchStatus('gotResult')
        setSearchError("");
        if(!result.post.title || !result.post.body){
            setSearchError("Post does not have a title or body");
            setSearchStatus('errorFound')
        }else {
            //navigate to the post view page
            history.push(`/posts/${result.post.id}`)
        }
      }else{
        setSearchError(result.message)
        setSearchStatus('errorFound')
      }
      
    },
    [postId, setSearchError, history]
  );
  
  return (
    <div className="App">
      <header className="App-header">
          <h3>HOME (Scalio - Assignment)</h3>

          <section className="post-search-form">
            <form onSubmit={onSearchPostByID}>
              <input
                type="number"
                placeholder="Enter the post id"
                value={postId}
                onChange={onNewPostIdChange}
              />
              <button type="submit" >
                Send
              </button>
            </form>
            
            <p className={`${searchStatus}`}>{ searchError ? searchError : searchStatus }</p>
          </section>         
      </header>
      <div>
        
      </div>
    </div>
  );
}

export default Home;
