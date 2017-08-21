import React, { Component } from 'react'
import {
  AppRegistry,
  Alert
} from 'react-native'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'

class App extends Component {
  render() {
    return (
      <ColorInfo backgroundColor="yellow"
        onSelect={() => Alert.alert('screen touched')} />
    )
  }
}

AppRegistry.registerComponent('ColorList', () => App)
