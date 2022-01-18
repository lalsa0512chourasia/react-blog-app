import React from 'react'
import {Link} from 'react-router-dom';
import   './Style.css'

const Header = () => {
    return (
        <>
        <div className='header'>
            <p className='the'>The</p>
            <h1 className='si'>Siren</h1>
        </div>

        <div className='navbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/bollywood'>Bollywood</Link></li>
                <li><Link to='/technology'>Technology</Link></li>
                <li><Link to='/hollywood'>Hollywood</Link></li>
                <li><Link to='/fitness'>Fitness</Link></li>
                <li><Link to='/food'>Food</Link></li>

            </ul>
        </div>
        </>
    )
}

export default Header
