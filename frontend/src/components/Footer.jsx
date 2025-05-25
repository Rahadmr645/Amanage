import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {

    return (
        <div style={{backgroundColor:'rgb(245, 237, 237)'}}>
            <div className='p-4  d-flex justify-content-between mt-5'>
                <div className='d-flex flex-column'>
                    <p className=' h3 linear-text'>ZERODHA</p>
                    <p >2010-2025, Zerodha Broking Ltd. <br />
                        All rights reserved.</p>
                    <div className='d-flex gap-2 fs-5'>
                        <p><FaSquareXTwitter /></p>
                        <p><FaFacebookSquare /></p>
                        <p><FaInstagram /></p>
                        <p><FaLinkedin /></p>
                    </div>
                    <div className='d-flex gap-2 fs-5'>
                        <p><FaYoutube /></p>
                        <p><FaWhatsappSquare /></p>
                        <p><FaTelegram /></p>
                    </div>
                </div>
                <div>
                    <p className='h5'>Account</p>
                    <ul className='nav d-flex flex-column gap-1'>
                        <li>
                            Open demat account
                        </li>
                        <li>
                            Minor demat account
                        </li>
                        <li>
                            NRI demat account
                        </li>
                        <li>
                            Commodity
                        </li>
                        <li>
                            Dematerialisation
                        </li>
                        <li>
                            Fund transfer
                        </li>
                        <li>MTF

                        </li>
                        <li>Referral program</li>
                    </ul>
                    Account</div>
                <div>
                    <p className='h5'>Support</p>
                    <ul className='nav d-flex flex-column gap-1'>
                        <li>Contact us</li>
                        <li>Support portal</li>
                        <li>How to file a complaint?</li>
                        <li>Status of your complaints</li>
                        <li>Bulletin</li>
                        <li>Circular</li>
                        <li>Z-Connect blog</li>
                        <li>Downloads</li>
                    </ul>
                </div>
                <div>
                    <p className='h5'>Company</p>
                    <ul className='nav d-flex flex-column gap-1'>
                        <li>About</li>
                        <li>Philosophy</li>
                        <li>Press & media</li>
                        <li>Careers</li>
                        <li>Zerodha Cares(CSR)</li>
                        <li>Zerodha.tech</li>
                        <li>Open source</li>
                    </ul>
                </div>

                <div>
                    <p className='h5'>Quick links</p>
                    <ul className='nav d-flex flex-column gap-1'>
                        <li>Upcoming IPOs</li>
                        <li>Brokerage charges</li>
                        <li>Market holidays</li>
                        <li>Economic calendar</li>
                        <li>Calculators</li>
                        <li>Markets</li>
                        <li>Sectors</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;