import React from 'react';
import Progress from '../common/Progress';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';

class Main extends React.Component {

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        console.log('wrapperClass ', this.props.children);
        return (
            <div id="wrapper">
                <Navigation location={this.props.location}/>
            
                <div id="content-wrapper" className={wrapperClass}>

                    <TopHeader />
                    {this.props.children}

                </div>

            </div>

        )
    }

    componentDidMount() {

        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        // Correct height of wrapper after metisMenu animation.
        $('.main-sidebar a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 10)
        });
    }
}

export default Main