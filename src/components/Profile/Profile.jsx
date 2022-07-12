import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => { 

  return (
    <div> 
      <ProfileInfo/>
      <MyPosts postData = {props.postData}
       addPost ={props.addPost}
       newPostText = {props.newPostText}
       updateNewPostText = {props.updateNewPostText}/>
    </div>
  ) 
}

export default Profile;