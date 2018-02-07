import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const CarsList = () => {
  return (
    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>
  );
};

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
};

export default connect(mapStateToProps)(CarsList);