import React , {Component} from 'react';
import {View } from 'react-native';
// import HomeComponent from './src/component/HomeComponent';
// import HomeComponent from './src/component/HomeComponent';
import Header from './src/component/Header';
import AlbumList from './src/component/AlbumList';
// import BlinkApp from './src/component/StateChange';

const App = () => {
  return (
    <View style = {{flex : 1}}>
    <Header headerText ={'Header'} />
    <AlbumList />
    </View>
    // <BlinkApp />
  )

}
export default App ;

