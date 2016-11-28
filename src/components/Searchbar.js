import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchVideos} from '../actions';

function Searchbar (props) {

  function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.children[0].value
    props.fetchVideos(query);
  }

  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit.bind(this)}>
        <input type="text" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchVideos
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Searchbar);
