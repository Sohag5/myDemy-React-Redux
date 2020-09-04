import React, { Fragment } from 'react'
import {Switch,Route,NavLink} from 'react-router-dom'
import profileImg from "../frontend/images/man1.png";
import { withRouter } from 'react-router-dom';
 function Sidebar(props) {

    const callMenu = (menu) => {
        switch(menu){
          case  'Dashboard':
            props.history.push('/dashboard');
            break;
          case  'Edit Profile':
            props.history.push('/dashboard/edit-profile');
            break;
          default:
            break;  
        }
      }


const data =(
    <ul>
        {['Dashboard','Edit Profile'].map((menu) =>(
      <li>
          <a onClick={()=>{callMenu(menu)}} className="nav-dashboard">{menu}</a>
      </li>
        ))}
    </ul>
   )

    return (
        <Fragment>
            <div className="profile-header">
                <img src={profileImg} className="img-respnsive" />
              </div>
              <div className="profile-menu">
                <h3 className="title">Jhon Smith</h3>
                <p className="designation">Asst. Teacher</p>
                <div className="social-icon">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-google"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-youtube"></i>
                </div>
                <div className="profile-menu-style">
                  {data}
                </div>
              </div>
        </Fragment>
    )
}
export default withRouter(Sidebar)