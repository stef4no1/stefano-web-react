import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi Im Stefano Straga`}<span className="wrap">Web developer</span></h1>
                        <p>
                            I am a full stack programming student, I like the backend and everything that has to do with web3, passionate about cryptocurrencies and programming, I would like to be able to work on it one day, my favorite programming languages are C#, PHP and JS
                        </p>
                        <button onClick={() => console.log('connect')}>Lets Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}