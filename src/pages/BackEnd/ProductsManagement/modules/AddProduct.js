import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Modal, Button } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh'
import Axios from 'axios'
import NumberFormat from 'react-number-format'
import { FiUpload, FiX } from 'react-icons/fi'
import Spec from './Spec'
import SpecItem from './SpecItem'

const AddProduct = (props) => {
  const {
    showAddProd,
    setShowAddProd,
    getData,
    merchantId,
    type,
    getCategories,
    categories,
    specCount,
    createSpec,
    formData,
    setFormData,
    imgList,
    setImgList,
    preview,
    setPreview,
    alertShow,
    setAlertShow,
    error,
    success,
    clear,
    alerMsg,
    alerType,
  } = props

  const dispatch = useDispatch()

  const defaultData = {
    title: '【IWI】 Concision 簡約鋼筆',
    category: 22,
    specification0: '霧黑',
    specification1: '霧銀',
    price: '600',
    salePrice: '540',
    launchDate: '2020-11-16',
    stock: 20,
    outline:
      'IWI Concision簡約鋼珠筆/鋼筆使用極簡主義的設計語言，以一體式結構的上下黃銅筆管完成具有獨特性與原創性的線條；傾斜的頂端與尾部設計，點綴富有彈性的筆夾，輔以簡單的色彩，適合喜愛純粹極簡生活風格的你。',
    description: `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="zh" dir="ltr" role="textbox" aria-label="豐富文字編輯器，main" contenteditable="true"><p>#粉絲專屬限定&nbsp;11月感恩回饋</p><p>購買指定商品享有免費刻字服務~（市價$100/支）</p><p>#限Pinkoi平台</p><p>只要是以下社群的IWI粉粉們</p><p>Facebook、Instagram、Twitter</p><p>皆享有指定商品免費刻字服務！</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>指定商品有：</p><p>Fusion&nbsp;融合系列</p><p>Concision&nbsp;簡約系列</p><p>Essential&nbsp;基礎全系列</p><p>&nbsp;Multi611&nbsp;貝多芬紀念版</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>參加辦法：</p><p>將指定商品加入購物車後，</p><p>點選結帳時會出現&nbsp;#給設計師的訊息或建議，</p><p>在上方留言：已按讚或追蹤，名稱或帳號是@__，刻字內容____</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>小編示範：已追蹤！IG帳號是@iwi_writing，刻字內容：用心寫的，最溫暖</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>*各商品的刻字詳細說明請至商品頁面的「加購刻字服務」連結內查看喔！</p><p><br data-cke-filler="true"></p><p><br data-cke-filler="true"></p><img scr="https://static.wixstatic.com/media/00ae17_9a0dd9c5c2664584a00f3d9c861d23d3~mv2.jpg" alt="" /><p>※&nbsp;如需刻字服務請將商品與下方連結一同加入購物車內，</p><p>加購刻字服務(NT$100/支)→&nbsp;www.pinkoi.com/product/mUhYuXfQ</p><p>點選結帳時，會出現"給設計師的訊息"中留言您欲刻字的內容即可</p><p>請先行付款才能進行下單製作，煩請配合！</p><p>※刻字商品大約需7~10個工作天，煩請耐心等候。</p><p>※中港澳地區下單收件地址請填寫中文，以配合順豐速運系統辨識，謝謝~</p><p><br><br data-cke-filler="true"></p><p>加購墨水→&nbsp;www.pinkoi.com/store/iwic?category=...</p><p>加購吸墨器→&nbsp;www.pinkoi.com/product/rfuThwmC</p><p>加購卡水→&nbsp;www.pinkoi.com/product/q87uJ4Nt</p><p><br><br data-cke-filler="true"></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IWI&nbsp;Concision簡約鋼珠筆/鋼筆使用極簡主義的設計語言，以一體式結構的上下黃銅筆管完成具有獨特性與原創性的線條；傾斜的頂端與尾部設計，點綴富有彈性的筆夾，輔以簡單的色彩，適合喜愛純粹極簡生活風格的你。</p><p><br><br data-cke-filler="true"></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鋼珠筆採用德國史密特SCHMIDT原裝888F細字0.6mm鋼珠筆芯；鋼筆則採用德國原裝進口的PETER&nbsp;BOCK極細EF鋼筆尖以及歐洲進口墨水，將優質良好的書寫性最大化。</p><p><br><br data-cke-filler="true"></p><p>全系列隨附專用收納鐵盒。</p><p><br><br data-cke-filler="true"></p><p>&nbsp;材質：銅管電鍍</p><p>&nbsp;尺寸：總長約&nbsp;H138.8mm&nbsp;W13.5mm&nbsp;D10.6mm</p><p>&nbsp;重量：約&nbsp;21.2&nbsp;g(含卡水)</p><p>筆尖：德製三件式EF極細鋼筆尖</p><p>歐洲進口墨水：黑色</p><p><br><br data-cke-filler="true"></p><p>※商品為單支販售，照片為情境圖，僅供參考。</p><p><br data-cke-filler="true"></p><p>加購卡水→&nbsp;www.pinkoi.com/product/q87uJ4Nt</p><p>&nbsp;加購刻字服務(NT$100/支)→&nbsp;www.pinkoi.com/product/mUhYuXfQ</p></div>`
  }

  //清除已選擇按鈕
  const removeSelected = (e, index) => {
    e.preventDefault()
    const preArr = [...preview]
    const selectedArr = [...imgList]
    preArr.splice(index, 1)
    selectedArr.splice(index, 1)
    setPreview(preArr)
    setImgList(selectedArr)
  }

  const handleSetForm = (e, key, data) => {
    switch (key) {
      case 'file':
        const files = e.target.files

        //先把img透過for迴圈寫入imgRow物件
        const imgRow = []
        const imgPre = []
        for (let i = 0; i < files.length; i++) {
          const img = files[i]
          imgRow.push(img)
          imgPre.push(URL.createObjectURL(img))
        }
        //將imgRow物件set進ImgList State中
        setImgList(imgRow)
        setPreview(imgPre)
        break

      case 'description':
        setFormData({ ...formData, [key]: data })
        break

      default:
        const value = e.target.value
        setFormData({ ...formData, [key]: value })
        break
    }
    // if (key === 'file') {
    //   const files = e.target.files

    //   //先把img透過for迴圈寫入imgRow物件
    //   const imgRow = []
    //   const imgPre = []
    //   for (let i = 0; i < files.length; i++) {
    //     const img = files[i]
    //     imgRow.push(img)
    //     imgPre.push(URL.createObjectURL(img))
    //   }
    //   //將imgRow物件set進ImgList State中
    //   setImgList(imgRow)
    //   setPreview(imgPre)
    // } else {
    //   const value = e.target.value
    //   setFormData({ ...formData, [key]: value })
    // }
  }

  const specItemArr = []
  for (let i = 0; i <= specCount.count; i++) {
    specItemArr.push(<SpecItem key={i} index={i} />)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const postData = new FormData()

    //把files state append進postData
    imgList.forEach((img) => {
      postData.append('imgList', img)
    })

    //把文字formData set進postData
    postData.set('formData', JSON.stringify(formData))

    Axios.post(
      `http://localhost:5000/bk-products-api?id=${merchantId}&prodType=0`,
      postData
    ).then((res) => {
      if (!res.data.success) {
        setAlertShow(true)
        setTimeout(() => {
          dispatch(clear())
          setAlertShow(false)
        }, 1500)
        return dispatch(error('新增失敗'))
      }
      setAlertShow(true)
      setShowAddProd(false)
      getData(merchantId, type)
      setTimeout(() => {
        dispatch(clear())
        setAlertShow(false)
      }, 1500)
      return dispatch(success('新增成功'))
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Modal
        className="addProdModal"
        show={showAddProd}
        onHide={(e) => {
          setShowAddProd(false)
          setFormData({})
          setPreview([])
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title onClick={() => setFormData(defaultData)}>
            實體商品上架
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="title">
              <p className="warningInfo">*為必填欄位</p>
              <Form.Label>
                商品名稱<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                required
                value={formData.title}
                onChange={(e) => handleSetForm(e, 'title')}
              />
            </Form.Group>
            <Form.Label>商品圖片</Form.Label>
            <Form.Group controlId="file" className="uploadImg">
              <Form.Label>
                <FiUpload size="35px" />
                上傳圖片
                <div className="preBox">
                  {preview.map((item, index) => {
                    return (
                      <>
                        <img src={item} alt="" />
                        <FiX
                          size="24px"
                          color="#ea5455"
                          className="removebtn"
                          onClick={(e) => removeSelected(e, index)}
                        />
                      </>
                    )
                  })}
                </div>
              </Form.Label>
              <Form.File
                className="position-relative"
                required
                name="file"
                feedbackTooltip
                multiple
                onChange={(e) => {
                  handleSetForm(e, 'file')
                }}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>
                商品類別<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                value={formData.category}
                required
                onChange={(e) => handleSetForm(e, 'category')}
              >
                <option value="" disabled selected hidden>
                  請選擇
                </option>
                {categories.map((item, index) => {
                  const arr = item.category.split(',')
                  return (
                    <>
                      <option
                        key={item.id}
                        value={item.id}
                        className="parentCat"
                        disabled
                      >
                        {item.parentCategory}
                      </option>
                      {arr.map((itm, idx) => {
                        return (
                          itm && (
                            <>
                              <option key={idx} value={itm.split(':')[0]}>
                                {itm.split(':')[1]}
                              </option>
                            </>
                          )
                        )
                      })}
                    </>
                  )
                })}
              </Form.Control>
            </Form.Group>

            <Spec
              formData={formData}
              handleSetForm={handleSetForm}
              specCount={specCount}
              createSpec={createSpec}
            >
              {specItemArr}
            </Spec>
            <Form.Group>
              <Form.Label htmlFor="price">
                商品定價<span className="redStar">*</span>
              </Form.Label>
              <NumberFormat
                className="form-control"
                thousandSeparator={true}
                prefix={'$'}
                id="price"
                required
                value={formData.price}
                onChange={(e) => handleSetForm(e, 'price')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="salePrice">商品促銷價</Form.Label>
              <NumberFormat
                className="form-control"
                thousandSeparator={true}
                prefix={'$'}
                id="salePrice"
                value={formData.salePrice}
                onChange={(e) => handleSetForm(e, 'salePrice')}
              />
            </Form.Group>
            <Form.Group controlId="launchDate">
              <Form.Label>
                商品上架日<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                type="date"
                required
                value={formData.launchDate}
                onChange={(e) => handleSetForm(e, 'launchDate')}
              />
            </Form.Group>
            <Form.Group controlId="stock">
              <Form.Label>
                商品庫存<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                type="number"
                required
                value={formData.stock}
                onChange={(e) => handleSetForm(e, 'stock')}
              />
            </Form.Group>
            <Form.Group controlId="outline">
              <Form.Label>
                商品摘要<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                required
                value={formData.outline}
                onChange={(e) => handleSetForm(e, 'outline')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                商品詳細介紹<span className="redStar">*</span>
              </Form.Label>
              <CKEditor
                data={defaultData.description}
                editor={ClassicEditor}
                config={{
                  language: 'zh',
                }}
                onReady={(editor) => {
                  console.log('Editor is ready to use!', editor)
                }}
                onChange={(e, editor) => {
                  const data = editor.getData()
                  handleSetForm(e, 'description', data)
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-danger"
              onClick={(e) => {
                setShowAddProd(false)
                setFormData({})
                setPreview([])
              }}
            >
              取消
            </Button>
            <Button variant="secondary">預覽商品頁</Button>
            <Button variant="primary" type="submit">
              上架商品
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal show={alertShow} centered className="alertModal">
        <Modal.Body className={alerType}>{alerMsg}</Modal.Body>
      </Modal>
    </>
  )
}

export default AddProduct
