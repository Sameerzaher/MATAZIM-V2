import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />
            <NavMenu>
            <NavLink to="/ProjectsScreen" activeStyle>
                    פרויקטים
                </NavLink> 
                <NavLink to="/CoursesScreen" activeStyle>
                    קורסים
                </NavLink>
                <NavLink to="/HomeScreen" activeStyle>
                    דף הבית
                </NavLink>
                <NavLink to="/Signin" activeStyle>
                    התחבר
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;