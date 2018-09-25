import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { Form, Item, Input, Label, Icon } from 'native-base'
import Login from '../components/login'
import { observer } from 'mobx-react/native'

@observer
export default class LoginScene extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { theme, stores } = this.props
    return (
      <View style={style.container}>
          <Image style={style.loginBackground} source={stores.settings.LoginBG}>
             <View style={style.loginForeground}>
                <Login {...this.props}/>
             </View>
          </Image>
      </View>
    
    )
  }
}
const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  loginBackground: {
    flex:1,
    width: null,
    height: null
  },
  loginForeground: {
    flex:1,
    marginTop: Dimensions.get('window').height/2.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 90,
    bottom: 0
  }
})
