import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div>
          <div className={styles.dialog}> 

            {/* <img src={props.avatar} alt="" className={styles.img}/> */}
            
           <img src='https://yt3.ggpht.com/a/AGF-l7_Leowr6J7oL2yRm0AdVF4qKOFbfUGGpAhFXA=s900-c-k-c0xffffffff-no-rj-mo'/>
              
            <NavLink to={path} className={link => link.isActive ? styles.active : styles.notActive}>{props.userName}</NavLink>
          </div>
        </div>
    )
} 
export default DialogItem;