import { authAPI } from "../api/API"

const SET_USER_DATA = 'SET-USER-DATA'
const  TOGGLE_IS_FETCHING = ' TOGGLE-IS-FETCHING,'

const initialState = {
 userId: null,
 email: null,
 login: null,
 isAuth: false
//  isFetching:false,


}


const AuthReducer = (state = initialState, action) => {
   switch (action.type) {
    case SET_USER_DATA:  
    return {
      ...state,
      ...action.data,
      isAuth: true
    }
   case TOGGLE_IS_FETCHING: 
     return {...state, isFetching: action.isFetching}

   default: 
      return state;
}
}



export const setAuthUserData = (userId, email, login) => {
  return { 
      type: SET_USER_DATA,
      data: {userId, email, login}
    
  }
}

export const getAuthUserData = () => (dispatch)=> {
  authAPI.getAuthMe()
  .then(response => {
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
    dispatch(setAuthUserData(id, email, login))
    }
  })
}

export const toggleIsFetching = (isFetching) => {
  return { 
      type: TOGGLE_IS_FETCHING,
      isFetching
    
  }
}


export default AuthReducer;