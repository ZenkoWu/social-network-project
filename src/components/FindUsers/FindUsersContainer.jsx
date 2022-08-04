
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from '../../redux/FindUsersReducer';
import FindUsers from './FindUsers';
import * as axios from "axios";
import React, { Component } from 'react';
import Preloader from '../Common/Preloader/Preloader';



class FindUsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
    .then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers( response.data.items)
      this.props.setTotalUsersCount( response.data.totalCount)
    })
  }
  
  onPageChange=(pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
    {
      withCredentials: true
    }).then(response => {
      this.props.toggleIsFetching(false)
    this.props.setUsers( response.data.items)
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
      unfollow ={this.props.unfollow}/>
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

const FindUsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(FindUsersAPIContainer)

export default FindUsersContainer;