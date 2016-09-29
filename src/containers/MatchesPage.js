import React, { Component } from 'react';
import { connect } from 'react-redux';
import Matches from './../components/Matches';
// import LoadingIndicator from './../components/LoadingIndicator';
import { getMatches, GET_MATCHES_REQUEST } from './../actions/Actions';

const loadPageData  = ( { getMatches } ) => {
  getMatches();
};


class MatchesPage extends Component {
  
  componentWillMount () {
    loadPageData(this.props);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.params.season !== this.props.params.season || nextProps.params.division !== this.props.params.division) {
  //     loadPageData(nextProps);
  //   }
  // }

  render() {
    return (
      <div className="container matches-container">
        <Matches {...this.props.matchesProps} />
      </div>
    );
  }

}

const mapStateToProps = state => ({
  matchesProps: {
    matches: state.entities.matches,
    matchList: state.lists.matchList,
    players: state.entities.playerNames
  }
  // isLoading: state.loading[GET_MATCHES_REQUEST]
});

const mapDispatchToProps = {
  getMatches
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchesPage);
