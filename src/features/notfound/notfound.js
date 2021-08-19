import React from "react";
import groot from '../../images/gg.jpg';
import { BsClock, BsCardChecklist, BsCalendar, BsPerson } from "react-icons/bs";
import { Badge, Card, Col, Container, Row, Image } from "react-bootstrap";

function NotFoundPage(){

    return (
            <Container>
                <Row>
                    <Image variant="top" className="profile-image" src={groot} roundedCircle />
                </Row>
                <Row>
                    <h1 style= {{ textAlign: 'center' }}>I am Groooot</h1>
                </Row>
            </Container>
                
        
    );
}

export default NotFoundPage;
