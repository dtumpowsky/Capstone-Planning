import React from 'react';
import Activity from './Activity';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <div>
      <style jsx>{`
      td:hover {
        background-color: #FFCCA0;
        color: black;
      }
    `}</style>

    <p> *activity list will go here</p>
    </div>
  );
}

ActivtyList.propTypes = {
  activityList: PropTypes.object,
  activityId: PropTypes.string
};

export default ActivityList;
