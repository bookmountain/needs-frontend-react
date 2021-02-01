import React, { useState, useEffect, useCallback } from 'react'

import ArticleShowInfo from '../../components/Article/ShowBTnInfo/ArticleShowInfo'

import axios from 'axios'
import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './constants'
import { Button } from 'react-bootstrap'
import './CreateArticle.scss'

const CreateArticle = (props) => {
  //record and send to the nodejs
  const [title, setTitle] = useState('')
  const [outline, setOutline] = useState('')
  const [image, setImage] = useState('')
  const [contentDetial, setContentDetial] = useState({})
  //record the Editor
  const [showHTML, setShowHTML] = useState('')
  const instanceRef = React.useRef(null)
  //Show the Information when clicking Btn.
  const [showInfo, setShowInfo] = useState(false)
  const [showSendInfo, setShowSendInfo] = useState(false)
  const [showEmailInfo, setShowEmailInfo] = useState(false)

  let articleHTML = ''

  async function handleSave() {
    const savedData = await instanceRef.current.save()

    console.log('savedData', savedData)
    setContentDetial(savedData)
  }
  const saveToHtml = () => {
    setShowInfo(true)

    contentDetial.blocks.map((obj) => {
      switch (obj.type) {
        case 'paragraph':
          setOutline(obj.data.text)
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-paragraph cdx-block">
          ${obj.data.text}
        </div>
      </div>
    </div>\n`
          break
        case 'image':
          setImage(obj.data.file.url)
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-paragraph cdx-block">
          <img src="${obj.data.file.url}" alt="${obj.data.caption}" style="width:270px;height:270px" />
          <div className="text-center">
            <i>${obj.data.caption}</i>
          </div>
        </div>
      </div>
    </div>\n`
          break
        case 'header':
          setTitle(obj.data.text)
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-paragraph cdx-block">
          <h${obj.data.level}>${obj.data.text}</h${obj.data.level}>
        </div>
      </div>
    </div>\n`
          break
        case 'raw':
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-rawtool">
          <code>${obj.data.html}</code>
        </div>
      </div>
    </div>\n`
          break
        case 'list':
          if (obj.data.style === 'unordered') {
            const list = obj.data.items.map((item) => {
              return `<li className="cdx-list__item">${item}</li>`
            })
            articleHTML += `<div className="ce-block">
        <div className="ce-block__content">
          <div className="ce-paragraph cdx-block">
            <ul className="cdx-list--unordered">${list}</ul>
          </div>
          </div>
        </div>\n`
          } else {
            const list = obj.data.items.map((item) => {
              return `<li className="cdx-list__item">${item}</li>`
            })
            articleHTML += `<div className="ce-block">
        <div className="ce-block__content">
          <div className="ce-paragraph cdx-block">
            <ol class="cdx-list--ordered">${list}</ol>
          </div>
          </div>
        </div>\n`
          }
          break
        case 'delimeter':
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-delimiter cdx-block"></div>
      </div>
    </div>\n`
          break
        default:
          return ''
      }
      setShowHTML(articleHTML)
      console.log(showHTML)
      return [title, image, outline, showHTML]
    })
  }

  const sendContent = async () => {
    setShowSendInfo(false)
    await axios
      .post('http://122.116.38.12:5050/article', [
        title,
        image,
        outline,
        showHTML,
      ])
      .catch((error) => {
        console.log('Error', error)
      })
  }

  const sendEmail = async () => {
    setShowEmailInfo(false)
    const data = { __html: showHTML }
    // const email = 'deri19911010@gmail.com'
    await axios
      .post('http://122.116.38.12:5050/article/email', [title, image, data])
      .catch((error) => {
        console.log('Error', error)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      setShowInfo(false)
    }, 3000)
  }, [handleSave])

  const closeHandler = () => setShowInfo(false)

  return (
    <>
      {showInfo ? (
        <div
          onClick={closeHandler}
          className="back-drop"
          style={{
            background: '#cdcdcd',
            height: '100%',
            position: 'fixed',
            transition: 'all 1.3s',
            width: '100%',
          }}
        ></div>
      ) : null}
      {showInfo ? (
        <ArticleShowInfo showInfo={showInfo} closeHandler={closeHandler} />
      ) : null}
      <EditorJs
        onChange={handleSave}
        instanceRef={(instance) => (instanceRef.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={contentDetial}
      />
      <div className="d-flex justify-content-center ArticleEditor mb-5">
        <Button className="sendBtn" onClick={saveToHtml}>
          儲存
        </Button>

        <Button
          className="sendBtn"
          style={{ display: showSendInfo ? 'none' : 'block' }}
          onClick={() => setShowSendInfo(!showSendInfo)}
        >
          發表文章
        </Button>
        {showSendInfo ? (
          <div>
            <Button className="btn-danger mr-5" onClick={sendContent}>
              確認送出
            </Button>
            <Button
              className="btn-success"
              onClick={() => setShowSendInfo(!showSendInfo)}
            >
              取消
            </Button>
          </div>
        ) : null}
        <Button
          className="sendBtn"
          style={{ display: showEmailInfo ? 'none' : 'block' }}
          onClick={() => setShowEmailInfo(!showEmailInfo)}
        >
          電子報
        </Button>
        {showEmailInfo ? (
          <div>
            <Button className="btn-danger mr-5" onClick={sendEmail}>
              確認送出
            </Button>
            <Button
              className="btn-success"
              onClick={() => setShowEmailInfo(!showEmailInfo)}
            >
              取消
            </Button>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default CreateArticle
