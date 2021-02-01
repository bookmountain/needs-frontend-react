import React ,{ useState, } from 'react'

function Selector(){

    return(
        <div>
            <select className="browser-default custom-select">
            <option> --請選擇-- </option>
            <option value="1">Option 1</option>
            </select>
        </div>
    )
}
export default Selector
