import {StyleSheet} from "react-native";

export default StyleSheet.create({
  safeArea: {
    flex: 1
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'    
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', // 控制垂直居中
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0
  },
});