import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosDownload } from "react-icons/io";

function ResumeGenerator() {
  return (
   <div className='container-fluid'>
    <h2 className='my-5 text-center'>Create a job-winning Resume in Minutes.</h2>
    <div style={{height:'60vh'}} className=' row justify-content-center align-items-center '>
        <div className="col-4 boder rounded shadow p-5 text-center">
         <IoDocumentTextOutline className='fs-3 text-primary' />
            <h4>Add your information</h4>
           <p>Add pre-written examples to each section</p>
            <h5>Step 1</h5>
        </div>
        <div className="col-1"></div>
        <div className="col-4 boder rounded shadow p-5  text-center">
          <IoIosDownload className='fs-3 text-danger'/>
            <h4>Download your Resume</h4>
           <p>Download and start applying</p>
            <h5>Step 2</h5>
        </div>
    </div>
    <div className='text-center my-5'>
<button className='btn text-light' style={{background:'purple'}}>LET'S START</button>
    </div>
    
</div>

  )
}

export default ResumeGenerator