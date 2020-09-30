import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

const PointsList = ({
  points,
  addPoint,
  center,
  deletePoint,
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
  }, [deletePoint])

  const isPointNameEmpty = pointName === '';

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={pointName} onChange={handleChangePointName}/>
        <button disabled={isPointNameEmpty}>
          Добавить
        </button>
      </form>
      { points.map(({ name, id }) => {
        return (
          <div key={id}>
            {name}
            <button
              type="button"
              onClick={handleDeletePoint(id)}
            >
              Удалить
            </button>
          </div>
        );
      })}
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
};

export default PointsList;
