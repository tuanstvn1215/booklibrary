import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'reactstrap'
import Coppyright from './Coppyright'
export default function Footer(props) {
    return (
        <div className='Footer'>
            <Container>
                <Row>
                    <Col lg='4'>sfdf</Col>
                    <Col lg='4'>sfdf</Col>
                    <Col lg='4'>sfdf</Col>
                    <Col lg='12'>
                        <Coppyright></Coppyright>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
