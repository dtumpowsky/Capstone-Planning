import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TrailDisplay = ({ dispatch, trails }) => {
  const { name, location, difficulty, length, trailArray, arrayPosition, id } = trail;
  let action;
  return (
    <div>
      <h1>{title}</h1>
      <h4>{location}</h4>
      <h4>{difficulty}</h4>
      <h4>{length}</h4>
      <hr/>
    </div>
  );
};

TrailDisplay.propTypes = {
  trails: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  difficulty: PropTypes.string,
  length: PropTypes.string,
  location: PropTypes.string,
  trailArray: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  const trail = state.trailsById[state.currentTrailId];
  const trailInfo = {
    id: trail.trailId,
    artist: trail.artist,
    title: trail.title,
    trailArray: trail.trailArray,
    arrayPosition: trail.arrayPosition
  };
  return {
    trail: trailInfo
  };
};

export default connect(mapStateToProps)(TrailDisplay);
