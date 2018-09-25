import React, { Component } from 'react'
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Content,
  Icon,
  View,
  Button,
  Title,
  Text
} from 'native-base'
import MapView from 'react-native-maps'


import PlaceMap from '../components/placeMap'


export default class MatchScene extends Component {
  constructor(props) {
    super(props)
  }
  postScene() {
    this.props.navigator.push({
      title: 'Post',
      passProps: this.props
    })
  }

  render() {
    return (
 
   
 
       <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />



    )
  }
}