import React from 'react';
import Activity from './Activity';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ActivityList(props){
  return (
    <div>
      <p> *activity list will go here</p>
    </div>
  );
}

ActivtyList.propTypes = {
  activityList: PropTypes.object,
  activityId: PropTypes.string
};

export default ActivityList;
