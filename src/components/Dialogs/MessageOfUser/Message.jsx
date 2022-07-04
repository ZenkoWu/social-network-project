import styles from './../Dialogs.module.css'
import { useRef } from 'react';
const Message = (props) => {


  let addMessage = useRef()
  
  let nwF = function () {
    let message = addMessage.current.value
    alert(message)
  }
  
  
    return (
      <div>
        <div className={styles.textOfMessage}>{props.text}</div>
        <textarea ref={addMessage}></textarea>
        <button onClick={nwF}>Send</button>
      </div>
      
      
    );
  }

  export default Message;