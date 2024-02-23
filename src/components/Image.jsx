import React from 'react'
import image from '../assets/hero_xmas-rev (1).png'
import icon from '../assets/stars.svg'
import docs from '../assets/file-text-line.svg'

import './Image.css'
const Image = () => {
  return (
    <div>
      <div className='imag'>
      <img src={image} alt='image' className='image'/>

      <div className='boot'>
      <div class="row">
           <div class="col-sm-3 mb-3 mb-sm-0" className='card-client'>
             <div class="card">
               <div class="card-body">
                 <div className='titles'>
                 <h2 class="card-title"><img src={icon} alt="" width={30} /></h2>
                 </div>
                 <h2>AI</h2>
                 <p class="card-text">Ask literally anything. <br /> notion will answer.</p>
                 <h6> <a href="#" class="learn">Learn more
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg></a></h6>
               </div>
             </div>
           </div>
           <div class="col-sm-3 mb-3 mb-sm-0" className='card-client'>
             <div class="card">
               <div class="card-body">
                 <div className='titles'>
                 <h2 class="card-title"><img src={icon} alt="" width={30} /></h2>
                 </div>
                 <h2>Wikis</h2>
                 <p class="card-text">Ask literally anything. <br /> notion will answer.</p>
                 <h6> <a href="#" class="learn">Learn more
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg></a></h6>
               </div>
             </div>
           </div>
           <div class="col-sm-3 mb-3 mb-sm-0" className='card-client'>
             <div class="card">
               <div class="card-body">
                 <div className='titles'>
                 <h2 class="card-title"><img src={docs} alt="" width={30} /></h2>
                 </div>
                 <h2>Docs</h2>
                 <p class="card-text">Ask literally anything. <br /> notion will answer.</p>
                 <h6> <a href="#" class="learn">Learn more
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg></a></h6>
               </div>
             </div>
           </div>
           <div class="col-sm-3 mb-3 mb-sm-0" className='card-client'>
             <div class="card">
               <div class="card-body">
                 <div className='titles'>
                 <h2 class="card-title"><img src={icon} alt="" width={30} /></h2>
                 </div>
                 <h2>Project</h2>
                 <p class="card-text">Ask literally anything. <br /> notion will answer.</p>
                 <h6> <a href="#" class="learn">Learn more
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg></a></h6>
               </div>
             </div>
           </div>
         </div> 
      </div>
      </div>
      
      
    </div>

  )
}

export default Image