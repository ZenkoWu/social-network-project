import { NavLink } from 'react-router-dom';
import UserImg from '../../img/150-1503945_transparent-user-png-default-user-image-png-png.png';
import styles from './FindUsers.module.css'
import User from "./User";
import * as axios from "axios";



const FindUsers = (props) => {

  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
  let pages = []


  // for(let i = 1; i<= pagesCount; i++) {
  //   pages.push(i)
  // } neeeeed
  
  for(let i = 1; i<= 200; i++) {
    pages.push(i)
  }

  return (
    <div>
       <div style={{margin: '5px auto', textAlign: 'center'}}> 
       {pages.map(p => <span className={props.currentPage == p && styles.selectedPage} onClick = {()=>{props.onPageChange(p)}}>{p}</span>)}
      </div>
      {props.users.map(user => 
        <div>
          <div>
            <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.large? user.photos.large: UserImg }
            // className={styles.userImg} 
            style={{width: '120px'}}/>
            </NavLink>
            <div> 
              {user.followed ? 
                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.toggleFollowingProgress(true, user.id)
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': '4a2278a1-2b45-482b-a61e-cb001fa1a3bc'
                  }
                })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.unfollow(user.id)
                  }
                  props.toggleFollowingProgress(false, user.id)
                })
                }}>Unfollow</button> 
              : <button   disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                props.toggleFollowingProgress(true, user.id)
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': '4a2278a1-2b45-482b-a61e-cb001fa1a3bc'
                  }
                })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.follow(user.id)
                  }
                  props.toggleFollowingProgress(false, user.id)
                })
                }
               }>Follow</button>
              
              }
            </div>
          </div>
          <div>
            {user.name} //
             id: {user.id}
            {/* {user.status}
            {user.location.country}
            {user.location.country} */}
          </div>
        </div>)}
       
  </div>
 );
}

export default FindUsers;


{/* <User fullName = {user.fullName} status = {user.status} location = {user.location}/> */}







