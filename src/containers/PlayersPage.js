import { connect } from 'react-redux';
import Players from './../components/Players';

const mapStateToProps = ( { playerNames, playersList } ) => ({
  playerNames,
  playersList
});

export default connect(mapStateToProps)(Players);


