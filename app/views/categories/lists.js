/* global Plotly */
import React, {Component} from 'react';
import webApi from "../../common/tools/WebApi";
import PropTypes from "prop-types";


class Lists extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    static contextTypes = {
        router: PropTypes.object
    };


    componentDidMount() {
    }


    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        {this.props.route.title}
                        <small>Categories</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><button   className="btn btn-block btn-primary">Create</button></li>

                    </ol>
                </section>

                <section className="content">

                    <div className="box">
                        <div className="box-header with-border">
                            <h3  className="box-title">Categories</h3>
                        </div>

                        <div className="box-body">
                            <table className="table table-bordered">
                                <tbody>
                                <tr>
                                    <th >Name</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>Mobile</td>

                                    <td><a href="javascript:void(0)"><i className="fa fa-fw fa-pencil-square-o"></i></a> </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="box-footer clearfix">
                            <ul className="pagination pagination-sm no-margin pull-right">
                                <li><a href="javascript:void(0)">«</a></li>
                                <li><a href="javascript:void(0)">1</a></li>
                                <li><a href="javascript:void(0)">2</a></li>
                                <li><a href="javascript:void(0)">3</a></li>
                                <li><a href="javascript:void(0)">»</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Lists;

