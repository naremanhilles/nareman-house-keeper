import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './style.css';
// import fimg from './fimg.png';
import s1 from './s1.jpg';
import s2 from './s2.jpg';
import s3 from './s3.jpg';


export default class Slider extends React.Component {
  render() {
    return (
      <div className="landing-slider-container">
        <Carousel autoplay>

          <div className="slide" key="slider-2">
            <div className="slide-img">
              <img src={s1} alt="" width="100%" height="150px;" />
            </div>
            <div>
              <h3>

                هل تعبتي من البحث عن مدبرة منزل امينة و جديرة بالثقة؟
            </h3>
            </div>
          </div>
          <div className="slide" key="slider-3">
            <div className="slide-img">
              <img src={s2} alt="" width="100%" height="150px;" />
            </div>
            <div>
              <h3>
                نحن نضمن لك خدمة التنظيف الممتازة بالجودة و الوقت و السعر الافضل
              </h3>
            </div>
          </div>
          <div className="slide" key="slider-4">
            <div className="slide-img">
              <img src={s3} alt="" width="100%" height="150px;" />
            </div>
            <div>
              <h3>
                كوني قريبة اكثر من نفسك و عائلتك و استغلي وقتك الثمين احجزي الان
              </h3>
            </div>
          </div>
        </Carousel>

      </div>
    );
  }
}
