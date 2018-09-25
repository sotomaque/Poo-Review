import React, { Component } from 'react'
import { Drawer, View } from 'native-base'
import { Navigator } from 'react-native'

import SettingsStore from './stores/settingsStore'
import AuthStore from './stores/authStore'
import MatchStore from './stores/matchStore'

import SplashScene from './scenes/splashScene'
import LoginScene from './scenes/loginScene'
import MatchScene from './scenes/matchScene'

import theme from './theme/base-theme'

const settings = new SettingsStore()
const authStore = new AuthStore()
const matchStore = new MatchStore()

export default class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
     
      store: {
        settings: settings,
        auth: authStore,
        matches: matchStore
      },
      theme: theme
    }
  }

  renderScene(route, navigator) {
    switch(route.title) {
      case 'Splash': {
        return <SplashScene {...route.passProps} navigator={navigator}/>
      }
      case 'Login': {
        return <LoginScene {...route.passProps} navigator={navigator} />
      }
      case 'Match': {
        return <MatchScene {...route.passProps} navigator={navigator} />
      }
      default: {
        return null
      }
    }
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }

  render() {
    return (
      <Navigator
        ref={(ref) => this._navigator = ref}
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          title: "Splash",
          passProps: {
            stores: this.state.store,
            theme: this.state.theme
          }
        }}
      />
    )
  }
}