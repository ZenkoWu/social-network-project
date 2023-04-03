import { Menu } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './BurgerMenu.css'
import  useWindowSizes  from "../../hooks/useWindowSizes";


type TMenuItem = {
    title: string,
    key: string,
    route: string,
    isHUser?: boolean,
}


const BurgerMenu = (props: { 
    children?: React.ReactNode, 
    menuConfig: TMenuItem[], 
}) => {
    
    const [anchor, setAnchor] = useState<Element | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const closeMenu = useCallback(
        () => { 
            setIsOpen(false) 
        }, [setIsOpen]
    );
    useWindowSizes(closeMenu);

    const openMenu = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            setAnchor(e.currentTarget)
            setIsOpen(prev => !prev) 
    }, [anchor, isOpen])
    

    return (    
        <nav 
            className="navbar p-0 navbar-expand-lg navbar-dark"
            >
            
               
                    <button
                        className="navbar-toggler button"
                        aria-controls="simple-menu" aria-haspopup="true"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                        onClick={openMenu}
                    >
                        <span className="navbar-toggler-icon btn text-secondary"/>
                    </button>
                
        
                <Menu
                    style={{marginTop: "15px"}}
                    id="simple-menu"
                    anchorEl={anchor}
                    open={isOpen}
                    MenuListProps={{
                        className: "  navbarMenu  p-0"
                    }}
                    onClose={closeMenu}
                > 
                    <div className="bg-blue p-0 m-0">
                        {
                            props.menuConfig
                            .map(({title, key, route}) => (
                                    <NavLink 
                                        to={route} 
                                        key={key} 
                                        className={
                                            link => link.isActive ? ' fw-bold ' : ' text-white '
                                        }
                                    > 
                                        {  
                                            <div className='p-3 px-5 navbarItem fs-5'
                                            //  onClick={closeMenu}
                                             >
                                                {title}
                                            </div>
                                        }  
                                    </NavLink>
                            ))
                        }
                    </div>
                </Menu>
        </nav>    

    )
}
export default BurgerMenu;