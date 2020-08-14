import React from 'react'
import { Row, Col } from 'antd'


export default function NotFound() {

  return (
    <Row justify='center' align='center' >
      < Col span={14}>
        <img src="/NotFound.jpg" alt="404Error" />
      </Col >
    </Row >
  )
}