import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFount() {
  return (
    <div style={{height:'80vh'}} className='d-flex flex-column justify-content-center align-items-center my-5'>
    <img width={'300px'} src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
    <h1>Page Not Found</h1>
    <h5 className='my-4'>Sorry, we couldn't find the page.</h5>
    <Link to={'/'} className="btn btn-primary">Back to Home</Link>
</div>

  )
}

export default PageNotFount