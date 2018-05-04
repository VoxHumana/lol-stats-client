import {
  Container,
  Row,
  Col, Alert
} from 'reactstrap'
import React from 'react'
import '../App.css'
import SummonerSearchBox from '../containers/SummonerSearchBox'
import HeaderImage from './HeaderImage'
import Spinner from './Spinner'
import Background from '../assets/background.jpg'

export default function App (props) {
  return (
    <div className='App'>
      <Container>
        <Row>
          <Col xs='12'>
            <HeaderImage />
          </Col>
        </Row>
        <Row>
          <Col className='text-center' xs='12'>
            <SummonerSearchBox
              onFetchSummonerMatches={props.onFetchSummonerMatches} />
            <Alert className='error' color='danger' isOpen={props.error.display}>{props.error.message}</Alert>
            <Spinner visible={props.displaySpinner} />
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Container>
              {props.matches}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>)
}
