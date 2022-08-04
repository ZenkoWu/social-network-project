
import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, setUsers, unfollow } from '../../redux/FindUsersReducer';
import FindUsers from './FindUsers';
import React, { Component } from 'react';
import Preloader from '../Common/Preloader/Preloader';
import { toggleFollowingProgress } from './../../redux/FindUsersReducer';




class FindUsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
    // this.props.toggleIsFetching(true)
    // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    // .then(data => {
    //   this.props.toggleIsFetching(false)
    //   this.props.setUsers( data.items)
    //   this.props.setTotalUsersCount(data.totalCount)
    // })
  }
  
  onPageChange=(pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)

    // this.props.setCurrentPage(pageNumber)
    // this.props.toggleIsFetching(true)
    // UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false)
    // this.props.setUsers(data.items)
    // })
  }
  render () {
    return (
      <>
      {this.props.isFetching ? <Preloader/> : null}
      <FindUsers totalUserCount={this.props.totalUserCount} 
      pageSize = {this.props.pageSize}
      currentPage = {this.props.currentPage}
      onPageChange = {this.onPageChange}
      users = {this.props.users}
      follow = {this.props.follow}
      unfollow ={this.props.unfollow}
      followingInProgress = {this.props.followingInProgress}
      getUsers ={this.props.getUsers}/>
      </>
   );
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
//         toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))},


//     }
// }

const FindUsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, 
  setCurrentPage, toggleFollowingProgress, getUsers})(FindUsersAPIContainer)

export default FindUsersContainer;

