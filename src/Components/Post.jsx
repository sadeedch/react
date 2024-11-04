 import classes from './Post.module.css';
 
 function Post (props) {
    return (
        <li className={classes.post}>
            <p className={classes.text}> {props.text} </p>
            <p className={classes.author} > Author: {props.name} </p>
        </li>
    )
 } 


 export default Post; 

