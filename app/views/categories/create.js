import React , { Component } from 'react';
import { Col, Row, Form } from 'react-bootstrap';

import PropTypes from 'prop-types'



class Create extends Component{

    state = {
        category_name: ''
    };

    handleNameChange = (event) => {
        this.setState({
            category_name:event.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            category_name:this.state.category_name
        });
        let path = `/categories`;
        this.props.history.push(path);
        console.log("name : ", this.props.history);
        console.log("name : ", this.state.category_name);
    };

    render() {

        return(
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Create
                    </h1>

                </section>
                <section className="content">
                    <div className="box box-info">
                        <div className="box-header with-border">
                            <h3 className="box-title">Horizontal Form</h3>
                        </div>
                        <form className="form-horizontal">
                            <div className="box-body col-md-offset-1">
                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Name</label>
                                    {this.state.category_name}
                                    <div className="col-sm-8">
                                        <input name="name" onChange={this.handleNameChange} type="text" className="form-control"  placeholder="Name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer ">
                                <div className="row">
                                    <div className=" col-md-4 col-md-offset-5 ">
                                        <div className="btn-toolbar">
                                                <button type="button" className="btn btn-info " onClick={(e)=>{this.onSubmit(e)}}>Save</button>
                                                <button type="button" className="btn btn-default">Cancel</button>


                                        </div>

                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Create;
