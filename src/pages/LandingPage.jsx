import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <section className='container-fluid first' style={{
        width: '100%', overflowX: 'hidden', height: '450px',
        backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment: 'fixed',
        backgroundPosition: 'top', backgroundSize: 'cover'
      }}>
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4  shadow border py-5 rounded mt-5 text-center" style={{ backgroundColor: 'rgb(255, 255, 255,0.5)' }}>
            <h3>Designed to get hired.</h3>
            <h4>Your skills, Your story, Your next job - all in one.</h4>
            <Link to={'/resume'}> <button className='btn text-light'style={{background:'purple'}} >Make Your Resume</button></Link>

          </div>
          <div className="col-12 col-md-4"></div>

        </div>

      </section>

      {/* tools */}
      <section className="tools p-5">
        <h1 className='text-center'>Tools</h1>
        <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>

            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>

            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>

            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <img className='w-75 ms-5' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="tools" />
          </div>
        </div>
      </section>

      {/* */}
      <section className='second' style={{
        width: '100%', overflowX: 'hidden', height: '450px',
        backgroundImage: "url('https://wallpaperaccess.com/full/2484157.jpg')", backgroundAttachment: 'fixed',
        backgroundPosition: 'top', backgroundSize: 'cover'
      }}></section>
      {/* testimony */}
      <section className="tools p-5">
        <h1 className='text-center'>Testimony</h1>
        <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6 p-5">
            <h4>Trusted by professionals worldwide</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>

            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who've fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <div className="row g-2">
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage