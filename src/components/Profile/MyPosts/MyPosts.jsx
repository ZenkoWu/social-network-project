import styles from './MyPosts.module.css'
import OnePost from './OnePost/OnePost';
import { useRef } from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/ProfileReducer';

const MyPosts = (props) => {

  let postElement = props.postData.map(post => <OnePost text = {post.text} likesCount = {post.likesCount}/> )
  
  let newPostElement = useRef()

    let addNewPost = function () {
     props.dispatch(addPostActionCreator())
    }

    let onPostChange = function () {
      let text = newPostElement.current.value
      props.dispatch(onPostChangeActionCreator(text))
       
    }
 
    return (
      <div className={styles.postBlock}>
        <div className={styles.clearfix}></div>
        <h3>My posts</h3>
        <div className= {styles.textarea}>
          <textarea placeholder='My posts...' ref={newPostElement} value = {props.newPostText} onChange={onPostChange}/>
        </div>
        <div> 
          <button onClick={addNewPost}>Add Post</button>
          </div>
          {postElement}
  
      </div>
    )
}

export default MyPosts;



  {/* <OnePost text = 'something' likesCount = '1234'/>
       <OnePost text = 'about' likesCount = '345'/>
       <OnePost text = 'happiness' likesCount = '236'/>
       <OnePost text = 'tell me' likesCount = '765'/> */}