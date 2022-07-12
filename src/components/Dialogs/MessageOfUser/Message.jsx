import styles from './../Dialogs.module.css'
import { useRef } from 'react';
const Message = (props) => {
    return (
      <div>
        <div className={styles.textOfMessage}>{props.text}</div>
      </div>
      
      
    );
  }

  export default Message;