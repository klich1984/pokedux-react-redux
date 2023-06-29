import { Col, Row } from 'antd'
import React from 'react'
import { GithubOutlined, LinkedinFilled, MailOutlined } from '@ant-design/icons'

const ContentFooter = () => {
  return (
    <>
      <Row align='middle' justify='center' className='footer-content'>
        <Col className='footer-content-icon'>
          <a
            href='https://www.linkedin.com/in/carlosusugamartinez/'
            target='_blank'
            rel='noopener'
          >
            <LinkedinFilled />
          </a>
        </Col>
        <Col className='footer-content-icon'>
          <a href='https://github.com/klich1984' target='_blank' rel='noopener'>
            <GithubOutlined />
          </a>
        </Col>
        <Col className='footer-content-icon'>
          <a href='mailto:klich84@gmail.com' target='_blank' rel='noopener'>
            <MailOutlined />
          </a>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <small>App designed by</small>{' '}
          <a
            href='https://klich1984.github.io/carlos_usuga_portfolio'
            target='_blank'
            rel='noopener'
          >
            @klich84
          </a>
        </Col>
      </Row>
    </>
  )
}

export default ContentFooter
