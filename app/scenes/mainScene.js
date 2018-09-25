import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Header, Body, Title } from 'native-base';

export default class MainScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0
    }

  }

  handleTabPress(tab) {
    this.setState({ selectedTab: tab })
  }


  render() {

    return (
      <Container>
      <Header>
        <Body>
            <Title>Poo Review</Title>
        </Body>
      </Header>
      <TabBarIOS>
        <TabBarIOS.Item
          title="Discover"
          icon={require('../assets/poop.png')}
          selected={this.state.selectedTab === 0}
          onPress={this.handleTabPress.bind(this, 0)}
        >
          
        </TabBarIOS.Item>
        <TabBarIOS.Item 
          title="Add a Poop"
          icon={require('../assets/poop.png')}
          selected={this.state.selectedTab === 1}
          onPress={this.handleTabPress.bind(this, 1)}
        >
          
        </TabBarIOS.Item>
      </TabBarIOS>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 50,
  },
  view: {
    backgroundColor: '#fed',
    flex: 1
  }
});

