import React from 'react'
import { Container, Row } from 'reactstrap'
import './NewProduces.css'
import Produce from '../Produce/Produce'
export default function NewProduces() {
    const newProduces = [
        { img: '/img/2.jpg', title: 'loerens', author: 'loerens' },
        { img: '/img/4.jpg', title: 'loerens', author: 'loerens' },
        { img: '/img/5.jpg', title: 'loerens', author: 'loerens' },
        { img: '/img/6.jpg', title: 'loerens', author: 'loerens' },
    ]
    return (
        <div className='NewProduces'>
            <Container>
                <div className='NewProduces__Title'>
                    <h1 className='NewProduces__Title__Header'>
                        SÁCH <span>MỚI CẬP NHẬT!</span>
                    </h1>
                </div>
                <Row className='NewProduces__items'>
                    {newProduces.map((item, index) => {
                        return <Produce item={item} key={index}></Produce>
                    })}
                </Row>
            </Container>
        </div>
    )
}
