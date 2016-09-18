import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './../components/Banner';
import Nav from './../components/Nav';
import { getAllPlayers } from './../actions/Actions';


// const OldApp = ({ children }) => (
//   <div className="App">
//     <Banner />
//     <Nav />
//     { children }
//   </div>
// );

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

// const mapStateToProps = state => ({});


export default connect(null, {
  getAllPlayers
})(App);

