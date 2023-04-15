import React, { useState } from 'react'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { sliderItems } from '../data';
// import slide1 from '../assets/eshopb5.png'
// import slide2 from '../assets/eshopb21.png'
// import slide3 from '../assets/eshopb31.png'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      const firstIdx = slideIndex === 0;
      setSlideIndex(firstIdx ? sliderItems.length - 1 : slideIndex - 1);
    } else {
      const lastIdx = slideIndex === sliderItems.length - 1;
      setSlideIndex(lastIdx ? 0 : slideIndex + 1);
    }
  };
  const styleObj = {
    transform: `translateX(${slideIndex * -100}vw)`
  } 

  return (
    
    <div className="slider">
      <div className="arrow left" onClick={() => handleClick('left')}>
        <KeyboardArrowLeftOutlinedIcon/>
      </div>
      <div className="wrapper" style={styleObj}>
        {
          sliderItems.map((item) => (
            <div className="slide" key={item.id}>
              <div className="imgContainer">
                <img className="img" alt={item.alt} src={item.img} />
              </div>
              <div className="infoContainer">
                <h1 >{item.title}</h1>
                <p >{item.desc}</p>
                <button>SHOP NOW</button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="arrow right" onClick={() => handleClick('right')}>
        <KeyboardArrowRightOutlinedIcon/>
      </div>
    </div>
  )
}

export default Slider
