import React, { useState, useEffect } from 'react'
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Container } from 'react-bootstrap'

function Sec4Activities(props){
  const { mainActivitiesId , activities } = props
    return(
      
        <div className="sec4">
        <Container>
      { mainActivitiesId>0 && activities.filter(activity => activity.id == mainActivitiesId)
                  .map((activity, index) => {
                    return (
                      <>
                      <ScrollParallax 
                            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.8] }}
                            style={{ transform: 'translateY(-30px)', opacity: 0 }}
                            always={false}
                            duration={1000}
                            > 
            <div className="activities-wrapper d-flex align-items-end m-auto">
            <img className="activities-img d-flex align-items-center m-auto" src={`http://localhost:5000/img/products/${activity.image_path.split(',')[0]}`} key={index}/>
           
              <div className="text d-flex flex-column justify-content-between my-auto">
                    <h2>{activity.title}</h2>
                    <h4>課程日期：</h4>
                    <p>2020/11/24(二)14:00~16:00</p>
                    <h4>課程描述</h4>
                    <p>{activity.outline}</p>
                    <button className="activity-btn rounded">立即報名</button>
                  </div>
            </div>
            </ScrollParallax>
          </>
              )
          }
           )
      }
      </Container>
          </div>
      
    )
}
export default Sec4Activities