import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../css/reactjs/Navigation.css'

const Navigation = () => {
    return (
        <div className='d-flex'>
            <nav className='side-navbar'>
                <ul>
                    <li>
                        <Link to="/reactjs/introduction">Introduction</Link>
                    </li>
                    <li>
                        <Link to="/reactjs/create-react-app">create-react-app</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navigation

