import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import Info from './Info';
import UserAgent from './UserAgent';
import createSagaMiddleware from 'redux-saga';
import indexSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(indexSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
          <UserAgent />
        </div>
      </Provider>
    );
  }
}

export default App;
