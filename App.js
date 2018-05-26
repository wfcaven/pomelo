// 引入公共组件
import React, { Component } from "react";
import {createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import { StackNavigator } from "react-navigation";

// 引入自定义组件
import saga from "./src/utils/saga";
import reducers from "./src/utils/reducers";

// 引入自定义组件
import HomePage from "./src/pages/HomePage";
import VoteIndexPage from "./src/pages/VoteIndexPage";
import DelegatebwPage from "./src/pages/DelegatebwPage";
import UnDelegatebwPage from "./src/pages/UnDelegatebwPage";
import NodeListPage from "./src/pages/NodeListPage";

// Navigator
const Navigator = StackNavigator(
  {
    DelegatebwPage: { screen: DelegatebwPage },
    UnDelegatebwPage: { screen: UnDelegatebwPage },
    VoteIndexPage: { screen: VoteIndexPage },
    HomePage: { screen: HomePage },
    NodeListPage: { screen: NodeListPage },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);
// create SagaMiddleware
const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);

// main component
export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={myStore}>
        <Navigator/>
      </Provider>
    );
  }
}
