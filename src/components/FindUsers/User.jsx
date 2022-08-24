import styles from './User.module.css'
import { NavLink } from 'react-router-dom';
import photoOfUser from '../../img/avatarOfUserDefault.png'

const User = (props) => {
  return (
    <div style={{border: '1px solid gray', marginBottom: '20px', margin: '10px', textAlign:'center', width: '240px' }} className='col'>
         <div> 
          <div style={{margin: '20px'}}>
          <div>
          <NavLink to={'/profile/' + props.id}>
            <img src={props.photos.large? props.photos.large: photoOfUser }
             className={styles.photoOfUser}/>
          </NavLink>
          </div>
          <div st>
          {props.name} //
           id: {props.id}
          {/* {props.status}
          {user.location.country}
          {user.location.country} */}
        </div>
          <div> 
            {props.followed ? 
            <button class="btn btn-secondary" disabled={props.followingInProgress.includes(props.id)} 
              onClick={() => {props.unfollow(props.id)}} >
              Unfollow
            </button> 
            : <button class="btn btn-primary"  disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
              props.follow(props.id)}}>
              Follow
            </button>
            }
          </div>
          </div>
        </div>
  </div>
   

    )
} 

export default User;
