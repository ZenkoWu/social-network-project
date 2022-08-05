import * as axios from 'axios';
import  React, {Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from './../../redux/ProfileReducer';
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component { 
  
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = 25204;
    }
    this.props.getUserProfile(userId)
    
  }

  render() {
    
    return (
      <Profile {...this.props} />
    )
  }

}


const mapStateToProps =(state) => {
  return {
    profile: state.profilePage.profile,
  }
 
}


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}
 
export default  compose(connect(mapStateToProps, {getUserProfile}), withRouter, withAuthRedirect)(ProfileContainer)

 