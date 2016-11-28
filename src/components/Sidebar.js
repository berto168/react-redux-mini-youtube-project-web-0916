import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swapVideos} from '../actions';

function Sidebar (props) {

  function handleClick(event){
    props.swapVideos(props.mainVideo, props.sidebarVideos[event.target.id])
  }

  const videos = props.sidebarVideos.map((video, i) => {
    return (
      <li id={i} onClick={handleClick.bind(this)}>
        <img id={i} src={video.thumbnail} />
        {video.title}
      </li>
    )
  })

  return (
    <div className="Sidebar">
      <ul>
        {videos}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    swapVideos
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
