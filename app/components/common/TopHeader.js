import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';

class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("sidebar-collapse");
        smoothlyMenu();
    }

    render() {
        return (
            <header className="main-header">
                <a href="index2.html" className="logo">
                <span className="logo-mini"><b>A</b>LT</span>
                <span className="logo-lg"><b>Admin</b>React</span>
                </a>
                <nav className="navbar navbar-static-top">
                <a href="#" onClick={this.toggleNavigation} className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                </nav>
            </header>
        )
    }
}

export default TopHeader