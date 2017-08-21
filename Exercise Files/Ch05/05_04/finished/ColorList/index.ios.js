import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator
} from 'react-native'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Color List' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'Color Info' :
                return <ColorInfo backgroundColor={route.color}
                          onSelect={() => navigator.pop()} />
            default :
                return <ColorList onColorSelected={
                         (color) => navigator.push({
                           name: 'Color Info',
                           color
                         })
                       } />
          }
        }} />
    )
  }
}

AppRegistry.registerComponent('ColorList', () => App)
