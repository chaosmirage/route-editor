import styled from 'styled-components'

export const PointsListContainer = styled.div`
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 16px;
`;

export const AddPointForm = styled.form`
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 1;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  button {
    margin-bottom: 8px;
  }
`;

export const PointContainer = styled.div`
  display: flex;
  border: 1px dashed gray;
  padding: 0.5rem 1rem;
  margin-bottom: .5rem;
  background-color: white;
  cursor: move;
  opacity: ${({ isDragging }) => {
    return isDragging ? 0 : 1;
  }};

  button {
    margin-left: auto;
  }
`;

export const PointName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
