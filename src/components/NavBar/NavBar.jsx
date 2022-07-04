import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
          <div> 
          <NavLink to='/profile' className={link => link.isActive ? styles.active : styles.notActive}>Profile</NavLink>
        </div>
        <div> 
          <NavLink to='/dialogs'  className={link => link.isActive ? styles.active : styles.notActive}>Messages</NavLink>
        </div>
        <div> 
          <NavLink to='/news'  className={link => link.isActive ? styles.active : styles.notActive}>News</NavLink>
        </div>
        <div>
          <NavLink to='/music'  className={link => link.isActive ? styles.active : styles.notActive}>Music</NavLink>
        </div>
        <div> 
          <NavLink to='/settings'  className={link => link.isActive ? styles.active : styles.notActive}>Settings</NavLink>
        </div>
      </nav>
    )
}

export default NavBar;