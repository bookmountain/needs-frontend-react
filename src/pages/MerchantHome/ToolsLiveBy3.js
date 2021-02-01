import React, { useState, useEffect } from 'react'
import {
    Col,
    Container,
    Row
  } from 'react-bootstrap'
import '../BackEnd/Templates/styles/Narrative.scss'

import axios from 'axios'
import { GiPositionMarker } from 'react-icons/gi';
import { AiTwotoneShop,AiTwotonePhone } from "react-icons/ai";

import { css } from "@emotion/core";
import RiseLoader from "react-spinners/DotLoader";

//components
import Sec1Info from './component/Sec1Info'
import Sec2MainPro from './component/Sec2MainPro'
import Sec3ProductList from './component/Sec3ProductList'
import Sec4Activities from './component/Sec4Activities'
import Sec5Story from './component/Sec5Story'

const Pommedepin111 = (props) =>{
  const [error,setError] = useState(null)
  const [posts, setPosts] = useState([])

  //set page
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  //set Merchantpage_info
  const [thisMerchantProduct,setThisMerchantProduct] = useState([])
  const [ products,setProducts ] = useState([])
  const [ activities,setActivities ] = useState([])
  //brand_info
  const [thisMerchantBrandInfo,setThisMerchantBrandInfo] = useState([])
  const [ bgColor,setBgColor ]= useState('')
  const [ mainProductId,setMainProductId ]= useState('')
  const [ mainActivitiesId,setMainActivitiesId ]= useState('')
  // console.log(mainProductId)

  // ---Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const [ dataLoading,setDataLoading ] = useState(true)



  //server-data
    // async function getMerchantProduct(){
    //   // setDataLoading(true)
    //   // console.log('type',type)
    //   const url =`http://localhost:5000/Template/merchant_product?merchant_id=12`
    //   const request = new Request(url, {
    //       method:'GET',
    //       headers:new Headers({
    //           Accept:'application/json',
    //           'Content-Type':'application/json'
    //       }),
    //   })
    //   try{
    //     const response = await fetch(request)//response:fetch網址的資料
    //     const thisproduct = await response.json()
        
    //     setThisMerchantProduct(thisproduct)
    //     setProducts(thisproduct.products)
    //     setActivities(thisproduct.activities)
    //     console.log('thisproduct',thisproduct)
    //     console.log('products',thisproduct.products)
    //     console.log('activities',thisproduct.activities)
    //     // console.log('activities',thisproduct[0].activities)
    //     // setTimeout(()=>setDataLoading(false),500)

    //   }catch(error){
    //     setError("oops! error")
    //     // setTimeout(()=>setDataLoading(false),500)
    //   }
    // }


  //---get brand_info and thismerchant
  async function getMerchantProduct(){
    // setDataLoading(true)
    // console.log('type',type)
    const url =`http://localhost:5000/Template/merchant_product?merchant_id=3`
    const request = new Request(url, {
        method:'GET',
        headers:new Headers({
            Accept:'application/json',
            'Content-Type':'application/json'
        }),
    })
    try{
      const response = await fetch(request)//response:fetch網址的資料
      const thisproduct = await response.json()
      
      setThisMerchantProduct(thisproduct)
      setProducts(thisproduct.products[0])
      setActivities(thisproduct.activities[0])
      console.log('products[0]',products)
  
    }catch(error){
      setError("oops! error")
    }
  }
  
  // -- get brand_info --
  async function getBrandInfo(){
    // setDataLoading(true)
    // console.log('type',type)
    const url =`http://localhost:5000/Template/merchant_info?merchants=3`
    const request = new Request(url, {
        method:'GET',
        headers:new Headers({
            Accept:'application/json',
            'Content-Type':'application/json'
        }),
    })
    try{
      const response = await fetch(request)//response:fetch網址的資料
      const thisMerchantBrandInfo = await response.json()
      
      setThisMerchantBrandInfo(thisMerchantBrandInfo)
      setBgColor(thisMerchantBrandInfo.bg_color)
      setMainProductId(thisMerchantBrandInfo.main_productId)
      setMainActivitiesId(thisMerchantBrandInfo.main_activitiesId)
      console.log('thisMerchantBrandInfo',thisMerchantBrandInfo)
      // // setTimeout(()=>setDataLoading(false),500)
    }catch(error){
      setError("oops! error")
      // setTimeout(()=>setDataLoading(false),500)
    }
  }
  
  
  // useEffect(() => {
  //   getMerchantProduct()
  //   getBrandInfo()
  // }, [])
  
  useEffect(() => {
    const fetchPosts = async () => {
      let url = 'http://localhost:5000/productlist'
      const res = await axios.get(url).catch((err) => console.log('Error', err))
      setPosts(res.data)
    }

    fetchPosts()
    const fetchMerchantAllData = async () =>{
      let url = 'http://localhost:5000/productlist'
      const res = await axios.get(url).catch((err) => console.log('Error', err))
      setPosts(res.data)
    }

    getMerchantProduct()
    getBrandInfo()
    setTimeout(()=>setDataLoading(false),500)
    window.scrollTo(0, 0)
  }, [])


  const override = css`
  display: block;
  margin: 300px auto;
  border-color:#D44F44;
`;

  const loading = (
    <>
      <div className="template">
      <Col className="offset-2" xs={10}>
      <div className="sweet-loading">
          <RiseLoader
            css={override}
            size={90}
            color={"#D44F44"}
            // loading={this.state.loading}
          />
        </div>
      </Col>
      </div> 
    </>
  )

  const display = (
    <>
      <div className="Narrative">
            
            <Sec1Info
              bgColor={bgColor}
              thisMerchantBrandInfo={thisMerchantBrandInfo}
            />

            <Sec2MainPro 
              products={products}
              mainProductId={mainProductId}
            />

            <Sec3ProductList />
                   
            <Sec4Activities
            mainActivitiesId={mainActivitiesId}
            activities={activities}
             />
           
            <Sec5Story 
            thisMerchantBrandInfo={thisMerchantBrandInfo}
            
            />
          </div>
    </>
  )


    return(
        <>
          {dataLoading ? loading : display}
        </>
    )
}
export default Pommedepin111