import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';
import Image from 'react-image-resizer';
import gif_garo from './gif_garo.gif';

export default function ImageCarousel() {
  
  const style = {
    image: {
        top: '15px',
        left: '25px',
    },
  }

  return (
    <div className="content-box">
      <ReactCSSTransitionGroup
        transitionName="carousel"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Image 
          src={gif_garo} 
          height={270}
          width={300}
          style={style.image}
       />
      </ReactCSSTransitionGroup>
    </div>
  );
}