import React from 'react';
import ScheduleListContainer from '../containers/ScheduleListContainer';
import { Row, Col } from 'antd';

export default function Home() {
  return (
    <Row justify='center'>
      <Col span={16}>
        <ScheduleListContainer />
      </Col>
    </Row>
  );
}
