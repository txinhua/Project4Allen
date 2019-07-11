import React, {Component} from "react";
import {ImageBackground, TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles";

export default class Menu extends Component {
  static defaultProps = {
    disable: false
  };
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    style: PropTypes.style,
    disabled: PropTypes.bool
  };
  _menuClicked = () => {
    this.props.onPress(this.props.id);
  };

  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    let menu = this.props.menu;
    return (
      <TouchableOpacity
        style={[styles.menu, this.props.style]}
        onPress={this._menuClicked}
        activeOpacity={opacity}>
        <ImageBackground style={styles.menu} source={menu} resizeMode="stretch">
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}