import React from 'react';
import Slider from '../../componentsUI/slider/index';
function Recommend (props) {
  const bannerList = [1,2,3,4].map (item => {
    return { imageUrl: "http://p1.music.126.net/uNgTGEASDOuSV5_XdE2VQw==/109951164753628582.jpg?imageView&quality=89" }
  });
  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
    </div>
  )
}

export default React.memo (Recommend);