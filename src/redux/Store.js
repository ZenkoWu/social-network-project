import ProfileReducer from "./ProfileReducer"
import DialogReducer from './DialogReducer';

// const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
// const SEND_MESSAGE = 'SEND-MESSAGE'
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const store = {
  _state: {
        messagesPage: {
            dialogData: [
                {userName: 'Ilya', id :'1', avatar: ''},
                {userName: 'Sasha', id :'2', avatar: 'https://pic.rutubelist.ru/user/45/51/45512889626af0102442ec4cec35ab73.jpg'},
                {userName: 'Masha', id :'3', avatar:'https://cs1.livemaster.ru/storage/a0/46/5fb17d2a7013ea58f606bbc014b7--kartiny-i-panno-kartina-portret-lis-dzhentelmen-lis-v-ochkah.jpg'},
                {userName: 'Victor', id :'4', avatar:'https://www.ukazka.ru/img/g/uk870877.jpg'},
                {userName: 'Gabri', id :'5', avatar:'https://allopicasso.ru/wa-data/public/shop/products/04/68/6804/images/35758/35758.750x0.jpg'},
                {userName: 'Ivan', id :'6', avatar: 'https://www.ukazka.ru/img/g/uk870877.jpg' }
            ], 
        
            messageData: [
                {text: 'Hello', id :'1'},
                {text: 'How are u?', id :'2'},
                {text: 'I wanna see u', id :'3'},
                {text: "Let's meet tomorrow", id :'4'},
                {text: 'I miss u too', id :'5'},
                {text: 'Play with me', id :'6'}
            ],

            newMessageText: '',
        },
    
        
        profilePage: {
            postData: [
                {id: 1, text: 'something', likesCount: '1234'},
                {id: 2, text: 'about', likesCount: '345'},
                {id: 3, text: 'happiness', likesCount: '876'},
                {id: 4, text: 'tell', likesCount: '234'},
            ],
            newPostText: ''
            
        },
        
        },
  _rerenderEntireTreeInState() {
  },

  getState() {
    return this._state;
  },

  // addPost() {
  //   let newPost = {
  //     id: 5, 
  //     text: this._state.profilePage.newPostText, 
  //     likesCount: 0
  //   }
  
  //   this._state.profilePage.postData.push(newPost)
  //   this._state.profilePage.newPostText = ''
  //   this._rerenderEntireTreeInState(this._state)
  // },
  
  //  updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText 
  //   this._rerenderEntireTreeInState(this._state)
  // },
  
  subscribe(observer) {
    this._rerenderEntireTreeInState = observer;
  },

  dispatch(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action)
    this._state.messagesPage = DialogReducer(this._state.messagesPage, action)
    this._rerenderEntireTreeInState(this._state)
    
    // if (action.type ===  ADD_POST) {
    //   let newPost = {
    //     id: 5, 
    //     text: this._state.profilePage.newPostText, 
    //     likesCount: 0
    //   }
    //   this._state.profilePage.postData.push(newPost)
    //   this._state.profilePage.newPostText = ''
    //   this._rerenderEntireTreeInState(this._state)

    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText 
    //   this._rerenderEntireTreeInState(this._state)

    // } else if (action.type === SEND_MESSAGE) {
    //   this._state.messagesPage.messageData.push({text: this._state.messagesPage.newMessageText, id: 7})
    //   this._state.messagesPage.newMessageText = ''
    //   this._rerenderEntireTreeInState(this._state)

    // }else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.messagesPage.newMessageText = action.newMessage
    //   this._rerenderEntireTreeInState(this._state)
    // }
  },
}

export default store;


