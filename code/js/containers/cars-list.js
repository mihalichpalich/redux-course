import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const CarsList = ({cars}) => {
  const showList = () => {
    return cars.map((car) => {
      return (
        <li key={car.id}>{car.name}</li>
      );
    });
  };

  return (
    <ol>
      {showList()}
    </ol>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cars: state.cars
//   };
// };

export default connect(
  state => ({
    cars: state.cars
  })
)(CarsList);