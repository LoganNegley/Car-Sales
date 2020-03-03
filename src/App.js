import React from 'react';
import {connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {buyItem, removeFeature} from './actions.js/index';

const App = (props) => {
  console.log(props)


  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyFeature={buyFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// mapStateToProps goes here!!!!
const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice ,
    car:state.car,
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, {buyItem, removeFeature})(App);
 