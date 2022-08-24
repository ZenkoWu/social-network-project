
import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, unfollow } from '../../redux/FindUsersReducer';
import FindUsers from './FindUsers';
import React, { Component } from 'react';
import Preloader from '../Common/Preloader/Preloader';
import { toggleFollowingProgress } from './../../redux/FindUsersReducer';
import { compose } from 'redux';
import withAuthRedirect from './../../hoc/withAuthRedirect';



class FindUsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  
  onPageChange=(pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }
  render () {
    return (
      <>
      {this.props.isLoading ? <Preloader/> : 
      <FindUsers 
      {...this.props}
      // totalItemsCount={this.props.totalItemsCount} 
      // pageSize = {this.props.pageSize}
      // currentPage = {this.props.currentPage}
      // onPageChange = {this.onPageChange}
      // users = {this.props.users}
      // follow = {this.props.follow}
      // unfollow ={this.props.unfollow}
      // followingInProgress = {this.props.followingInProgress}
      // getUsers ={this.props.getUsers}
      />
    }
      </>
      
   );
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalItemsCount: state.usersPage.totalItemsCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {dispatch(followActionCreator(userId))},
//         unfollow: (userId) => {dispatch(unfollowActionCreator(userId))},
//         setUsers: (users) => {dispatch(setUsersActionCreator(users))},
//         setCurrentPage:(pageNumber) => {dispatch(setCurrentPageActionCreator(pageNumber))},
//         setTotalUsersCount:(totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
//          : (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))},


//     }
// }

const FindUsersContainer = compose(withAuthRedirect, connect(mapStateToProps, 
  {follow, unfollow, getUsers}))(FindUsersAPIContainer)

export default FindUsersContainer;

// 