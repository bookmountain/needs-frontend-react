import React, { useState, useEffect } from 'react'
function Sec4Acts(props){
    const { displayActImg, activities , selectedActivities } = props
    const isSelected = (
        <div className="sec4">
        {!selectedActivities==0 && activities.filter(activity => activity.id == selectedActivities)
                    .map((activity, index) => {
                      return (
                        <>
              <div className="activities-wrapper d-flex align-items-end m-auto">
              <img className="activities-img" src={`http://localhost:5000/img/products/${activity.image_path.split(',')[0]}`} key={index}/>
              {/* <div className="activities-img" style={{ backgroundImage : `url(${displayActImg})`}} key={index}></div> */}
                <div className="text d-flex flex-column justify-content-between my-auto">
                      <h2>{activity.title}</h2>
                      <h4>課程日期：</h4>
                      <p>{activity.specification}</p>
                      <h4>課程描述</h4>
                      <p>{activity.outline}</p>
                      <button className="activity-btn rounded">立即報名</button>
                    </div>
              </div>
            </>
                )
            }
             )
        }
            </div>

    )

    const notSelected = (
        <div className="sec4">
              <div className="activities-wrapper d-flex align-items-end m-auto">
              <div className="activities-img" style={{ backgroundImage : `url(${displayActImg})`}}></div>
              <div className="text d-flex flex-column justify-content-between my-auto">
                      <h2>請選擇活動</h2>
                      <h4>課程日期：</h4>
                      <p>0000/00/00(一)00:00~00:00</p>
                      <h4>課程描述</h4>
                      <p>優質活動快來參加優質活動快來參加優質活動快來參加優質活動快來參加</p>
                      <button className="activity-btn rounded">立即報名</button>
                    </div>
              </div>
                  
            </div>
    )

    return(
        <>
            {selectedActivities > 0 ? isSelected : notSelected}
        </>
    )
}
export default Sec4Acts