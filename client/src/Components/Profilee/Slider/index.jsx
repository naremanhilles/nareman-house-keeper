import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './style.css';
import s1 from './s1.jpg';
import s2 from './s2.jpg';


export default class Slider extends React.Component {
  render() {
    return (
      <div className="home-slider-container">
        <Carousel autoplay>
          <div className="slide" key="slider-2">
            <div className="slide-img">
              <img src={s1} alt="" width="100%" height="150px;" />
            </div>
            <div>
              <h3>

                فُل هو مساعدك الشخصي في كل مهام التنظيف اليومية.
                </h3>
            </div>
          </div>
          <div className="slide" key="slider-3">
            <div className="slide-img">
              <img src={s2} alt="" width="100%" height="150px;" />
            </div>
            <div>
              <h3>
                تنظيف بيتي روتيني أم تنظيف بيتي عميق
  نحن جاهزون دائماً لجميع التحديات
              </h3>
            </div>
          </div>

        </Carousel>
      </div>
    );
  }
}
