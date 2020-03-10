import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {

        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                    <p>Alexander Pierce</p>
                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                <ul className="sidebar-menu" data-widget="tree" ref="menu">


                    <li className={this.activeRoute("/dashboard")}>
                        <Link to="/dashboard">
                            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                            <span className="pull-right-container">
                            </span>
                        </Link>
                    </li>
                    <li className={this.activeRoute("/categories")}>
                        <Link to="/categories">
                            <i className="fa fa-circle-o"></i> <span>Categories</span>

                        </Link>
                    </li>
                    <li className={this.activeRoute("/users")}>
                        <Link to="/users">
                            <i className="fa fa-circle-o"></i> <span>Users</span>

                        </Link>
                    </li>
                </ul>
                </section>
            </aside>
        )
    }
}

export default Navigation;