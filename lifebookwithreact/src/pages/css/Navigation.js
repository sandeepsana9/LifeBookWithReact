import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../css/reactjs/Navigation.css'

const Navigation = () => {
    return (
        <div className='d-flex'>
            <nav className='side-navbar'>
                <ul>
                    <li>
                        <Link to="/css/introduction">Introduction</Link>
                    </li>
                    <li>
                        <Link to="/css/display">Display</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navigation

