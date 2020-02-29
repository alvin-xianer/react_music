import React, { useEffect, useState } from 'react';
import { SliderDiv } from './style';
import "swiper/css/swiper.css";
import Swiper from "swiper";
function SliderComponents (props) {
    const [ sliderSwiper, setSliderSwiper] = useState(null);
    const { bannerList } = props;
    useEffect (() => {
        if (bannerList.length && !sliderSwiper){
            let sliderSwiper = new Swiper(".slider-container", {
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
              pagination: {el:'.swiper-pagination'},
            });
            setSliderSwiper(sliderSwiper);
        }
      }, [bannerList.length, sliderSwiper]);
      return (
        <SliderDiv>
          <div className="slider-container">
            <div className="swiper-wrapper">
              {
                bannerList.map ((slider, index) => {
                  return (
                    <div className="swiper-slide" key={ index }>
                      <div className="slider-nav">
                        <img src={slider.imageUrl} width="100%" height="100%" alt="轮播" />
                      </div>
                    </div>
                  );
                })
              }
            </div>
            <div className="swiper-pagination"></div>
          </div> 
          <div className="before"></div>
        </SliderDiv>
      );
}
export default React.memo(SliderComponents)