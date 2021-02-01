import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
// import 'antd/dist/antd.css'

const TemplateUpload = (props) => {
  const { setBgImg } = props
  // console.log(props)
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImgUrl] = useState('')
  // console.log(imageUrl)

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      // sendEdit()
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImgUrl(imageUrl) //用base64顯示在縮圖
        setLoading(false)
        console.log('obj', info.file.originFileObj)
        console.log('name1', info.file.response.url)
        setBgImg(info.file.response.url) //傳回網址給editpage
      })
    }
  }

  function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  //檢查格式
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <>
      <Upload
        name="image"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://localhost:5000/template/editpage?merchantid=12"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  )
}
export default TemplateUpload

// .avatar-uploader > .ant-upload {
//   width: 128px;
//   height: 128px;
// }
