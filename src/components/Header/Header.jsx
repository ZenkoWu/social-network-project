import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../img/2319663.png'
import { menuItems } from '../../constans/constans';
import BurgerMenu from '../BurgerMenu/BurgerMenu.tsx';

const Header = (props) => {
    return (
        <div className={
            (styles.header) + ' d-flex'
        }> 
        <div className='d-flex'>
            <NavLink to='/profile'> 
                <img 
                    src={logo} 
                    style={{width: '40px', margin: '5px', backgroundColor: 'rgb(233 114 82)'}}
                />
            </NavLink>

            <BurgerMenu menuConfig={menuItems}/>

        </div>
            <div className={styles.loginBlock}>
                {
                    props.isAuth ? 
                    props.login 
                    : 
                    <NavLink
                        to='/login' 
                        className='text-white text-decoration-none'
                    >
                        {'Login'}
                    </NavLink>
                }
            </div>
        </div>
 )
}


export default Header;