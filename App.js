import React from 'react';
import {StyleSheet, Slider, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Right, Left, Body, Icon, Text, Input, Item, Label} from 'native-base';
import CommandLine from './components/CommandLine'

export default class App extends React.Component {
  state = {
    text: 'Start . . .'
  };
  valueChange = (value) => {
    this.setState(previousState => {
        return { text: previousState.text +'\n' + 'Slider : ' + Number(value.toFixed(2)) };
      });
  }
  render() {
    
    return (
      <Container>
        <Header>
          <Body>
            <Title>Logging Text</Title>
          </Body>
        </Header>
        <Content padder style={styles.container}>
          <Slider minimumTrackTintColor='#FA9F00' step={0.1} onValueChange={this.valueChange}></Slider>
        </Content>
        <Footer  style = {styles.terminal}>
          <CommandLine bodyText={this.state.text} />
        </Footer>
        <Footer>
          <Right>
            <Text style={styles.footertext}>STNMTPW</Text>
          </Right>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  footertext: {
   marginRight: 10,
   color: '#2F7FC3'
  },
  container: {
    paddingTop: 30,
  },
  terminal: {
    height: 200,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  terminal_container: {
    paddingLeft: 10,
    paddingTop: 10
  },
});

