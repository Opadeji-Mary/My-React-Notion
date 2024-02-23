import React from 'react'
import "./Body.css"

const Body = () => {
  return (
    <div className='all'>
        <h1 className='h1'>New year, new plans.</h1>
        <h3 className='h3'>your work space to write,organize, and collaborate. with AI by your side.</h3>
        {/* <button type="button" class="btn btn-dark d-grid gap-2 mx-auto" >Get free notion </button> */}
        
        <button class="cta">
         <span>Get Notion free</span>
         <svg width="15px" height="10px" viewBox="0 0 13 10">
           <path d="M1,5 L11,5"></path>
           <polyline points="8 1 12 5 8 9"></polyline>
         </svg>
        </button>
    </div>
  )
}

export default Body