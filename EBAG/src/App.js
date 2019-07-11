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

import getTheme from "./theme/components";
import variables from "./theme/variables/commonColor";

const Navigator = router.Navigator;
export default class App extends Component {
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
