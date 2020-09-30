import { connect } from 'react-redux';
import Map from '../components/Map';
import { setCenter, updatePoint } from '../actions';
import {
  mapStateSelector,
  pointsSelector,
  pointsCoordinatesSelector,
} from '../selectors';

const mapStateToProps = (state) => {
  const mapState = mapStateSelector(state);
  const points = pointsSelector(state);
  const coordinates = pointsCoordinatesSelector(state);

  return {
    mapState,
    points,
    coordinates,
  }
};

const mapDispatchToProps = {
  setCenter,
  updatePoint,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
