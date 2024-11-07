import NewPost from "./NewPost"
import Post from "./Post"
import Modal from "./Modal";
import classes from "./PostsList.module.css"
import { useEffect, useState } from "react";

function PostsList ({isPosting, onStopPosting }) {
    
const [posts, setPosts] = useState([]);
const [isFetching, setIsFetching] = useState(false);
// Fetching the posts from the backend 
useEffect(()=> {
    async function fetchPosts () {
        setIsFetching(true);
        const response =  await fetch("http://localhost:8080/posts")
        const resData = await response.json();
        setPosts(resData.posts);
        setIsFetching(false);
    }
    fetchPosts();
}, []);

function addPostHandler (postData) {
   //  setPosts([postData, ...posts]);   // can also be implemented like below
   setPosts((existingPosts) => [postData, ... existingPosts]);

    
    


    /// connect with dummy backend API
    fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            'Content-Type' : 'application/json'
        }
    });



}
return (
    <>
    {isPosting &&
    <Modal onClose = {onStopPosting}>
    <NewPost  
    onCancel={onStopPosting}
    onPostAdd = {addPostHandler}
    />
    </Modal>    
    }
    {!isFetching && posts.length >0 &&  (<ul className= {classes.posts}>
    {posts.map((post) => <Post author = {post.author}  body = {post.body} ></Post> )}  
    </ul>)}

    {!isFetching && posts.length === 0 && (<div style={{textAlign: 'center', color: 'white'}}>
        <h2>There are no Posts yet</h2>
        <p>Start adding some </p>
    </div>)}

    {isFetching && (<div style={{textAlign: 'center', color: 'white'}}>
        <h2>Posts are loading </h2>
    
    </div>)} 
    
    </>
    )

}

export default PostsList