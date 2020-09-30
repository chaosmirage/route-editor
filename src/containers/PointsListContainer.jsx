import {connect} from 'react-redux';
import PointsList from '../components/PointsList';
import {
  deletePoint,
  addPoint,
  setPoints,
} from '../actions';
import { pointsSelector, mapCenterSelector } from '../selectors';

const mapStateToProps = (state) => {
  const center = mapCenterSelector(state);
  const points = pointsSelector(state);

  return {
    center,
    points,
  }
};

const mapDispatchToProps = {
  setPoints,
  deletePoint,
  addPoint,
};

export default connect(mapStateToProps, mapDispatchToProps)(PointsList);
