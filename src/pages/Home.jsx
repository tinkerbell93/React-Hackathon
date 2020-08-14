import React from 'react'
import ScheduleListContainer from '../containers/ScheduleListContainer'
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux'


export default function Home() {
  const mode = useSelector(state => state.darkmode.mode);
  return (
    <Row justify="center">
      <Col span={16}>
        <ScheduleListContainer />
      </Col>
    </Row >
  )
}