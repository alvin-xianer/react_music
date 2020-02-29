import React from 'react';
import Slider from '../../componentsUI/slider/index';
import RecommendList from '../../componentsUI/List/index';
function Recommend (props) {
  const bannerList = [1,2,3,4].map (item => {
    return { imageUrl: "http://p1.music.126.net/uNgTGEASDOuSV5_XdE2VQw==/109951164753628582.jpg?imageView&quality=89" }
  });
  const recommendList = [1,2,3,4,5,6,7,8,9,10].map(item => {
    return {
      id: 1,
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171000,
      name: "林俊杰、周杰伦、谢霆锋、容祖儿"
    }
  }) 
  return (
    <div>
      <Slider bannerList={ bannerList }></Slider>
      <RecommendList recommendList={ recommendList }></RecommendList>
    </div>
  )
}

export default React.memo (Recommend);