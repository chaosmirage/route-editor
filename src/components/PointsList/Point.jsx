import React, { useRef } from 'react';
import { result } from 'lodash';
import { useDrag, useDrop } from 'react-dnd';
import { PointContainer, PointName } from './PointsList.styled';
import { ELEMENTS_NAMES } from '../../constants';

const {
  POINTS_LIST_ITEM,
  DELETE_LIST_ITEM_BUTTON,
} = ELEMENTS_NAMES;

const ItemTypes = {
  POINT: 'point',
};

export const Point = ({ id, text, index, movePoint, onDelete }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.POINT,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = result(ref, 'current.getBoundingClientRect');

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      movePoint(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.POINT, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <PointContainer
      ref={ref}
      isDragging={isDragging}
      data-test={`${POINTS_LIST_ITEM}-${id}`}
    >
      <PointName title={text}>
        {text}
      </PointName>
      <button
        data-test={`${DELETE_LIST_ITEM_BUTTON}-${id}`}
        type="button"
        onClick={onDelete(id)}
      >
        Удалить
      </button>
    </PointContainer>
  );
};
