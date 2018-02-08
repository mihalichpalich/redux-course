import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

const CarsList = ({cars}) => {
  const showList = () => {
    return cars.map((car) => {
      return (
        <li onClick={() => select(car)} key={car.id}>{car.name}</li>
      );
    });
  };

  return (
    <ol>
      {showList()}
    </ol>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({select: select}, dispatch); //делаем экшн select свойством
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsList);