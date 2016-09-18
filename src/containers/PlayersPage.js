import { connect } from 'react-redux';
import Players from './../components/Players';

const mapStateToProps = ( { players, playersList } ) => ({
  players,
  playersList
});

export default connect(mapStateToProps)(Players);


