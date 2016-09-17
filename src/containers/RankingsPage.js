import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rankings from './../components/Rankings';
import { getRankings } from './../actions/Actions';

const loadPageData  = ( { getRankings, params: { division='argent', season='2' } } ) => {
  getRankings(division, season);
};


class RankingsPage extends Component {
  
  componentWillMount () {
    loadPageData(this.props);
  }

  render() {
    return (
      <div className="rankingsPage">
        <Rankings list={this.props.rankings}/>
      </div>
    );
  }
}

const mapStateToProps = ( { rankings } ) => ({
  rankings
});

export default connect(mapStateToProps, {
  getRankings
})(RankingsPage);
