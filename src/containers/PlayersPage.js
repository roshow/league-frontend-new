import { connect } from 'react-redux';
import Players from './../components/Players';

const mapStateToProps = state => ({
  playerNames: state.entities.playerNames,
  playerList: state.lists.playerList,
});

export default connect(mapStateToProps)(Players);


