import * as axios from 'axios';
import  React, {Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from './../../redux/ProfileReducer';

class ProfileContainer extends React.Component { 
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {
      this.props.setUserProfile( response.data)
    
    })
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }

}

const mapStateToProps =(state) => {
  return {
    profile: state.profilePage.profile
  }
 
}
 
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
 