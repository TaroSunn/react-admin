import React, { Component } from 'react';
import menuConfig from '../../config/menuConfig'
import { Menu, Icon} from 'antd'

import './index.less'
const SubMenu = Menu.SubMenu
export default class NavLeft extends Component {

  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig)
    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data)=> {
    return data.map((item)=> {
      if(item.children) {
        return (
          <SubMenu title={
            <span>
              <Icon type={item.type}></Icon>
              <span>{item.title}</span>
            </span>
          } key={item.key}
          >
            
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (<Menu.Item title={item.title} key={item.key}>
        <Icon type={item.type}></Icon>
        <span>{item.title}</span>
      </Menu.Item>)
    })
  }

  render() {
    return (
      <div>

        <div className="logo">
          <img src="/assets/logo.svg" alt=""/>
          <h1>Manager System</h1>
        </div>

        <Menu 
          mode="inline"
          theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}