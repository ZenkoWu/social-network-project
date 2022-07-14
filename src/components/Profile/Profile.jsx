import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => { 

  return (
    <div> 
      <ProfileInfo/>
      <MyPostsContainer 
      store = {props.store}
      // postData = {props.postData}
      //  dispatch ={props.dispatch}
      //  newPostText = {props.newPostText}
       />
    </div>
  ) 
}

export default Profile;