//base
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import {connect} from 'react-redux';
import Menu from './Menu';
import MenuModel from './../data/Menu';
import Base from './Base';

class Rabbitystudy extends Component {  
 
  _menuDetail = (menuId) => {
    this.props.navigation.push(menuId);
  }

  _goHome = () => {
    this.props.navigation.navigate('rabbitStudy');
  }

  render() {
    return (
      <Base content = { this._render() }/>
    )
  }

  _render() {
    let ktszMenuModel = MenuModel.fromObject({icon: require('./../../resources/img-menu/ktsz.png'), name: 'camera'})
    let gslsMenuModel = MenuModel.fromObject({icon: require('./../../resources/img-menu/gsls.png'), name: 'scanner'})
    return(
      <View style={styles.container}>
        <View style={styles.menuContainer}> 
          <Menu style={styles.menu} menu={ktszMenuModel.icon} id={ktszMenuModel.name} disabled={true} onPress={this._menuDetail}/>
          <Menu style={styles.menu} menu={gslsMenuModel.icon} id={gslsMenuModel.name} disabled={true} onPress={this._menuDetail}/>
        </View>
        <Image style={styles.bottomIcon} source={require('./../../resources/img-menu/icon.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    margin: 16
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end', // 控制垂直居中
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', // 控制垂直居中
    justifyContent: 'center',
    marginTop: 64
  },
  bottomIcon:{
    width: 52,
    height: 64,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0
  }
});

export default connect(store => {
  return store;
})(Rabbitystudy);
