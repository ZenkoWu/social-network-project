import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../img/2319663.png'

const Header = (props) => {
    return (
      <div className={styles.header}> 
        <img src={logo} style={{width: '40px', margin: '5px', backgroundColor: 'rgb(233 114 82)'}}/>
        <div className={styles.loginBlock}>
          {props.isAuth ? props.login:  <NavLink to='/prof' >Sign in</NavLink>
          }
          </div>
  
     
       
    
</div>
 )
}


export default Header;