import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import LoginContext from './store/LoginContext';

class NavMenu extends Component {
    static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render() {
        let isLoggedIn = this.context;
        console.log(isLoggedIn);
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">RankingApp</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              {
                this.isLoggedIn ? <NavLink tag={Link} className="text-dark" to="/login">Logout</NavLink> : <NavLink tag={Link} className="text-dark" to="/">Login</NavLink>
              }
              <NavItem>
                 <NavLink tag={Link} className="text-dark" to="/rank-items">Rank Items</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

NavMenu.contextType = LoginContext;//LoginContext;

function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedIn
    };
}

export default NavMenu;
