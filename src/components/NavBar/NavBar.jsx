import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'
import { useEffect, useState } from 'react';
import { getWindowSizes } from '../../hooks/useWindowSizes';
import { menuItems } from '../../constans/constans';

const NavBar = () => {

const [width, setWidth] = useState(getWindowSizes().width)

//   useEffect(()=> {
//     console.log(width)
//   }, [width])

  window.addEventListener('resize', ()=> setWidth(()=> getWindowSizes().width ))
  
    return (
        <div className={width > 990 ? 'col-2 p-0': 'd-none'}>
            <nav className={styles.navBar}>
                {
                    menuItems.map(item => (
                        <div key={item.key}> 
                            <NavLink 
                                to={item.route} 
                                className={(link => link.isActive ? styles.active : styles.notActive)}
                            >
                                <div className='fs-5'>
                                    {item.title}
                                </div>
                            </NavLink>
                        </div>
                    ))    
                }
            </nav>
      </div>
    )
}

export default NavBar;