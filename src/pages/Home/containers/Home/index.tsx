import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import { IStore } from 'interfaces/state/store';
import { getHotels } from 'pages/Home/state/operations/home';
import { setSearchValue } from 'pages/Home/state/actions/home';
import { getFilteringHotels } from 'pages/Home/state/selectors/get-filtering-hotels';

const mapStateToProps = (state: IStore) => ({
  hotels: getFilteringHotels(state)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getHotels: getHotels,
      setSearcValue: setSearchValue
    },
    dispatch
  );

export type ConnectedProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
