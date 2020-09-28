import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import {AtTabBar} from 'taro-ui'
import Home from '../home/home'
import Collect from '../collect/collect'
import Mine from '../mine/mine'

import './index.less'

export default class Index extends Component {

  constructor() {
    super();
    this.state = {
      current: 0
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleClick(value) {
    console.log(value)
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <View>
        <View style={{display: this.state.current === 0 ? 'show' : 'none'}}>
          <Home></Home>
        </View>
        <View style={{display: this.state.current === 1 ? 'show' : 'none'}}>
          <Collect></Collect>
        </View>
        <View style={{display: this.state.current === 2 ? 'show' : 'none'}}>
          <Mine></Mine>
        </View>
        <AtTabBar
          fixed
          tabList={[
            {title: '首页', iconType: 'home'},
            {title: '收藏', iconType: 'star'},
            {title: '我的', iconType: 'user'}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>

    )
  }
}
