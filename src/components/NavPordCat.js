import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const NavProdCat = () => {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    Axios.get(`http://localhost:5000/get-categories-api`).then((res) => {
      const data = res.data
      setCategories(data)
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <div className="nav-prod">
        {categories.map((item, index) => {
          const arr = item.category.split(',')
          return (
            <>
              <div key={item.id} className="catItem">
                <div className="parentCat">{item.parentCategory}</div>

                {arr.map((itm, idx) => {
                  return (
                    itm && (
                      <>
                        <div className="childCat">
                          <a href={`/productlist/${itm.split(':')[1]}`}>
                            {itm.split(':')[1]}
                          </a>
                        </div>
                      </>
                    )
                  )
                })}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default NavProdCat
