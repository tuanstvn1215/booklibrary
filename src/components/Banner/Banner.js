import React, { useEffect, useState } from 'react'
import { Col, Container } from 'reactstrap'
import './Banner.css'
export default function Banner(props) {
    const src = ['/img/book1.png', '/img/book2.png', '/img/bull.png']
    const [index, setIndex] = useState(0)
    useEffect((didMount) => {
        const x = setInterval(handleRightClicked, 2000)
        return () => {
            clearInterval(x)
        }
    })
    const handleLeftClicked = () => {
        if (index >= 1) setIndex(index - 1)
        else {
            setIndex(src.length - 1)
        }
    }
    const handleRightClicked = () => {
        if (index < src.length - 1) setIndex(index + 1)
        else {
            setIndex(0)
        }
    }
    return (
        <Container fluid={true} className='Banner'>
            <Col lg='12' className='Banner-arrow'>
                <div className='Banner-arrow-left'>
                    <i
                        class='fas fa-arrow-circle-left'
                        onClick={handleLeftClicked}
                    />
                </div>
                <div className='Banner-arrow-right'>
                    <i
                        class='fas fa-arrow-circle-right'
                        onClick={handleRightClicked}
                    />
                </div>
            </Col>
            <div className='Banner-inner'>
                <Col lg='12'>
                    <div className='Banner-left'>
                        <h1>
                            Read <span>your</span>
                        </h1>
                        <h1>
                            favourite <span>Book</span>
                        </h1>
                        <h1>
                            <span>Today</span>
                        </h1>
                    </div>

                    <div className='Banner-right'>
                        <img src={src[index]} alt={src[index]} width='300px' />
                    </div>
                </Col>
            </div>
        </Container>
    )
}
