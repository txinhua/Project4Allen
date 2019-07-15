/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {Provider} from 'react-redux';
import store from './store';
import router from './components/router';
import { StyleProvider } from "native-base";
import {Platform} from 'react-native';
import JPushModule from 'jpush-react-native';
import getTheme from "./theme/components";
import variables from "./theme/variables/commonColor";

const Navigator = router.Navigator;
export default class App extends Component {
  componentDidMount() {
    JPushModule.initPush();
    if (Platform.OS === 'android') {
      // 设置android端监听
      JPushModule.notifyJSDidLoad(resultCode => {
        if (resultCode === 0) {
          console.log("设置监听成功");
        }
        JPushModule.addGetRegistrationIdListener((registrationId) => {
          console.log("设备注册成功，registrationId: " + registrationId);
        });
      });
    }
    JPushModule.addReceiveNotificationListener((map) => {
      console.log("收到推送消息");
      console.log(map);
      // TODO: 处理通知消息
    });
    JPushModule.addReceiveOpenNotificationListener((map) => {
      console.log("监听到点击通知的事件");
      console.log(map);
      // TODO: 跳转界面
      
    });
  }
  
  componentWillUnmount() {
    console.log("Will clear all notifications");
    JPushModule.clearAllNotifications();
  }


  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
         <Navigator/>
        </Provider>
      </StyleProvider>
    );
  }
}
