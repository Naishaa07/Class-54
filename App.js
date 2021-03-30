import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component {
  render(){
    return(
      <Button color="red" title="Click Me"/>
    )
  }
}
class Acb extends Component{
  render(){
    return(
      <Button title="click me" color={this.props.color}/>
    )
  }
}
export default class App extends Component {
  displayAlert(){
    alert("hello!!")
  }
  render() {
    return (
      <View style={{marginTop: 100}}>
        <RedButton />
        <Button title="button1" color="green" onPress={this.displayAlert}/>
        <Text>My First React Component</Text>
        <Acb color="yellow"/>
      </View>
    );
  }
}