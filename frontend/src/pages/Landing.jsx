import React from 'react'
import landing from '../assets/landing.png'
import ecosystem from '../assets/ecosystem.png'
import presslogos from '../assets/press-logos.png'
import { FaArrowRightLong } from "react-icons/fa6";
import pricingo from '../assets/pricing-eq.svg';
import othersPrice from '../assets/other-trades.svg'
import indexEcu from '../assets/index-education.svg'

const Landing = () => {
    return (
        <div>
            {/* 1st part */}
            <div className='d-flex flex-column align-items-center' style={{ marginTop: '100px' }}>
                <img style={{ width: '580px', height: '300px' }} src={landing}  alt="" />
                <div className='d-flex flex-column align-items-center mt-4'>
                    <h1>Invest in everything</h1>
                    <p >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button style={{width:'300px'}} className='btn btn-primary mt-3'>
                        Sign up for free
                    </button>
                </div>
            </div>

            {/* second part */}
            <div className='d-flex justify-content-between' style={{ marginTop: '200px' }}>
                <div className='col-6'>
                    <h2>Trus with confidence</h2>
                    <div>
                        <h3>Customer-first always</h3>
                        <p style={{ maxWidth: '400px' }}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div>
                        <h3>No spam or gimmicks</h3>
                        <p style={{ maxWidth: '400px' }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div>
                        <h3>The Zerodha universe</h3>
                        <p style={{ maxWidth: '400px' }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div>
                        <h3>Do better with money</h3>
                        <p style={{ maxWidth: '400px' }}>With initiatives like <span>Nudge</span>  and <span>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-6'>
                    <img style={{ width: '500px' }} src={ecosystem} alt="" />
                    <ul className='nav d-flex gap-3 mt-4'>
                        <li>Explore our products <span><FaArrowRightLong /></span></li>
                        <li>Try Kite demo <span><FaArrowRightLong /></span> </li>
                    </ul>
                </div>
            </div>
            <div className='mt-4 mb-5 d-flex justify-content-center'>
                <img src={presslogos} alt="" />
            </div>
            {/* third part */}
            <div className='mt-4 d-flex flex-column gap-3'>
                <h1>Unbeatable pricing</h1>
                <div className='d-flex align-items-center justify-content-between '>
                    <p className='col-6' style={{ maxWidth: '500px' }}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div className='d-flex gap-5 col-6'>
                        <div className='d-flex align-items-center position-relative'>
                            <img style={{ width: '100px' }} src={pricingo} alt="" />
                            <p style={{ fontSize: '10px', margin: '0px', maxWidth: '70px', position: 'absolute', right: '-40px', bottom: '15px' }}> Free account opening</p>
                        </div>
                        <div className='d-flex align-items-center gap-4 position-relative'>
                            <img style={{ width: '100px' }} src={pricingo} alt="" />
                            <p style={{
                                fontSize: '10px', margin: '0px', maxWidth: '100px',
                                position: 'absolute', right: '-70px', bottom: '-5px'
                            }} >Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='d-flex align-items-center position-relative ms-3'>
                            <img style={{ width: '100px', margin: '0px' }} src={othersPrice} alt="" />
                            <p style={{ fontSize: '10px', margin: '0px', maxWidth: '70px', position: 'absolute', right: '-60px', bottom: '10px' }} >Intraday and F&O</p>
                        </div>
                    </div>

                </div>
                <div className='d-flex mt-5 align-items-center mb-4 '>
                    <div className='col-6'>
                        <img src={indexEcu} alt="" />
                    </div>
                    <div className='col-6 d-flex flex-column gap-3'>
                        <h1>Free and open market education</h1>
                        <div>
                            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <ul className='nav'>
                                <li>Varsity <span><FaArrowRightLong /></span> </li>
                            </ul>

                        </div>
                        <div>
                            <ul className='nav'>
                                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                                <li>TradingQ&A <span><FaArrowRightLong /></span></li>
                            </ul>

                        </div>

                    </div>
                </div>

            </div>
            {/* forth part */}
            <div className='d-flex flex-column gap-4 align-items-center mt-5 '>
                <h1>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button style={{width:'300px'}} className='btn btn-primary '>Sign up for free</button>
            </div>
        </div>
    )
}

export default Landing