import React from 'react';
import {connect} from 'react-redux';
import MainVideo from './MainVideo';
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
import '../App.css';

function App (props) {
  return (
    <div className="App">
      <Searchbar />
      <MainVideo />
      <Sidebar />
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
