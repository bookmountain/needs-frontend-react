import React, { useState, useEffect } from 'react'
import swal from '@sweetalert/with-react';
import { useSelector } from 'react-redux' //引入redux

import {
  Col,
  Container,
  Button,
  Accordion,
  Card,
} from 'react-bootstrap'

import TemplateUpload from './TemplateUpload'
import TemplateStoryUpload from './TemplateStoryUpload'
import './styles/TemplateEditedPage.scss'
import TextEditor from './TextEditor'
import Editbar from './Editbar'

// 選擇的模板
import Narrative from '../Templates/Narrative'

import { GrMoreVertical } from "react-icons/gr";
import { BsFillEyeFill,BsFillEyeSlashFill } from "react-icons/bs";

import axios from 'axios'
import { TwitterPicker } from 'react-color';


function TemplateEditedPage(props) {

  const isLogin = useSelector((state) => state.authentication.loggedIn) //redux判斷是否為login狀態
  const loginUser = useSelector((state) => state.authentication.user) //redux初始值設定為空值



const [text, setText] = useState(''); 
const [show,setShow]= useState(true)
const toggleShow = (e) => setShow(!show);
const [show1,setShow1]= useState(true)
const toggleShow1 = (e) => setShow1(!show1);



// fileuplaod
const [bgImg, setBgImg] = useState('')
const [storyImg,setStoryImg] = useState('')
const [color,setColor] = useState('#323232')

//data-from-server
// :products
const [thisMerchantProduct,setThisMerchantProduct] = useState([])
const [ products,setProducts ] = useState([])
const [ activities,setActivities ] = useState([])
// :brand_info
const [thisMerchantBrandInfo,setThisMerchantBrandInfo] = useState([])

const [ selectedProduct,setSelectedProduct ] = useState(0) 
const [ selectedActivities,setSelectedActivities ] = useState(0) 

const [error,setError] = useState(null)



//以下包成form寫入
//圖片
const sendBgImgToNode = async () => {
  await axios
    .put('http://localhost:5000/template/editpage?merchantid=12', [bgImg])
    .catch((error) => {
      console.log('Error', error)
    })
}

const sendDataToNode = (e) => {
  // e.preventDefault()
  // const formData = new FormData()
  // formData.set('selectedProductId', selectedProduct)
  // formData.set('selectedActivitiesId', selectedActivities)  
  // formData.set('bg_color', color)
  // formData.set('story_text', JSON.stringify(text))

  axios
    .post('http://localhost:5000/template/editpage/changeData?id=12', [text,color,selectedProduct,selectedActivities])
    .catch((error) => {
      console.log('Error', error)
    })
  
    swal({
      title: "確定要儲存嗎 ? ",
      icon: "info",
      buttons: true,
      dangerMode: true,
    })
    .then((willSave) => {
      if (willSave) {
        swal({
          title:"儲存成功！", 
          icon: "success",
          
        });
      }
    });
    
}

const sendStoryImgToNode = async () => {
  await axios
    .put('http://localhost:5000/template/postStoryImg?merchantid=12', [storyImg])
    .catch((error) => {
      console.log('Error', error)
    })
}

//server-data
// -- get product --
async function getMerchantProduct(){
  // setDataLoading(true)
  // console.log('type',type)
  const url =`http://localhost:5000/Template/merchant_product?merchant_id=12`
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
    // setTimeout(()=>setDataLoading(false),500)
  }
}

// -- get brand_info --
async function getBrandInfo(){
  // setDataLoading(true)
  // console.log('type',type)
  const url =`http://localhost:5000/Template/merchant_info?merchants=12`
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
    console.log('thisMerchantBrandInfo',thisMerchantBrandInfo)
    // // setTimeout(()=>setDataLoading(false),500)
  }catch(error){
    setError("oops! error")
    // setTimeout(()=>setDataLoading(false),500)
  }
}


useEffect(() => {
  getMerchantProduct()
  getBrandInfo()
  window.scrollTo(0, 0)
}, [])

// useEffect(() => {
//   if (!isLogin) return
//     window.location.href = '/login' //若非login狀態則跳轉至login畫面
  
// }, [])

// const  goSave = ()=>{

