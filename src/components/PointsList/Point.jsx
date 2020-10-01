import React, { useRef } from 'react';
import { result } from 'lodash';
import { useDrag, useDrop } from 'react-dnd';
import { ELEMENTS_NAMES } from '../../constants';

const {
  POINTS_LIST_ITEM,
  DELETE_LIST_ITEM_BUTTON,
} = ELEMENTS_NAMES;

const ItemTypes = {
  POINT: 'point',
};

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
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

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      data-test={`${POINTS_LIST_ITEM}-${id}`}
    >
      {text}
      <button
        data-test={`${DELETE_LIST_ITEM_BUTTON}-${id}`}
        type="button"
        onClick={onDelete(id)}
      >
        Удалить
      </button>
    </div>
  );
};
