
import { useEffect } from 'react';
import Preloader from '../Common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => { 
  useEffect(() => {
    document.title = 'Profile Info';
  }, []);

  if(!props.profile) {
    return <Preloader/>
  } 
  return (
    <div>
      <ProfileInfo profile = {props.profile} status = { props.status} updateStatus = {props.updateStatus}/>
      <MyPostsContainer />
    </div>
  ) 
}

export default Profile;