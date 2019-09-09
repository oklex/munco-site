import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

// include props here eventually

class Footer extends React.Component <{},{}> {

    
    render() {
        return (
            <div className='row justify-content-around footer short-link'>
                <div className='col-sm-4'>
                    <Link to='/'><h5>Home</h5></Link>
                    <Link to='/features'><h5>Features+</h5></Link>
                    <Link to='/calendar'><h5>Calendar+</h5></Link>
                </div>
                <div className='col-sm-4'>
                    <Link to='/about'><h3>About+</h3></Link>
                    <Link to='/about/team'><p>+ team</p></Link>
                    <Link to='/about/projects'><p>+ projects</p></Link>
                    <Link to='/about/apply'><p>+ apply</p></Link>
                    <div className='socials'>
                        <button className='btn btn-outline-light'><a href='https://www.facebook.com/BCmunco'>Facebook</a></button>
                        <button className='btn btn-outline-light'><a href='https://www.instagram.com/bc.munco/'>Instagram</a></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer