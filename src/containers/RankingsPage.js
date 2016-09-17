import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rankings from './../components/Rankings';
import LoadingIndicator from './../components/LoadingIndicator';
import { getRankings } from './../actions/Actions';

const loadPageData  = ( { getRankings, params: { division='argent', season='2' } } ) => {
  getRankings(division, season);
};


class RankingsPage extends Component {
  
  componentWillMount () {
    loadPageData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    loadPageData(nextProps);
  }

  render() {
    return (
      <div className="container rankingsPage">
        <Rankings list={this.props.rankings}/>
        { this.props.gettingRankings && <LoadingIndicator /> }
      </div>
    );
  }

}

const mapStateToProps = ( { rankings, gettingRankings }, { params: { division='argent', season='2' } } ) => ({
  rankings: rankings[`${division}${season}`],
  gettingRankings,
});

export default connect(mapStateToProps, {
  getRankings
})(RankingsPage);
