

import Preloader from '../../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css'

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
      <img src={props.profile.photos.large} className={styles.profImg}/>
      <div className= {styles.userName}> Karamel Min </div>
      <div className={styles.infoAboutUser}> 
        <p>Date of Birth: 11 March <br/>
        City: Rostov-on-Don <br/> 
        Education: School №1 </p>
       
      </div>
    </div>

  </div>
);
}
export default ProfileInfo;


// https://ya.clan.su/_ph/22/69982513.jpg