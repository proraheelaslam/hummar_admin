import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                <b>Version</b> 0.0.1
                </div>
                <strong>Copyright ALC &copy; 2014-2017 <a href="https://adminlte.io">Anthony Lagrede Consulting</a>.</strong> All rights
                reserved.
            </footer>
        )
    }
}

export default Footer