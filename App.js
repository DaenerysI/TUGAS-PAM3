import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {  }
  render() { 
    return (  
      <View style = {{flex: 1}}>
        <View style= {{backgroundColor : '#2196f3'}}>
          <Text>Healing ID</Text>
        </View>
      </View>
    );
  }
}
 
export default App;