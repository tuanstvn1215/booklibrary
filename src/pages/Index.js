import React from 'react'
import NewProduces from '../components/NewProduces/NewProduces'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
export default function Index() {
    return (
        <div className='Index'>
            <Header>
                <Link to='/'>test</Link>
                <Link to='/abc'>Home</Link>
                <div>Trang 1</div>
            </Header>
            <Banner></Banner>
            <NewProduces></NewProduces>
            <Footer></Footer>
        </div>
    )
}
