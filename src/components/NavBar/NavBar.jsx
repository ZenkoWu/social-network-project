import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'
import NavbarItems from './NavbarItems/NavbarItems.tsx';
import { useEffect, useState } from 'react';

const NavBar = () => {

  const menuItems = [
    {
      route: '/profile',
      title:'profile',
      key: '1',

    
    }
  ]
  const getWindowSizes = () => ({
    width: window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth,
    height: window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight,
});

const [width, setWidth] = useState(window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth)

  useEffect(()=> {
    console.log(width)
  }, [width])

  window.addEventListener('resize', ()=> setWidth(window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth))
  

    return (
      <div className= {width > 990 ? ' col-3 ': ''}
      >
        <NavbarItems menuConfig={menuItems} isMenu={false} isNavbar={true}/>
      </div>
      //   <nav className={styles.navBar}>
      //     <div> 
      //     <NavLink to='/profile' className={link => link.isActive ? styles.active : styles.notActive}>Profile</NavLink>
      //   </div>
      //   <div> 
      //     <NavLink to='/dialogs'  className={link => link.isActive ? styles.active : styles.notActive}>Messages</NavLink>
      //   </div>
      //   <div> 
      //     <NavLink to='/news'  className={link => link.isActive ? styles.active : styles.notActive}>News</NavLink>
      //   </div>
      //   <div>
      //     <NavLink to='/music'  className={link => link.isActive ? styles.active : styles.notActive}>Music</NavLink>
      //   </div>
      //   <div> 
      //     <NavLink to='/settings'  className={link => link.isActive ? styles.active : styles.notActive}>Settings</NavLink>
      //   </div>
      //   <div> 
      //     <NavLink to='/findUsers'  className={link => link.isActive ? styles.active : styles.notActive}>Find users</NavLink>
      //   </div>
      //   <div> 
      //     <NavLink to='/games'  className={link => link.isActive ? styles.active : styles.notActive}>Little Games</NavLink>
      //   </div>
      //   <div> 
      //     <NavLink to='/food' className={link => link.isActive ? styles.active : styles.notActive}>Food</NavLink>
      //   </div>
        
      // </nav>
    )
}

export default NavBar;