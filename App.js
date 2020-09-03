import * as React from "react";
import LoginNavigator from "./Routes/LoginNavigator";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./redux/reducers";

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
