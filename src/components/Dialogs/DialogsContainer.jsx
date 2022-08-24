import { onChangeMessageCreator, sendMessageCreator } from '../../redux/DialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux/es/exports';

import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
  return {
    dialogData: state.messagesPage.dialogData,
    messageData: state.messagesPage.messageData,
    newMessageText: state.messagesPage.newMessageText,
 
  }
} 



const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage:() => {dispatch(sendMessageCreator())},
    onChangeMessage: (text) => {dispatch(onChangeMessageCreator(text))}
  }
}

// let authRedirectComponent = withAuthRedirect(Dialogs)
// let authRedirectComponent =(props)=> {
//   if (!props.isAuth) {
//     return <Navigate to={'/login'}/>
//   }
//   return <Dialogs {...props} />
// }


const DialogsContainer =  compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
// connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)
export default DialogsContainer;



