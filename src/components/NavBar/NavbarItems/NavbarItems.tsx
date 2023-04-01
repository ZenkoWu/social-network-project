import { Menu } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { useWindowSizes } from "../../../hooks/useWindowSizes";
import './NavbarItems.css'



export const getWindowSizes = () => ({
    width: window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth,
    height: window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight,
});

export const useWindowSizes = (
    onSizesChange: () => void
): {
    width: number,  
} => {
    let {width} = getWindowSizes();

    useEffect(() => {
        window.addEventListener('resize', onSizesChange);
        return () => {
            window.removeEventListener('resize', onSizesChange);
        }
    }, [width, onSizesChange])

    return {width}
}



type TMenuItem = {
    title: string,
    key: string,
    route: string,
    isHUser?: boolean,
}

const NavbarItems = (props: { 
    children?: React.ReactNode, 
    menuConfig: TMenuItem[], 
    isMenu: boolean, 
    isNavbar:boolean
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
    
    const getMenuItems = (isModalOpen?: boolean) => (
        props.menuConfig
            .filter((item) => item.isHUser || !item.isHUser)
            .map(({title, key, route}) => (
                <NavLink 
                    to={route} 
                    key={key} 
                    className={
                        "text-decoration-none text-white rounded-3 "
                         + (!isModalOpen ? 'navbarItem p-2' : '')}
                > 
                    {  
                        isModalOpen ? 
                            <div className='p-3 px-5 text-white navbarItem'>
                                {title}
                            </div>
                            : 
                            title
                    }  
                </NavLink>
            ))
    )

    return (    
        <nav 
            className="navbar p-0 navbar-expand-lg navbar-dark"
            >
            
               { props.isMenu &&
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
                }

                { 
                    !isOpen && props.isNavbar &&
                    <div className='collapse navbar-collapse navBar ' id="navmenu">
                        {/* <div className='d-flex flex-r flex-wrap navbar-nav '> */}
                            {getMenuItems()}
                        {/* </div> */}
                    </div>
                }
        
                <Menu
                    style={{marginTop: "15px"}}
                    id="simple-menu"
                    anchorEl={anchor}
                    open={isOpen}
                    MenuListProps={{
                        className: "navbarMenu p-0"
                    }}
                    onClose={closeMenu}
                > 
                    <div className="bg-blue">
                        {getMenuItems(true)}
                        {props.children}
                    </div>
                </Menu>
        </nav>    

    )
}
export default NavbarItems;