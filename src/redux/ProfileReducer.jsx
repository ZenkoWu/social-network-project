const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
  postData: [
    {id: 1, text: 'something', likesCount: '1234'},
    {id: 2, text: 'about', likesCount: '345'},
    {id: 3, text: 'happiness', likesCount: '876'},
    {id: 4, text: 'tell', likesCount: '234'},
],
  newPostText: ''
}

const ProfileReducer = (state = initialState, action) => {
    if (action.type ===  ADD_POST) {
        let newPost = {
          id: 5, 
          text: state.newPostText, 
          likesCount: 0
        }
        state.postData.push(newPost)
        state.newPostText = ''
      
  
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText 
      }

    return state
      
}

export const addPostActionCreator = () => {
    return {
      type:  'ADD-POST'
    }
  }

export const onPostChangeActionCreator = (text) => {
    return {
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text
    }
  }

export default ProfileReducer;