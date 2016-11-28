import React from 'react';
import {connect} from 'react-redux';

function MainVideo (props) {
  return (
    <div className="MainVideo">
      <iframe width="640" height="360" src={props.mainVideo.src}>
      </iframe>
    </div>
  )
}

function mapStateToProps(state) {
  return {mainVideo: state.mainVideo}
}

export default connect(mapStateToProps)(MainVideo);
