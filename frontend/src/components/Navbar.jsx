import React, { useContext } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Context } from '../context/AuthContext.jsx';


const Navbar = () => {
    const { hello, rahad } = useContext(Context);
    return (
        <div className='mt-5 ms-3 me-3 nav text-light d-flex justify-content-between sticky-top' style={{ height: 'auto',background:'white' }}>
            <div className=' col-3 d-flex justify-content-center align-items-center'>
                <p className='h3 logo linear-text'>ZERODHA</p>
            </div>
            <div className='col-6'>
                <ul className='nav-item d-flex justify-content-center'>
                    <li style={{ cursor: 'pointer' }} className='nav-link'>Signup</li>
                    <li style={{ cursor: 'pointer' }} className='nav-link'>About</li>
                    <li style={{ cursor: 'pointer' }} className='nav-link'>products</li>
                    <li style={{ cursor: 'pointer' }} className='nav-link'>Pricing</li>
                    <li style={{ cursor: 'pointer' }} className='nav-link'>Support</li>

                </ul>
            </div>
            <div className=' col-3 
             d-flex justify-content-center align-items-center'>
                <div className='position-relative w-100 d-flex align-items-center' style={{ maxWidth: '300px' }}>
                    <input className='form-control ps-5' type="text" placeholder='search' />
                    <IoSearchSharp className='position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary' />
                </div>

                <button className='btn btn-outline-primary'>SignUP</button>
            </div>

        </div>
    )
}

export default Navbar