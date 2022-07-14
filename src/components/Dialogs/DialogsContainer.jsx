import { onChangeMessageCreator, sendMessageCreator } from '../../redux/DialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux/es/exports';


const mapStateToProps = (state) => {
  return {
    dialogData: state.messagesPage.dialogData,
    messageData: state.messagesPage.messageData,
    newMessageText: state.messagesPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage:() => {dispatch(sendMessageCreator())},
    onChangeMessage: (text) => {dispatch(onChangeMessageCreator(text))}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)
export default DialogsContainer;



