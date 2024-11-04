import NewPost from "./NewPost"
import Post from "./Post"
import { useState } from 'react';

import classes from "./PostsList.module.css"
function PostsList () {
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
    <NewPost onBodyChange = {changeBodyHandler} onAuthorChange = {changeAuthorHandler} > </NewPost>
    <ul className= {classes.posts}>
    <Post text = {enteredBody} name = {enteredAuthor} ></Post>
    <Post text = {"No Message"} name = {"Sadeed"} ></Post>
    <Post text = {"No Message"} name = {"Ahmad"} ></Post>
    </ul>
    </>
    )

}

export default PostsList