import React, { Component } from "react";
import Dashboard from "./js/screens/Dashboard";
import { StackNavigator } from "react-navigation";
import colors from "~theme/colors";

export default class App extends Component {
  render() {
    return <AppNavigation />;
  }
}

const AppNavigation = StackNavigator(
  {
    Dashboard: { screen: Dashboard }
  },
  {
    navigationOptions: {
      title: "HMCodify",
      headerStyle: { backgroundColor: colors.PRIMARY },
      headerTintColor: colors.WHITE
    }
  }
);
