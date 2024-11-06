import NewPost from "./NewPost"
import Post from "./Post"
import { useState } from 'react';
import Modal from "./Modal";
import classes from "./PostsList.module.css"

function PostsList ({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    

    function changeBodyHandler (event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler (event) {
        setEnteredAuthor(event.target.value);
    }

return (
    <>
    {isPosting &&
    <Modal onClose = {onStopPosting}>
    <NewPost  
    onBodyChange = {changeBodyHandler} 
    onAuthorChange = {changeAuthorHandler} > 
    </NewPost>
    </Modal>    
    }
    
    <ul className= {classes.posts}>
    <Post text = {enteredBody} name = {enteredAuthor} ></Post>
    <Post text = {"No Message"} name = {"Sadeed"} ></Post>
    <Post text = {"No Message"} name = {"Ahmad"} ></Post>
    </ul>
    </>
    )

}

export default PostsList