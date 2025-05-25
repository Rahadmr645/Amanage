import React, { useContext } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { context } from '../context/AuthContext.jsx';


const Navbar = () => {
    const { a } = useContext(context);
    return (
        <div className='mt-5 ms-3 me-3 nav text-light d-flex justify-content-between' style={{ height: '10px' }}>
            <div className=' col-3 d-flex justify-content-center align-items-center'>
                <p style={{
                    background: 'linear-gradient(to right, green, black)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }} className='h3 logo'>AMANAGE</p>
            </div>
            <div className='col-6'>
                <ul className='nav-item d-flex justify-content-center'>
                    <li style={{ cursor: 'pointer' }} className='nav-link'>Home</li>
                    <li style={{ cursor: 'pointer' }} className='nav-link'>About</li>
                    <li style={{ cursor: 'pointer' }} className='nav-link'>Menu</li>
                    <li style={{ cursor: 'pointer' }} className='nav-link'>Contact us</li>
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
            <p>{a}</p>
        </div>
    )
}

export default Navbar