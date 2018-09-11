import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import  AppNavigation  from './navigation';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    readyFlag: false,
    };
    }

     async componentWillMount() {
     await Expo.Font.loadAsync({
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
     });
     this.setState({ readyFlag: true });
    }
  render() {
    if (!this.state.readyFlag) {
      return <Expo.AppLoading/>
      }
    return (
      <Provider store={store}>
      <AppNavigation/>
      </Provider>
    );
  }
}


