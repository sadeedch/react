import NewPost from "./NewPost"
import Post from "./Post"
import Modal from "./Modal";
import classes from "./PostsList.module.css"
import { useState } from "react";

function PostsList ({isPosting, onStopPosting }) {
    
const [posts, setPosts] = useState([]);

function addPostHandler (postData) {
   //  setPosts([postData, ...posts]);   // can also be implemented like below
   setPosts((existingPosts) => [postData, ... existingPosts]);
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
    
    <ul className= {classes.posts}>
    {posts.map((post) => <Post author = {post.author}  body = {post.body} ></Post> )}
    
  
    </ul>
    </>
    )

}

export default PostsList