import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store'
import {Provider} from 'react-redux';
import {fetchVideos} from './actions'
import './App.css';

function render(){
    ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

store.dispatch(fetchVideos('bobby hill')).then(render)
