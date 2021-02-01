import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useCombobox } from 'downshift'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import './SearchBox.scss'

function SerarchBox() {
  const [inputItems, setInputItems] = useState([])
  const [getAllData, setGetAllData] = useState([])
  const [singleData, setSingleData] = useState('')

  useEffect(() => {
    const AllData = async () => {
      let url = 'http://localhost:5000/productlist'
      const res = await axios.get(url)
      if (res) setGetAllData(res.data)
    }
    AllData()
  }, [])

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    scrollIntoView: () => {},
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        getAllData.filter(
          (item) =>
            item.title.toLowerCase().startsWith(inputValue.toLowerCase()) ||
            item.title.startsWith(inputValue) ||
            item.title.includes(inputValue)
        )
      )
    },
  })

  return (
    <>
      {/* <h6>{singleData}</h6> */}
      <div {...getComboboxProps()}>
        <input
          {...getInputProps()}
          className="search"
          placeholder={singleData ? singleData : '想找點什麼'}
        />
      </div>
      <ul {...getMenuProps()} className="searchContent">
        {isOpen &&
          inputItems.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setSingleData(item.title)}
            >
              <li
                style={
                  highlightedIndex === index
                    ? {
                        backgroundColor: '#e7e7e7',
                      }
                    : {}
                }
              >
                <a href={`/products/${item.id}?room=${item.brand_en_name}`}>
                  <div className="prodImg">
                    <img
                      src={`http://localhost:5000/img/products/${item.image_path}`}
                    />
                  </div>
                  <OverlayTrigger
                    key={item.id}
                    placement="bottom-start"
                    delay={{ show: 750 }}
                    overlay={
                      <Tooltip id={`tooltip-${item.id}}`}>{item.title}</Tooltip>
                    }
                  >
                    <p>{item.title}</p>
                  </OverlayTrigger>
                </a>
              </li>
            </span>
          ))}
      </ul>
    </>
  )
}

export default SerarchBox
