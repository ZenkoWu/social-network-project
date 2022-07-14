import { onChangeMessageCreator, sendMessageCreator } from '../../redux/DialogReducer';
import StoreContext from '../../redux/StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

  return (
    <StoreContext.Consumer> 
      {store => {

        const state = store.getState().messagesPage
        let sendMessage = function () {
        store.dispatch(sendMessageCreator())
      }  

      let onChangeMessage = function(text) {
        store.dispatch(onChangeMessageCreator(text))
      }
      return (
        <Dialogs onSendMessage = {sendMessage} onChangeMessage = {onChangeMessage} 
        dialogData = {state.dialogData} messageData= {state.messageData}
        newMessageText ={state.newMessageText}
        />
       )
        }
      }
    </StoreContext.Consumer>
  )
  
}

export default DialogsContainer;



