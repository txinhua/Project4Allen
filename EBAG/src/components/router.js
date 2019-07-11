// API For Navigation https://reactnavigation.org/docs/en/api-reference.html
import {createStackNavigator, createAppContainer} from "react-navigation";
import RabbitStudy from './Rabbitstudy';
import Camera from './Camera';
import ScannerScreen from './Scanner';

//add your screen config here
const StackRouteConfigs = {
    rabbitStudy: {
      screen: RabbitStudy,
      navigationOptions: {
        header: (navigation, defaultHeader) => {
            visible: true  
        },
      }
    },
    camera: {
      screen: Camera,
      navigationOptions: {
        header: (navigation, defaultHeader) => {
            visible: true  
        },
      }
    },
    scanner: {
      screen: ScannerScreen,
      navigationOptions: {
        header: (navigation, defaultHeader) => {
            visible: true  
        },
      }
    },
};

// StackNavigator 导航组件，用来实现各个界面跳转
const stackNavigator = createStackNavigator(StackRouteConfigs);
const Navigator = createAppContainer(stackNavigator);
export default { Navigator };