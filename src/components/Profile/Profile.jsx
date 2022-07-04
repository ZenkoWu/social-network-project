import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => { 

  return (
    <div> 
      <ProfileInfo/>
      <MyPosts postData = {props.postData} addPost ={props.addPost}/>
    </div>
  ) 
}

export default Profile;