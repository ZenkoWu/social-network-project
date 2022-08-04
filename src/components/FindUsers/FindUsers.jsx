import { NavLink } from 'react-router-dom';
import UserImg from '../../img/150-1503945_transparent-user-png-default-user-image-png-png.png';
import styles from './FindUsers.module.css'
import User from "./User";

// class FindUsersAPIContainer extends React.Component {
//   componentDidMount() {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
//       this.props.setUsers( response.data.items)
//       this.props.setTotalUsersCount( response.data.totalCount)
//     })
//   }
  
//   onPageChange=(pageNumber) => {
//     this.props.setCurrentPage(pageNumber)
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//       this.props.setUsers( response.data.items)
//     })
//   }
//   render () {
//     return (
//       <FindUsers totalCount={this.props.totalCount} 
//       pageSize = {this.props.pageSize}
//       pagesCount = {this.props.pagesCount}
//       currentPage = {this.props.currentPage}
//       onPageChange = {this.onPageChange}
//       users = {this.props.users}
//       follow = {this.props.follow}
//       unfollow ={this.props.unfollow}/>
//    );
//   }
// }


const FindUsers = (props) => {

  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
  let pages = []
  let count = 20

  // for(let i = 1; i<= pagesCount; i++) {
  //   pages.push(i)
  // } neeeeed
  
  for(let i = 1; i<= 20; i++) {
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
              <button onClick={() => props.unfollow(user.id)}>Unfollow</button> 
              : <button onClick={() => props.follow(user.id)}>Follow</button>}
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







