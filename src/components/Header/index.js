import React, { Component } from 'react';
import { Row, Col } from 'antd'
import Util from './../../util/utils'
import './index.less'
import axios from 'axios'
export default class Header extends Component {
  componentWillMount() {
    this.setState({
      userName: 'TaroSun'
    })
    
    setInterval(()=> {
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    },1000)
    this.getWeatherAPIData()
  }
  async getWeatherAPIData() {
    let [res] = await Promise.all([
      axios.get('https://www.tianqiapi.com/api/?version=v1')
    ])
    if(res.status===200) {
      let data = res.data.data[0]
      this.setState({
        weaType: data.wea, // 天气状态
        maxTemp: data.tem1,
        minTemp: data.tem2,
      })
    } else {
      console.log('error')
    }
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎， {this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">{this.state.weaType} {this.state.minTemp}-{this.state.maxTemp}</span>
          </Col>
        </Row>
      </div>
    )
  }
}