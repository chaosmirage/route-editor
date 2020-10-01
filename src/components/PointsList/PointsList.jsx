import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { Point } from './Point';
import { ELEMENTS_NAMES } from '../../constants';

const {
  ADD_POINT_BUTTON,
  POINT_NAME_INPUT,
} = ELEMENTS_NAMES;

const reorderList = (list, dragIndex, hoverIndex) => {
  const clonedList = [...list];
  const [deletedItem] = clonedList.splice(dragIndex, 1);
  clonedList.splice(hoverIndex, 0, deletedItem);
  return clonedList;
};

const PointsList = ({
  points,
  addPoint,
  center,
  deletePoint,
  setPoints,
}) => {
  const [pointName, changePointName] = useState('');

  const handleChangePointName = useCallback((e) => {
    changePointName(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    addPoint({ id: uniqueId(), name: pointName, coordinates: center });

    changePointName('');
  }, [pointName, center, addPoint]);

  const handleDeletePoint = useCallback((id) => {
    return () => {
      deletePoint(id);
    };
  }, [deletePoint]);

  const movePoint = useCallback((dragIndex, hoverIndex) => {
    const reordered = reorderList(points, dragIndex, hoverIndex);

    setPoints(reordered);
  }, [points, setPoints]);

  const renderPoint = (point, index) => {
    return (
      <Point
        key={point.id}
        index={index}
        id={point.id}
        text={point.name}
        movePoint={movePoint}
        onDelete={handleDeletePoint}
      />
    )
  };

  const isPointNameEmpty = pointName === '';

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          data-test={POINT_NAME_INPUT}
          type="text"
          value={pointName}
          onChange={handleChangePointName}
        />
        <button
          data-test={ADD_POINT_BUTTON}
          disabled={isPointNameEmpty}
        >
          Добавить
        </button>
      </form>
      { points.map((point, index) => renderPoint(point, index)) }
    </>
  );
};

PointsList.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
  center: PropTypes.arrayOf(PropTypes.number),
  addPoint: PropTypes.func.isRequired,
  deletePoint: PropTypes.func.isRequired,
  setPoints: PropTypes.func.isRequired,
};

export default PointsList;
