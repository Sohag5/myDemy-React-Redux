import React from 'react';
import bgImage from './images/header2.jpg';


import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';



export default function SliderB() {

    return (
        
        <div>
            <section className="slider" style={{backgroundImage: `url(${bgImage})`}} >
            <Slider animateIn autoplay infinite duration='8000' previousButton='' nextButton=''>

	             <div>
		          <h2 className="slide-title">Education is the best provision for old age.</h2>
		           <div className="slide-text">Attitude is more important than the past, than education, 
                   than money, than circumstances, than what people do or say. It is more important than appearance,
                    giftedness, or skill.</div>
	             </div>

	             <div>
		          <h2 className="slide-title">A woman who is denied an education is denied equality.</h2>
		           <div className="slide-text">
                       Attitude is more important than the past,
                    than education, than money, than circumstances, than what people do or say.
                     It is more important than appearance, giftedness, or skill.
                     </div>
                     </div>

	             <div>
		          <h2 className="slide-title">Education is the best provision for old age.</h2>
		           <div className="slide-text">Attitude is more important than the past, than education, than money, than circumstances, than what people do or say. It is more important than appearance, giftedness, or skill.</div>
	             </div>

            </Slider>
            </section>
        </div>
    )
}
