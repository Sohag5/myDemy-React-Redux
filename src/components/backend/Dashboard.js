import React, { Component } from "react";

import {PrivateRoute} from '../../components/PrivateRoute';
import { connect } from 'react-redux'
import {UserLogin,resetAuthResponsePerComponent} from '../../store/actions/AuthAction'
import {Switch,Route,NavLink} from 'react-router-dom'
import Course from './Course'
import EditProfile from './EditProfile'
import Sidebar from "./Sidebar";
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (
      <section className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-3 profile-sidebar">
              <Sidebar  />
            </div>
            <div className="col-md-9">
            <Switch>
              <Route exact path="/dashboard" component={Course} />
              <Route  path="/dashboard/edit-profile"  component={EditProfile} />
            </Switch>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const mapStateToProps = (state) =>{
    console.log(state);
    return {
      authResponse:state.AuthReducer.authResponse
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
      UserLogin:(creds,history) => dispatch(UserLogin(creds,history)),
      resetAuthResponsePerComponent:() =>dispatch(resetAuthResponsePerComponent()),
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Dashboard))