import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './../components/Banner';
import Nav from './../components/Nav';
import { getAllPlayers } from './../actions/Actions';


class App extends Component {

  componentWillMount () {
    this.props.getAllPlayers();
  }

  render () {
    return (
      <div className="App">
        <Banner />
        <Nav />
        { this.props.children }
      </div>
    );
  }

}


const mapDispatchToProps = {
  getAllPlayers
};


export default connect(null, mapDispatchToProps)(App);

