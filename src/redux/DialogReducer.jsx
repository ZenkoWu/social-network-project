const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


let initialState = {
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
}
const DialogReducer = (state = initialState, action) => {

    let stateCopy = {...state}


    if ( action.type === UPDATE_NEW_MESSAGE_BODY) {
      stateCopy.newMessageText = action.newMessage
    }

    else if (action.type === SEND_MESSAGE) {
      
     stateCopy.messageData = [...state.messageData] 
     stateCopy.messageData.push({text: state.newMessageText, id: 7})
     stateCopy.newMessageText = ''
     
    } 
    return stateCopy;
}

export const sendMessageCreator = () => {
    return {
      type: 'SEND-MESSAGE'
    }
  }
  
export const onChangeMessageCreator = (text) => {
    return {
      type: 'UPDATE-NEW-MESSAGE-BODY',
       newMessage:text
    }
  }
export default DialogReducer;