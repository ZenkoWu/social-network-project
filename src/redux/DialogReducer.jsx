const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const DialogReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        state.messageData.push({text: state.newMessageText, id: 7})
        state.newMessageText = ''
     
  
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageText = action.newMessage
      
    }
    return state
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