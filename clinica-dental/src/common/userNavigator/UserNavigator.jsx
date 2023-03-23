import React from 'react'
//render
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigator } from '../Navigator/Navigator';
//import './ProfileNavigator.css'

    export const UserNavigator = () => {
    return (
        <Container>
            <Row>
                <Col className='profileButton'>
                    <Navigator className={'dissableButton'} route={'Patients'} destination={'/profile'}/>
                    <Navigator className={'dissableButton'} route={'Appointments'} destination={'/appointments'}/>
                    <Navigator className={'dissableButton'} route={'GetInfoProfile'} destination={'/profile'}/>
                    <Navigator className={'dissableButton'} route={'GetUserProfile'} destination={'/profile'}/>
                </Col>
            </Row>
        </Container>
    );
};