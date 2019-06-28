import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Hotel from './Hotel';
import { IRootReducer } from 'interfaces/state/store';
import { getHotelById } from 'pages/Hotel/state/selectors/get-hotel-by-id';
import { getHotels } from 'pages/Home/state/operations/home';

const mapStateToProps = (state: IRootReducer, props: RouteComponentProps<{ id: string }>) => ({
  hotel: getHotelById(state, props)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getHotels: getHotels
    },
    dispatch
  );

export type ConnectedProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps<{ id: string }>;

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotel) as any);
