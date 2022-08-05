import Preloader from '../../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css'
import defaultAvatar from '../../../img/avatarOfUserDefault.png'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
return (
  <div>
    <div>
      <img src='https://sun9-67.userapi.com/c844721/v844721600/12813f/IOTsEqFrmZY.jpg' className={styles.backgroundImg}/>
    </div>
    <div>
      <img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar } className={styles.profImg}/>
      <div className= {styles.userName}> {props.profile.fullName} </div>
      <div className={styles.infoAboutUser}> 
       <p> 
        About me: {props.profile.aboutMe} <br />
        <ProfileStatus status= {props.status} updateStatus ={props.updateStatus}/>
        Статус поиска работы: {props.profile.lookingForAJobDescription} <br/>
        <div className={styles.myContacts}>
          My contacts: <br />
          Facebook: {props.profile.contacts.facebook} <br />
          vk: {props.profile.contacts.vk} <br />
          twitter: {props.profile.contacts.twitter} <br />
          instagram: {props.profile.contacts.instagram} <br />
          github: {props.profile.contacts.github} <br />
          {/* youtube: {props.profile.contacts.youtube} <br /> */}

        </div>
        
        
       </p>
        {/* <p>Date of Birth: 11 March <br/>
        City: Rostov-on-Don <br/> 
        Education: School №1 </p> */}
       
      </div>
    </div>

  </div>
);
}
export default ProfileInfo;


// https://ya.clan.su/_ph/22/69982513.jpg cat

