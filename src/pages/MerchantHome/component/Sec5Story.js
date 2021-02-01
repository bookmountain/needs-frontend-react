import React, { useState, useEffect } from 'react'
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Container } from 'react-bootstrap'

function Sec5Story(props){
    const { displayStoryImg , thisMerchantBrandInfo } = props
    let StoryHTML = ''
    return(
        <> 
        <Container>
        <div className="sec5 py-5">
            {[thisMerchantBrandInfo].map((merchantInfos,i)=>
          (
            <div className="m-auto">
            <div className=" underline-wrapper">

            <div className="underline ml-5">
            <h2>品牌故事</h2>
            </div>
            </div>
            
            <div className="d-flex adjust">
           
            {/* <div className="brandStory_img" style={{ backgroundImage : `url(${displayStoryImg})`}}></div> */}
            {merchantInfos.brandStory_img ? (
              <img
                className="brandStory_img"
                src={`http://localhost:5000/BrandStoryImg/${merchantInfos.brandStory_img}`}
                alt=""
              />
            ) : (
              ''
            )}
         
            {/* http://localhost:5000/BrandStoryImg/ */}
            <ScrollParallax 
                            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.8] }}
                            style={{ transform: 'translateX(100px)', opacity: 0 }}
                            always={false}
                            duration={1000}
                            > 
            <div 
                className=" text-wrapper ml-5 px-5"
                dangerouslySetInnerHTML={{ __html: merchantInfos.brand_story}}
                >
            
            </div>
            </ScrollParallax>
            </div>
     
            </div>
            )
                )}  
            </div>
        </Container>
           
        </>
    )
}
export default Sec5Story