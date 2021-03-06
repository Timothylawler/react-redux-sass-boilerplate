import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import { 
  SecondSection, 
} from './components';
import registerServiceWorker from './registerServiceWorker';

/*  Redux */
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import { 
  exampleReducer
} from './redux/reducers';
const store = createStore(combineReducers({
  exampleReducer
}));

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/second" component={SecondSection}/>
          
        </Route>
      </Router>
    </Provider>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
