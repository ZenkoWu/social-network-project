const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'


let initialState = {
  postData: [
    { id: 1, text: 'something', likesCount: '1234' },
    { id: 2, text: 'about', likesCount: '345' },
    { id: 3, text: 'happiness', likesCount: '876' },
    { id: 4, text: 'tell', likesCount: '234' },
  ],
  newPostText: '',
  profile: null
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


export default ProfileReducer;