import React from 'react'
import ScheduleListContainer from '../containers/ScheduleListContainer'
import { Row, Col } from 'antd'
import TokenService from '../services/TokenService'
import { Redirect } from 'react-router-dom';


export default function Home() {
  const token = TokenService.get();
  if (!token) {
    return (<Redirect to='/signin' />)
  }

  return (
    <Row justify="center">
      <Col span={16}>
        <ScheduleListContainer />
      </Col>
    </Row >
  )
}