
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from '../../redux/FindUsersReducer';
import FindUsers from './FindUsers';
import * as axios from "axios";
import React, { Component } from 'react';
import Preloader from '../Common/Preloader/Preloader';
import { UsersAPI } from '../../api/API';
import { toggleFollowingProgress } from './../../redux/FindUsersReducer';




class FindUsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    .then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers( data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }
  
  onPageChange=(pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
    this.props.setUsers(data.items)
    })
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
      toggleFollowingProgress = {this.props.toggleFollowingProgress}
      followingInProgress = {this.props.followingInProgress}/>
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

const FindUsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })(FindUsersAPIContainer)

export default FindUsersContainer;