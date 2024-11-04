 import classes from './Post.module.css';
 
 function Post (props) {
    return (
        <li className={classes.post}>
            <p className={classes.text}>Welcome To Gold Coast Health </p>
            <p className={classes.author} > You are: {props.name} </p>
        </li>
    )
 } 


 export default Post; 

