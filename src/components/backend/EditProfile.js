import React, { Fragment } from 'react'

export default function EditProfile() {
    return (
        <Fragment>
       <div className="profile-dashboard">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
               <li className="breadcrumb-item">
                <a href="#">Home</a>
               </li>
                <li className="breadcrumb-item">
                 <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Edit Profile
                </li>
            </ol>
        </nav>
        <div className="row row-pad">
          <div className="col-md-4">
            <label>First Name</label>
            <input className="form-control form-control-sm " type="text" placeholder="First Name" />
          </div>
          <div className="col-md-4">
            <label>Last Name</label>
            <input className="form-control form-control-sm " type="text" placeholder="Last Name" />
          </div>
          <div className="col-md-4">
            <label>First Name</label>
            <input className="form-control form-control-sm " type="text" placeholder=".form-control-sm" />
          </div>



        </div>
        </div>
        </Fragment>
    )
}
