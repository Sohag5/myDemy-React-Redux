import React, { Component } from 'react';
import bgImageLogin from './images/4.jpg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {signUp,resetAuthResponsePerComponent} from '../../store/actions/AuthAction';


class Register extends Component {

    constructor(props)
    {
      super(props)
     this.state ={
       email:'',
       first_name:'',
       last_name:'',
       password:'',
       role:'',
       phone:'',
     }
    }
   
    componentDidMount = () =>
    {
     this.props.resetAuthResponsePerComponent();
    }
   
    
   
     handleSubmit = (e) =>{
       e.preventDefault();
       console.log("submit button has been clicked")
       console.log(this.state);
       this.props.signUp(this.state);
     }
   
   
     handleChange = (e) =>{
       this.setState({
         [e.target.name] :e.target.value
       })
     }




    render() {
		const {authResponse}= this.props;

		const {loading}= this.props;
		const {validation}= this.props;



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
		<input type="submit" value="Sign Up" className="btn float-right login_btn" />
		</div>
	   )

	  const submitBtn = loading ? spinner : submit;
	  
	  const successMsg = authResponse ? authResponse : ' ';

        return (
                  
<section className="loginfrom register" style={{backgroundImage: `url(${bgImageLogin})`}}>
	<div className="bg">
		<div className="container " >
			<div className="row">
				<div className="col-md-5">
					<div className="d-flex justify-content-center h-100 mr-t-20">
						<div className="card reg-card">
							<div className="card-header">
								<h3>Sign Up</h3>
							</div>
							<p className="success-msg">{successMsg}</p>
							<div className="card-body">
								<form  onSubmit={this.handleSubmit}>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-user"></i>
											</span>
										</div>
										<input type="text" className="form-control" name="first_name" onChange={this.handleChange} placeholder="First Name" />
									</div>
									<span className="text-danger">{validation.first_name}</span>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-user"></i>
											</span>
										</div>
										<input type="text" name="last_name"  onChange={this.handleChange} className="form-control" placeholder="Last Name" />
		                                
									</div>
									<span className="text-danger">{validation.last_name}</span>
                                    <div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-envelope"></i>
											</span>
										</div>
										<input type="text" name="email"  onChange={this.handleChange} className="form-control" placeholder="Email" />
									</div>
									<span className="text-danger">{validation.email}</span>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-phone"></i>
											</span>
										</div>
										<input type="text" name="phone"  onChange={this.handleChange} className="form-control" placeholder="Phone" />
									</div>
									<span className="text-danger">{validation.phone}</span>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-key"></i>
											</span>
										</div>
										<input type="password" name="password"  onChange={this.handleChange} className="form-control" placeholder="password" />
									</div>
									<span className="text-danger">{validation.password}</span>
									<div className="row align-items-center remember pd-lr-15">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="role"  onChange={this.handleChange} id="inlineRadio1" value="2" />
                                        <label className="form-check-label" >Teacher</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="role"  onChange={this.handleChange} id="inlineRadio2" value="3" />
                                        <label className="form-check-label" >Student</label>
                                    </div>
									<span className="text-danger">{validation.role}</span>
									</div>
									{submitBtn}
								</form>
							</div>
							<div className="card-footer">
								<div className="d-flex justify-content-center links">
					               Already have an account ?
									<NavLink  to="/login" className="text-white">Sign In</NavLink>
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
    console.log(state.auth);
    return {
        
      authResponse:state.AuthReducer.authResponse,
      validation:state.AuthReducer.validation,
      loading:state.AuthReducer.loading
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
      signUp:(creds) => dispatch(signUp(creds)),
      resetAuthResponsePerComponent:() =>dispatch(resetAuthResponsePerComponent())
  
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Register)