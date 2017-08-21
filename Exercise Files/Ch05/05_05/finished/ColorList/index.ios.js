import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator
} from 'react-native'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
import WebPage from './components/WebPage'

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
            case 'Web Page' :
                return <WebPage uri={route.uri}
                          onBack={() => navigator.pop()} />
            default :
                return <ColorList onColorSelected={
                         (color) => navigator.push({
                           name: 'Color Info',
                           color
                         })}
                         onInfoButtonPress={
                           () => navigator.push({
                             name: 'Web Page',
                             uri: 'https://www.w3schools.com/colors/colors_names.asp'
                           })
                         } />
          }
        }} />
    )
  }
}

AppRegistry.registerComponent('ColorList', () => App)
