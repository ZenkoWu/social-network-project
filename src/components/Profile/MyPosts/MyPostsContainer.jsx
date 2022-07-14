
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    const state = props.store.getState().profilePage

    let onAddPost = function () {
     props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = function (text) {
      props.store.dispatch(onPostChangeActionCreator(text))
       
    }
 
    return (
     <MyPosts addPost = {onAddPost} updateNewPostText = {onPostChange} postData={state.postData} newPostText={state.newPostText}/>
    )
}

export default MyPostsContainer;


