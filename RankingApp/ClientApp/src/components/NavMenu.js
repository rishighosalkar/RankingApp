import React, { useContext, useEffect, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import LoginContext from './store/LoginContext';

const NavMenu =()=>{
    //static displayName = NavMenu.name;
    const [toggle, setToggle] = useState({
        collapsed: true,
    })

    const [isLogged, setIsLogged] = useState(false);
    const ctx = useContext(LoginContext);
    const { isLoggedIn } = ctx;
    useEffect(() => {
        setIsLogged(isLoggedIn);
    }, [isLoggedIn]);

    const toggleNavbar = () => {
        const temp = toggle.collapsed;
     setToggle({
      collapsed: !temp
    });
    }
        
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">RankingApp</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!toggle.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              {
                isLogged ? <NavLink tag={Link} className="text-dark" to="/">Logout</NavLink> : <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
              }
              <NavItem>
                { isLogged ? <NavLink tag={Link} className="text-dark" to="/rank-albums">Rank Albums</NavLink> : <></>}
              </NavItem>
              <NavItem>
                { isLogged ? <NavLink tag={Link} className="text-dark" to="/rank-movies">Rank Movies</NavLink> : <></>}
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }


export default NavMenu;