// }
//   swal({
//     title: "Are you sure?",
//     text: "Once deleted, you will not be able to recover this imaginary file!",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("Poof! Your imaginary file has been deleted!", {
//         icon: "success",
//       });
//     } else {
//       swal("Your imaginary file is safe!");
//     }
//   });



  return(
    <>
    <div className="template-editPage">
    <Col className="offset-2" xs={10}>
    <div className="container-fluid mt-2">

    {/* edit-bar */}
    <Col className="xs={10} p-0">
    <div className="d-flex justify-content-start align-items-center">
    <Button className="mt-2 mr-2 btn-save" onClick = { (e) => { sendDataToNode(e)} }>
    儲存</Button>
    <Button className="mt-2 btn-home" onClick={()=>{props.history.push('/customer-backend/template-home')}} >
    首頁模板</Button>
    </div>
    {/* <hr /> */}
    <div className="d-flex w-100">
    <div className="space">
    <div className="edit-bar">
    
    {/* accrodion 1 */}
        <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-end align-items-center">
              商家資訊
              <Button variant="light" onClick={(e)=>toggleShow(e)}>
              {show?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            <div className="d-flex flex-column ">
              <h6>上傳背景圖片</h6>
              <TemplateUpload setBgImg={setBgImg} />
              <div className="mt-3">
              <h6>選擇背景顏色</h6>
                  <TwitterPicker 
                    color= {color}
                    onChangeComplete={(color) => setColor(color.hex)}
                  />
              </div>
            </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

      {/* accrodion 2 */}
        <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header className ="rounded">
          <div className="d-flex justify-content-end align-items-center">
            主打商品
            <Button variant="light" onClick={toggleShow1}> 
              {show1?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="1">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h6>選擇主打商品</h6>
                <div>
                        <select className="browser-default custom-select" onChange={(e)=>setSelectedProduct(e.target.value)}>
                        <option> --請選擇-- </option>
                        {products && products.map((product, index) => {
                      console.log('product', product.title)
                  return(
                        <option value={product.id} key={index} >
                        {product.title}
                        </option>
                  )
                  })}
                        </select>

                </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

       {/* accrodion 3 */}

       <Accordion defaultActiveKey="2">
        <Card>
          <Card.Header className ="rounded">
          <div className="d-flex justify-content-end align-items-center">
            產品列表
            <Button variant="light" onClick={toggleShow}> 
              {show?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="2">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          {/* <Accordion.Collapse eventKey="2">
            <Card.Body>
              
            </Card.Body>
          </Accordion.Collapse> */}
        </Card>
        </Accordion>

      {/* accrodion4 */}
        <Accordion defaultActiveKey="3">
        <Card>
          <Card.Header className ="rounded">
          <div className="d-flex justify-content-end align-items-center">
            商家活動
            <Button variant="light" onClick={toggleShow}> 
              {show?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="3">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
                <h6>選擇主打活動</h6>
                <div>
                        <select className="browser-default custom-select"
                        onChange={(e)=>setSelectedActivities(e.target.value)}>
                        <option> --請選擇-- </option>
                        {activities && activities.map((activities, index) => {
                        console.log('activities', activities.title)
                  return(
                        <option value={activities.id} key={index}> {activities.title} 
                        </option>
                  )
                  })}
                        </select>
                </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

      {/* accrodion5 */}
        <Accordion defaultActiveKey="4">
        <Card>
          <Card.Header className ="rounded">
          <div className="d-flex justify-content-end align-items-center">
            商家故事
            <Button variant="light" onClick={toggleShow}> 
              {show?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="4">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <div className="d-flex flex-column ">
              <h6>上傳故事圖片</h6>
              <TemplateStoryUpload setStoryImg={setStoryImg} />
              <div className="mt-3">
              
              <TextEditor setText={setText}/>
              </div>
            </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
        </div>
    </div>
   
        {/* change section*/}

        <div className="change-section rounded">
            <Narrative
            color={color} 
            bgImg={bgImg} 
            storyImg={storyImg} 
            products={products}
            activities={activities}
            selectedProduct={selectedProduct}
            selectedActivities={selectedActivities}
            thisMerchantBrandInfo={thisMerchantBrandInfo}  
            />
        </div>

        {/* <Editbar/> */}

    </div>
    </Col>

    </div>
    </Col>
    </div>
    
      
    </>
  )
}

export default TemplateEditedPage