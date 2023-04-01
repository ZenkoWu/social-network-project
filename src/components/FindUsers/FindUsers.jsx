import User from "./User"
import Paginator from './Paginator/Paginator';

const FindUsers = (props) => {
  return (
    <div className="container">
    <div style={{margin: '20px 0px', display:'flex', justifyContent: 'space-between'}} className='row'>
      {props.users.map(user => 
           <User 
              photos = {user.photos} 
              followed ={user.followed} 
              followingInProgress ={props.followingInProgress}
              follow ={ props.follow} 
              unfollow = {props.unfollow} 
              name = {user.name} 
              id = {user.id}
            />
      )
      }
     
    </div>
    
    <Paginator 
      pageSize = {props.pageSize} 
      currentPage = {props.currentPage} 
      onPageChange={props.onPageChange} 
      totalItemsCount={props.totalItemsCount}
    />
    </div>
 );
}

export default FindUsers;










