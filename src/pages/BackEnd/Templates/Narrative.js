import React, { useState, useEffect } from 'react'
import {
    Col,
    Container,
    Row
  } from 'react-bootstrap'
import './styles/Narrative.scss'


//component
import Sec1BrandInfo from './NarrativeComponent/Sec1BrandInfo'
import Sec2MainProduct from './NarrativeComponent/Sec2MainProduct'
import Sec4Acts from './NarrativeComponent/Sec4Acts'
import Sec5BrandStory from './NarrativeComponent/Sec5BrandStory'

function Narrative(props){

const { color,
       bgImg ,
       storyImg,
       products,
       activities,
       selectedProduct,
       selectedActivities,
       thisMerchantBrandInfo,
      } = props
console.log('thisMerchantBrandInfo',thisMerchantBrandInfo.brand_story)
const [ displayBgImg , setDisplayBgImg ] = useState(props.bgImg)
const [ displayStoryImg , setDisplaStoryImg ] = useState(props.storyImg)
const [ displayMainImg , setDisplaMainImg ] = useState(props.selectedProduct)
const [ displayActImg , setDisplaActImg ] = useState(props.selectedActivities)
const [displayProductId,setDisplayProductId] = useState(props.selectedProduct)

useEffect(() => {
  // handledisplay()
  // setDisplayBgImg( bgImg? upload : noUpload)
  setDisplayBgImg(props.bgImg)
  setDisplaStoryImg(props.storyImg)
  // setDisplaMainImg(props.selectedProduct)
  // findProduct()

},[props.bgImg , props.storyImg , props.selectedProduct])


useEffect(() => {
  setDisplayBgImg('/static/media/default-background.35858da7.png')
  setDisplaStoryImg('/static/media/default-img.54333d00.png')
  setDisplaMainImg('/static/media/default-img.54333d00.png')
  setDisplaActImg('/static/media/default-img.54333d00.png')
},[])


// console.log(props)
//   let upload = {
//     backgroundImage: `url('http://localhost:5000/BackgroundImg/${props.bgImg}')`
//   }
//   let noUpload = {
//     backgroundImage: `url('http://localhost:5000/BackgroundImg/4ba827cb-a7ea-45f4-8849-28f919659d04.jpeg')`
//   }
  // var ifBgImg = displayBgImg ? {upload} : {noUpload}
  
return(
        <>
          <div className="Narrative">
        
            <Sec1BrandInfo 
              displayBgImg={displayBgImg}
              thisMerchantBrandInfo={thisMerchantBrandInfo}
              color={color}
            />

            <Sec2MainProduct
              displayMainImg = {displayMainImg}
              products = {products}
              selectedProduct={selectedProduct}
              /> 

            <Sec4Acts
              selectedActivities={selectedActivities}
              activities={activities}
              displayActImg={displayActImg}
            />

            <Sec5BrandStory
              displayStoryImg={displayStoryImg}
              thisMerchantBrandInfo={thisMerchantBrandInfo}
            />
            
          </div>
        </>
 )
}
export default Narrative


// let noUpload = './images/default-background.png'

// const handledisplay = () => {
//   // let upload = {
//   //   backgroundImage: `url(${props.bgImg})`
//   // }
//   // let noUpload = {
//   //   backgroundImage: `url('http://localhost:5000/BackgroundImg/4ba827cb-a7ea-45f4-8849-28f919659d04.jpeg')`
//   // }

//   // let upload = ${props.bgImg}
//   // let noUpload = 'http://localhost:5000/BackgroundImg/4ba827cb-a7ea-45f4-8849-28f919659d04.jpeg'
//   // const displayStyle ={}
//   // (props.bgImg) ? props.bgImg : noUpload

//   if(props.bgImg) return displayBgImg
//   else return noUpload
// }