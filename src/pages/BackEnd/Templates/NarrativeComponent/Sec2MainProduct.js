import React, { useState, useEffect } from 'react'
function Sec2MainProduct(props){
    const { displayMainImg, products ,selectedProduct } = props
    const isSelected=(
        <div className="sec2">
              <div className="d-flex justify-content-between m-auto">
             
                {!selectedProduct==0 && products.filter(product => product.id == selectedProduct)
                    .map((product, index) => {
                      return (
                        <>
                            <img className="product-bg-pic" src={`http://localhost:5000/img/products/${product.image_path.split(',')[0]}`} key={index}/>
                            <div className="d-flex flex-column wrapper">
                            <h2>本週主打</h2>
                            <h4>{product.title}</h4>
                            {/* <div className="product-sml-pic" style={{ backgroundImage : `url(${displayMainImg})`}} ></div> */}
                            <img className="product-sml-pic" src={`http://localhost:5000/img/products/${product.image_path.split(',')[1]}`} />
                            <p className="sml">{product.outline}</p>
                            <h2>NT${product.price}</h2>
                            <button className="btn">加入購物車</button>
                            </div>
                        </>
                            );
                          }
                          )
                      }
              </div>
              
            </div>
    )         

    const notSelected=(
        <div className="sec2">
              <div className="d-flex justify-content-between m-auto">
                            <div className="product-bg-pic" style={{ backgroundImage : `url(${displayMainImg})`}}  ></div>
                            <div className="d-flex flex-column wrapper">
                            <h2>本週主打</h2>
                            <h4>請選擇</h4>
                            <div className="product-sml-pic" style={{ backgroundImage : `url(${displayMainImg})`}} ></div>
                            <p className="sml">請選擇</p>
                            <h2>NT$$$</h2>
                            <button className="btn">加入購物車</button>
                            </div>
              </div>
              
            </div>
    )

                      console.log(selectedProduct)
    return(
        <>
            {selectedProduct > 0 ? isSelected : notSelected}
        </>
    )
}
export default Sec2MainProduct

