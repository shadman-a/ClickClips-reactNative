import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreenNavigator from "./Routes/HomeScreenNavigator";
import SettingsScreen from "./Screens/SettingsScreen";
import BarbersScreen from "./Screens/BarberScreen";
import AppointmentsScreen from "./Screens/AppointmentScreen";
import AppointmentScreenNavigator from "./Routes/AppointmentScreenNavigator";
import Login from "./Screens/Login/Login";
import LoginNavigator from "./Routes/LoginNavigator";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./redux/reducers";

const Tab = createBottomTabNavigator();
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <LoginNavigator />
        </Provider>
      </>
    );
  }
}
