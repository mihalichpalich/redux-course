import React from 'react';
import CarsList from '../containers/cars-list';

const WebPage = () => ( //круглые скобки заменяют return, {} не нужны
  <div>
    <h2>Cars:</h2>
    <CarsList />
    <hr/>
    <h3>Details:</h3>
  </div>
);

export default WebPage;