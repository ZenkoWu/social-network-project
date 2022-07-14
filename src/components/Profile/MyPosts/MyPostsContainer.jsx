import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/ProfileReducer';
import StoreContext from '../../../redux/StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer> 
    {store => {

      const state = store.getState().profilePage

       let onAddPost = function () {
         store.dispatch(addPostActionCreator())
       }

       let onPostChange = function (text) {
         store.dispatch(onPostChangeActionCreator(text))
       }

      return (
        <MyPosts addPost = {onAddPost} updateNewPostText = {onPostChange} postData={state.postData} newPostText={state.newPostText}/>
      )
      }
    }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;

