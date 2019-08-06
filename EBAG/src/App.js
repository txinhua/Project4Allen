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
import CodePush from "react-native-code-push"; // 引入code-push

let codePushOptions = {
  //设置检查更新的频率
  //ON_APP_RESUME APP恢复到前台的时候
  //ON_APP_START APP开启的时候
  //MANUAL 手动检查
  checkFrequency : CodePush.CheckFrequency.ON_APP_START
};
const Navigator = router.Navigator;
class App extends Component {
  codePushStatusDidChange(status) {
    switch(status) {
        case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            console.log("Checking for updates.");
            break;
        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            console.log("Downloading package.");
            break;
        case codePush.SyncStatus.INSTALLING_UPDATE:
            console.log("Installing update.");
            break;
        case codePush.SyncStatus.UP_TO_DATE:
            console.log("Up-to-date.");
            break;
        case codePush.SyncStatus.UPDATE_INSTALLED:
            console.log("Update installed.");
            break;
    }
  }

  codePushDownloadDidProgress(progress) {
    console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
  }
  //如果有更新的提示
  syncImmediate() {
    CodePush.checkForUpdate(CODE_PUSH_KEY).then((update) => {
      console.log('-------' + update)
      if (!update) {
        Toast.showLongSuccess('已是最新版本！')
      } else {
        
      }
    })
    // CodePush.sync( {
    //       //安装模式
    //       //ON_NEXT_RESUME 下次恢复到前台时
    //       //ON_NEXT_RESTART 下一次重启时
    //       //IMMEDIATE 马上更新
    //       installMode : CodePush.InstallMode.IMMEDIATE ,
    //       //对话框
    //       updateDialog : {
    //         //是否显示更新描述
    //         appendReleaseDescription : true ,
    //         //更新描述的前缀。 默认为"Description"
    //         descriptionPrefix : "更新内容：" ,
    //         //强制更新按钮文字，默认为continue
    //         mandatoryContinueButtonLabel : "立即更新" ,
    //         //强制更新时的信息. 默认为"An update is available that must be installed."
    //         mandatoryUpdateMessage : "必须更新后才能使用" ,
    //         //非强制更新时，按钮文字,默认为"ignore"
    //         optionalIgnoreButtonLabel : '稍后' ,
    //         //非强制更新时，确认按钮文字. 默认为"Install"
    //         optionalInstallButtonLabel : '后台更新' ,
    //         //非强制更新时，检查到更新的消息文本
    //         optionalUpdateMessage : '有新版本了，是否更新？' ,
    //         //Alert窗口的标题
    //         title : '更新提示'
    //       } ,
    //     } ,
    // );
  }

  componentWillMount() {
    CodePush.disallowRestart();//禁止重启
    this.syncImmediate(); //开始检查更新
  }

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
    CodePush.allowRestart();//在加载完了，允许重启
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

App = CodePush(codePushOptions)(App)

export default App
