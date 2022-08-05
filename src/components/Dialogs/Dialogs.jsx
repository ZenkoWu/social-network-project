import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './MessageOfUser/Message';
import { useRef } from 'react';



const Dialogs = (props) => {
 
  let dialogElements = props.dialogData.map(item => <DialogItem userName = {item.userName} id ={item.id} key = {item.id} avatar = {item.avatar}/> )

  let messageElements = props.messageData.map(item => <Message text = {item.text} id ={item.id} key = {item.id}/>)

  let newMessageElement = useRef()

  let sendMessage = function () {
    props.onSendMessage()
  }  

  let onChangeMessage = function() {
    let text = newMessageElement.current.value
    props.onChangeMessage(text)
  }




  return (
  
    <div className= {styles.dialogs}>
      <div className= {styles.dialogItems}>
        {dialogElements}
      </div>
      <div className={styles.messages}>
        {messageElements}
        <div><textarea placeholder='Enter text...' ref={newMessageElement} onChange={onChangeMessage} value={props.newMessageText} className={styles.textarea}/></div>
        <div><button onClick={sendMessage}>Send message</button></div>
      </div>
      
    </div>
  )
}

export default Dialogs;



{/* <div className= {styles.dialogs}>
<div className= {styles.dialogItems}>
  <DialogItem userName = 'Ilya' id ='1'/>
  <DialogItem userName = 'Sasha' id ='2'/>
  <DialogItem userName = 'Masha' id ='3'/>
  <DialogItem userName = 'Victor' id ='4'/>
  <DialogItem userName = 'Gabri' id ='5'/>
  <DialogItem userName = 'Ivan' id ='6'/>
</div>
<div className={styles.messages}>
  <Message text = 'Hello'/>
  <Message text = 'How are u?'/>
  <Message text = 'I wanna see u'/>
  <Message text = "Let's meet tomorrow"/>
  <Message text = 'I miss u too'/>
</div>
</div> */}



 {/* <DialogItem userName = {dialogData[0].userName} id ={dialogData[0].id}/>
        <DialogItem userName = {dialogData[1].userName} id ={dialogData[1].id}/>
        <DialogItem userName = {dialogData[2].userName} id ={dialogData[2].id}/>
        <DialogItem userName = {dialogData[3].userName} id ={dialogData[3].id}/>
        <DialogItem userName = {dialogData[4].userName} id ={dialogData[4].id}/>
        <DialogItem userName = {dialogData[5].userName} id ={dialogData[5].id}/> */}

          {/* <Message text = {messageData[0].text} id ={messageData[0].id}/>
       <Message text = {messageData[1].text} id ={messageData[1].id}/>
       <Message text = {messageData[2].text} id ={messageData[2].id}/>
       <Message text = {messageData[3].text} id ={messageData[3].id}/>
       <Message text = {messageData[4].text} id ={messageData[4].id}/>
       <Message text = {messageData[5].text} id ={messageData[5].id}/> */}