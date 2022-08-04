import { UsersAPI } from "../api/API"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

const initialState = {
  users: [
    // {id: 1, photo:'https://coolsen.ru/wp-content/uploads/2021/06/81-6.jpg', followed: true, fullName: 'Ilya L.', status: 'I like football!!', location: {country: 'Russia' , city: 'Rostov-on-Don'}},
    // {id: 2,  photo:'', followed: true,  fullName: 'Ivan C.', status: 'Im so tired', location: {country: 'Russia' , city: 'Novocherkask'}},
    // {id: 3,  photo:'', followed: false, fullName: 'Victor P.', status: 'I speak French', location: {country: 'Salvador' , city: 'MiniCountry'}},
    // {id: 4,  photo:'', followed: false, fullName: 'Susha E.', status: 'Im so pretty', location: {country: 'Belarus' , city: 'Minsk'}},
],
  pageSize: 4,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []

}


const FindUsersReducer = (state = initialState, action) => {
   switch (action.type) {
    case FOLLOW:
      return {
      ...state,
     users: state.users.map(user => {
       if(user.id === action.userId) {
            return {...user, followed: true}
       }
       return user;
     })
    }
   case  UNFOLLOW: 
    return {
        ...state,
       users: state.users.map(user => {
         if(user.id === action.userId) {
              return {...user, followed: false}
         }
         return user;
       })
      }

   case SET_USERS: 
     return {...state, users: action.users}

   case SET_CURRENT_PAGE: 
    return {...state, currentPage: action.currentPage}

   case SET_TOTAL_USERS_COUNT: 
    return {...state, totalUserCount: action.totalCount}

   case TOGGLE_IS_FETCHING: 
     return {...state, isFetching: action.isFetching}

     case TOGGLE_IS_FOLLOWING_PROGRESS : 
     return {...state, 
      followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] 
      : state.followingInProgress.filter(id => id != action.userId)
     }

   default: 
      return state;
}
}



export const followSuccess = (userId)=> {
    return { 
        type: FOLLOW,
        userId,
    }
}

export const unfollowSuccess = (userId) => {
    return { 
        type: UNFOLLOW,
        userId,
    }
}

export const setUsers = (users) => {
    return { 
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
  return { 
      type: SET_CURRENT_PAGE,
      currentPage
    
  }
}

export const setTotalUsersCount = (totalCount) => {
  return { 
      type: SET_TOTAL_USERS_COUNT,
      totalCount
    
  }
}
export const toggleIsFetching = (isFetching) => {
  return { 
      type:TOGGLE_IS_FETCHING,
      isFetching
    
  }
}

export const toggleFollowingProgress = (isFetching, userId)=> {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
  }
}

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    (dispatch(setCurrentPage(currentPage)))
  dispatch(toggleIsFetching(true))
    UsersAPI.getUsers(currentPage, pageSize)
    .then(data => {
     dispatch(toggleIsFetching(false))
     dispatch(setUsers( data.items))
     dispatch(setTotalUsersCount(data.totalCount))
    })
  }
  
}

export const follow = (userId ) => {
  return (dispatch) => {
   dispatch(toggleFollowingProgress(true, userId))
   UsersAPI.follow(userId)
   .then(response => {
   if (response.data.resultCode === 0) {
   dispatch(followSuccess(userId))
   }
   dispatch(toggleFollowingProgress(false, userId))
   })
  }
}

export const unfollow = (userId, ) => {
  return (dispatch) => {
   dispatch(toggleFollowingProgress(true, userId))
   UsersAPI.unfollow(userId)
   .then(response => {
   if (response.data.resultCode === 0) {
   dispatch(unfollowSuccess(userId))
   }
   dispatch(toggleFollowingProgress(false, userId))
   })
  }
}




export default FindUsersReducer;

 // stateCopy.users = state.users.map(user => user)
    // stateCopy.users = [...state.users]
    // если нужно не просто скопировать массив а один из элементов поменять можем использовать мар; примеры выше идентичны