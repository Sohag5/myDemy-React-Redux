import React, { Component } from 'react';
import bgImageLogin from './images/4.jpg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {UserLogin,resetAuthResponsePerComponent} from '../../store/actions/AuthAction'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
          email:'',
          password:''
        }
      }
    
     componentDidMount = () =>
     {
       this.props.resetAuthResponsePerComponent();
     }
    
       handleSubmit = (e)=>{
       e.preventDefault();
       console.log('ready to log a user in')
       console.log(this.state)
       this.props.UserLogin(this.state,this.props.history)
       }
    
       handleChange = (e) =>{
         e.preventDefault();
         this.setState({
          [e.target.name] :e.target.value
        })
       }

    render() {
		const {authResponse}= this.props;
		const {loading}= this.props;

		const spinner = (
		<div className="form-group">
         <button className="btn float-right login_btn" style={{cursor:"wait"}}>
		 <i className="fa fa-spinner fa-spin"></i>
            Loading..
         </button>
		 </div>
		)

       const submit =(
		<div className="form-group">
		<input type="submit" value="Login" className="btn float-right login_btn" />
		</div>
	   )

	  const submitBtn = loading ? spinner : submit;
	  
	  const successMsg = authResponse ? authResponse : ' ';

        return (
            
<section className="loginfrom" style={{backgroundImage: `url(${bgImageLogin})`}}>
	<div className="bg">
		<div className="container " >
			<div className="row">
				<div className="col-md-5">
					<div className="d-flex justify-content-center h-100 mr-t-20">
						<div className="card">
							<div className="card-header">
								<h3>Sign In</h3>
							</div>
		                     <p className="success-msg">{successMsg}</p>
							<div className="card-body">
								<form onSubmit={this.handleSubmit}>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-user"></i>
											</span>
										</div>
										<input type="text" name="email" onChange = {this.handleChange} className="form-control" placeholder="Email" />
									</div>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-key"></i>
											</span>
										</div>
										<input type="password" name="password" onChange = {this.handleChange} className="form-control" placeholder="password" />
									</div>
									<div className="row align-items-center remember">
										{/* <input type="checkbox" />Remember Me */}
					
									</div>
									
										{submitBtn}
									
								</form>
							</div>
							<div className="card-footer">
								<div className="d-flex justify-content-center links">
					Don't have an account?
									<NavLink  to="/register" className="text-white">Sign Up</NavLink>
								</div>
								<div className="d-flex justify-content-center">
									<a href="#" className="text-white">Forgot your password?</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-7 welcome">
					<h4>Welcome To </h4>
					<h3>myDemy</h3>
					<span>Our team is very happy to have you with us.</span>
				</div>
			</div>
		</div>
	</div>
</section>
        );
    }
}

const mapStateToProps = (state) =>{
    // console.log(state);
    return {
      authResponse:state.AuthReducer.authResponse,
      loading:state.AuthReducer.loading
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
      UserLogin:(creds,history) => dispatch(UserLogin(creds,history)),
      resetAuthResponsePerComponent:() =>dispatch(resetAuthResponsePerComponent()),
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login)