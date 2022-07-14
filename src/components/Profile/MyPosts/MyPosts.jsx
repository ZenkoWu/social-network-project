import styles from './MyPosts.module.css'
import OnePost from './OnePost/OnePost';
import { useRef } from 'react';

const MyPosts = (props) => {

  let postElement = props.postData.map(post => <OnePost text = {post.text} key = {post.id} likesCount = {post.likesCount}/> )
  
  let newPostElement = useRef()

    let onAddPost = function () {
     props.addPost()
    }

    let onPostChange = function () {
      let text = newPostElement.current.value
      props.updateNewPostText(text)
       
    }
 
    return (
      <div className={styles.postBlock}>
        <div className={styles.clearfix}></div>
        <h3>My posts</h3>
        <div className= {styles.textarea}>
          <textarea placeholder='My posts...' ref={newPostElement} value = {props.newPostText} onChange={onPostChange}/>
        </div>
        <div> 
          <button onClick={onAddPost}>Add Post</button>
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