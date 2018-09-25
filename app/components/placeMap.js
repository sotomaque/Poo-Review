import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps'

export default class PlaceMap extends Component {
  render() {

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 39.749632,
            longitude: -105.000363,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0201,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});