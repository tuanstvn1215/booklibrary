import classNames from 'classnames'
import './Header.css'
import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode'
import { Container } from 'reactstrap'
import React, { useState, useEffect } from 'react'
import Navigator from '../Navigator/Navigator'
import Logo from '../Logo/Logo'
export default function Header(props) {
    const [sticky, setSticky] = useState(false)
    function handleScroll() {
        let y = window.pageYOffset
        if (y > 150 && sticky === false) {
            setSticky(true)
        } else {
            if (y <= 150 && sticky === true) {
                setSticky(false)
                console.log(false)
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    console.log(sticky)
    return (
        <div className={classNames('Header', [{ sticky: sticky }])}>
            <Container fluid={true} className='Header-inner'>
                <div className='Header-left'>
                    <Logo />
                    <Navigator />
                </div>
                <div className='Header-right'>
                    <div className='Header-right-item'>
                        <ToggleDarkMode></ToggleDarkMode>
                    </div>
                    <div className='Header-right-item'>
                        <i className='far fa-heart' />
                    </div>
                    <div className='Header-right-item'>
                        <i className='fas fa-shopping-cart' />
                    </div>
                    <div className='Header-right-item'>
                        <i className='fas fa-user' />
                    </div>
                </div>
            </Container>
        </div>
    )
}
