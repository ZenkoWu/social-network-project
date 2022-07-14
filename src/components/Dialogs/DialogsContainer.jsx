import { onChangeMessageCreator, sendMessageCreator } from '../../redux/DialogReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
 
  const state = props.store.getState().messagesPage
  let sendMessage = function () {
    props.store.dispatch(sendMessageCreator())
  }  

  let onChangeMessage = function(text) {
    props.store.dispatch(onChangeMessageCreator(text))
  }
  return (
  
   <Dialogs onSendMessage = {sendMessage} onChangeMessage = {onChangeMessage} 
   dialogData = {state.dialogData} messageData= {state.messageData}
   newMessageText ={state.newMessageText}
   />
  )
}

export default DialogsContainer;


