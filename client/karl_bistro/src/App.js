import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/home/NavBar";
import RestaurantContainer from './containers/RestaurantContainer';

// const firstChild = props => {
//   const childrenArray = React.Children.toArray(props.children);
//   return childrenArray[0] || null;
// };

function App() {
  return (
    <div className="app">
      <NavBar />
      <RestaurantContainer/>
    </div>
  );
}

export default App;
