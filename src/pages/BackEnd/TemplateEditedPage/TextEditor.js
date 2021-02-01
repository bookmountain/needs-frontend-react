import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor(props) {
  // const [value, setValue] = useState('');
  const {setText} = props
  return (
      <>
        <h6
              onClick={(e) => {
                  e.preventDefault()
                  setText(`因著保護種子的本能「遇濕則收，遇乾則放」的姿態
                  松果象徵著愛的理由
                  加上一層一層的外形
                  如同我們多元的手作商品
                  堆疊起來成為一個完整飽滿的松果
                  為的就是將這份因愛而生的質感及品味分享傳遞
                  【希望這個品牌以花草為出發，讓品味在生活上不斷延伸】
                  不只有花束及盆花商品，再加以結合手作感，讓花以更多元的樣貌呈現。
                  花，不再只是大自然的配件，透過松果，而能是建立人與人之間更親密的媒介，讓手作的溫度感染更多的人。`)
                }}
              >輸入品牌故事</h6>
        <ReactQuill theme="snow"  onChange={setText}/>
    </>
  );
}
export default TextEditor


// import React, { useState, useEffect } from 'react';
// import { Input } from 'antd';

// function TextEditor(props) {
//   const {setText} = props
//   const { TextArea } = Input;
//   const onChange = e => {
//     console.log(e);
//     setText(onChange)
//   };
//   console.log('onchangeText',onChange)
 
//   return (
//     <>
//     <TextArea placeholder="請輸入品牌故事" allowClear onChange={onChange} />
//     </>
//   );
// }

// export default TextEditor

