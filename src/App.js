import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props.testStore);

    return (
      <div>
        <input type="text" />
        <button>Add track</button>
        <ul>
          {this.props.testStore.map((track, index) =>
            <li key={index}>{track}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect( //получаем в качестве props для компонента <App /> данные из store
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
