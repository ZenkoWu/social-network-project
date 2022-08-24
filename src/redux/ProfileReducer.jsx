import { ProfileAPI, UsersAPI } from "../api/API"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'


let initialState = {
  postData: [
    { id: 1, text: 'Hey! What is new?', likesCount: '1234' },
    { id: 2, text: 'Tell me about your day', likesCount: '345' },
    { id: 3, text: 'Tomorrow i will go to a gym', likesCount: '876' },
    { id: 4, text: 'Can u recommend me an interesting films?', likesCount: '234' },
  ],
  newPostText: '',
  profile: null,
  status: ''
}


const ProfileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      text: state.newPostText,
      likesCount: 0
    }
    return {
      ...state,
      newPostText: '',
      postData: [...state.postData, newPost],
      //Если нам нужно что то добавить мы дополняем спред вместо пуша(хотя можно и пушить)
 
    }

  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    return {
      ...state,
      newPostText: action.newText
    }
  } else if (action.type === SET_USER_PROFILE) {
      return { ...state, profile: action.profile}
  } else if(action.type === SET_STATUS) {
    return {...state, status: action.status}
  }

  return state;

}

 


export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const onPostChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT ,
    newText: text
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE ,
    profile
  }
}


export const getUserProfile = (userId) => {
  return (dispatch) => {
   
    UsersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile( response.data))
    
    })
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}


export const getStatus  = (userId) =>(dispatch)=> {

  ProfileAPI.getStatus(userId)
  .then(response => {
      dispatch(setStatus( response.data))
    
    })
  }


export const updateStatus = (status) =>(dispatch)=> {
 
    ProfileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
      dispatch(setStatus( status ))
      }
    
    })
  
}

export default ProfileReducer;