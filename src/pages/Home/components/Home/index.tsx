import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import { IRootReducer } from 'interfaces/state/store';
import { getHotels } from 'pages/Home/state/operations/home';

const mapStateToProps = (state: IRootReducer) => ({
  hotels: state.home.hotels
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getHotels: getHotels
    },
    dispatch
  );

export type ConnectedProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
