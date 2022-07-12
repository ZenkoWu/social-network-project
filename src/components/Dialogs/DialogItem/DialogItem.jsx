import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css'

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`

  let avatarOfFriend;
  if (props.avatar == '') {
    avatarOfFriend = 'file:///C:/progy/01/git/social-network-project/src/img/avatarOfUserDefault.png'
  } else {
    avatarOfFriend = props.avatar
  } 


  return (
    <div>
      <div className={styles.dialog}>

        <img src={avatarOfFriend} className={styles.img} />

        <NavLink to={path} className={link => link.isActive ? styles.active : styles.notActive}>{props.userName}</NavLink>
      </div>
    </div>
  )
}
export default DialogItem;




