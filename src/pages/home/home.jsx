import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import {AtSearchBar, AtToast, AtTabs, AtTabsPane} from 'taro-ui'

import './home.less'

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      sourceName: "test",
      toastShow: false,
      toastContent: '',
      current: 0,
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

  handleSearchClick() {
    this.setState({
      toastShow: 1,
      toastContent: 'click search',
      currentTab: 0
    })
  }

  handleTabClick(value) {
    this.setState({
      currentTab: value
    })
  }

  render() {
    const tabList = [{title: '标签页1'}, {title: '标签页2'}, {title: '标签页3'}]
    return (
      <View className='at-col'>
        <View onClick={this.handleSearchClick.bind(this)}>
          <AtSearchBar
            showActionButton={false}
            placeholder={this.state.sourceName}
            disabled={1}
            // fixed={1}
          />
        </View>
        <AtTabs scroll={1} current={this.state.currentTab} tabList={tabList} onClick={this.handleTabClick.bind(this)}>
          <AtTabsPane current={this.state.currentTab} index={0}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.currentTab} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.currentTab} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>

        <AtToast isOpened={this.state.toastShow} text={this.state.toastContent}></AtToast>
      </View>
    )
  }
}
