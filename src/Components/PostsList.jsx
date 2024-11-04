import NewPost from "./NewPost"
import Post from "./Post"

import classes from "./PostsList.module.css"
function PostsList () {

return (
    <>
    <NewPost></NewPost>
    <ul className= {classes.posts}>
    <Post name = "Sadeed" age = "30"></Post>
    <Post name = "Ahmad" age = "27"></Post>
    </ul>
    </>
    )

}

export default PostsList