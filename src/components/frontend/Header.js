import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {signUp,resetAuthResponsePerComponent} from '../../store/actions/AuthAction';
import { withRouter } from 'react-router-dom';


class Header extends Component {




  componentDidMount = () =>
  {
    console.log('dja');
    console.log(this.props);
  }
    render() {
        const {authResponse} = this.props;
        // console.log(this.props.history);

        const logOut = ()=>{
          localStorage.removeItem('user');
          this.props.history.push('/');
        }


        const loginRegLink = (
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink></li>

          <li className="nav-item"><NavLink className="nav-link" to="/login">Login  </NavLink> </li>
          <li className="nav-item"><NavLink className="nav-link" to="/register">Regiter  </NavLink> </li>
          </ul>
         )

         const authUrl = (
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/dashboard">Profile  </NavLink> </li>
          <li className="nav-item"><a className="nav-link" onClick={logOut}>Logout  </a> </li>
          </ul>
         )

        const authMenu = localStorage.getItem('user') ? authUrl : loginRegLink;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand"  to="/">

                 myDemy
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

               {authMenu}

            </div>
          </nav>
        );
    }
}

const mapStateToProps = (state,history) =>{
  return {
    authResponse:state.AuthReducer.authResponse,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signUp:(creds) => dispatch(signUp(creds)),
    resetAuthResponsePerComponent:() =>dispatch(resetAuthResponsePerComponent())

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header))