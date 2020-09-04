import React from 'react'


export default function Footer() {
    return (
       <section id="footer">
           <div className="container">
           <div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a ><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a ><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a ><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a ><i className="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a  target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr />
			</div>
               <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white footer-menu">
               <p>
                   <a >Home <span>|</span></a>
                   <a >About <span>|</span></a>
                   <a >Privacy policy <span>|</span></a>
                   <a >Terms use condition <span>|</span></a>
                   <a >Faq</a>
               </p>
					<p className="h6 copyright">© All right Reversed.<a className="text-green ml-2" target="_blank">Sohag</a></p>
               </div>
               </div>

           </div>
       </section>
    )
}
