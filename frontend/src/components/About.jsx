import React, { useState } from 'react'
import austin from '../assets/Austin.jpg'
import hanan from '../assets/Hanan.jpg'
import kailash from '../assets/Kailash.jpg'
import karthik from '../assets/Karthik.jpg'
import nikhil from '../assets/Nikhil.jpg'
import nithin from '../assets/nithin-kamath.jpg'
import seema from '../assets/Seema.jpg'
import venu from '../assets/Venu.jpg'
const About = () => {

  const [showBio, setShowBio] = useState({})

  const toggleBio = (key) => {
    setShowBio(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <div className='mb-5'>
      {/* fist section */}
      <div className="about-container d-flex flex-column  gap-3 align-items-center mt-5 ">
        <h2 className="text-center mt-5">
          We pioneered the discount broking model in India.
          Now, we are breaking ground with our technology.
        </h2>

        <div className="container mt-5 ">
          <div className="gap-4 d-lg-flex justify-content-center align-itmes-center">
            {/* First Column */}
            <div className="para-text col-12 d-lg-flex flex-lg-column align-items-center  gap-4 col-lg-6 mb-4 mb-lg-0">
              <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
              <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
              <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>

            {/* Second Column */}
            <div className="para-text col-12 d-lg-flex flex-lg-column align-items-center gap-4 col-lg-6 ">
              <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
              <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
              <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className='container d-flex  flex-column mt-5 '>
        <h2 className='d-flex justify-content-center'>People</h2>
        <div className='d-flex' style={{ height: '80vh' }} >
          <div className='col-lg-6  d-flex flex-column align-items-end justify-content-center mt-5'>
            <div className='d-flex flex-column align-items-center gap-1'>
              <img className='rounded-circle size-pic' src={nithin} alt="" />
              <h5>Nithin Kamath</h5>
              <p>Founder, CEO</p>
            </div>
          </div>
          <div className='col-lg-6   d-flex flex-column ps-4 justify-content-center gap-3  '>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <span>Homepage</span>  / <span>TradingQnA</span>/<span>Twitter</span></p>
          </div>
        </div>
      </div>
      <div className='grid ms-5'>
        <div className='stap-pic'>
          <img className='rounded-circle size-pic' src={nikhil} alt="" />
          <h3>Nikhil Kamath</h3>
          <p>Co-founder & CFO</p>
          <div
            onClick={() => toggleBio('nikhil')}
            className='bio'
          >
            {showBio ?  'Bio ▼':''}
          </div>
          {showBio.nikhil &&
            <p>
              Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.
            </p>
          }
        </div>
        <div className='stap-pic'>
          <img className='rounded-circle size-pic' src={venu} alt="" />
          <h3>Venu Madhav</h3>
          <p>COO</p>
          <div
            onClick={() => toggleBio('venu')}
            className='bio'
          >
            {showBio ?  'Bio ▼':''}
          </div>
          {showBio.venu &&
            <p> Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
            </p>
          }
        </div>
         
        <div className='stap-pic'>
          <img className='rounded-circle size-pic' src={hanan} alt="Hanan Delvi" />
          <h3>Hanan Delvi</h3>
          <p>CCO</p>
          <div
            onClick={() => toggleBio('hanan')}
            className='bio'
          >
            {showBio ? 'Bio ▲':''}
          </div>

          {showBio.hanan && (
            <p className='mt-1 p-1'>
              We take pride in the way we support our clients, and Hanan is responsible for this with his
              never ending flow of energy. He is the man behind many of our support initiatives that have helped
              us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.
            </p>
          )}
        </div>
        <div className='stap-pic'>
          <img className='rounded-circle size-pic' src={seema} alt="" />
          <h3>Seema Patil</h3>
          <p>Director</p>
          <div
            onClick={() => toggleBio('seema')}
            className='bio'
          >
            {showBio ? 'Bio ▼':''}
          </div>
          {showBio.seema &&
            <p className='mt-1 p-1'> Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast. </p>
          }
        </div>
        <div className='stap-pic'>
          <img className='rounded-circle size-pic' src={karthik} alt="" />
          <h3>Karthik Rangappa</h3>
          <p>Chief of Education</p>
          <div onClick={() => toggleBio('karthik')} className='bio'>
            {showBio ? 'Bio▼':''}
          </div>
          {showBio.karthik &&
            <p> Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
            </p>
          }
        </div>
        <div className='stap-pic'>
          <img className='rounded-circle size-pic' src={austin} alt="" />
          <h3>Austin Prakesh</h3>
          <p>Director Strategy</p>
          <div onClick={() => toggleBio('austin')} className='bio'>
            {showBio ? 'Bio ▲' :''}
          </div>
          {showBio.austin &&
            <p> Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.
            </p>
          }
        </div>
      </div >
    </div >
  )
}

export default About
