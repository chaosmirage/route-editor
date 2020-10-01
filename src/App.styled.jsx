import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftColumn = styled.div`
  flex-grow: 1;
  flex-basis: 200px;
  min-width: 200px;
  overflow-y: auto;
`;

export const RightColumn = styled.div`
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 400px;
  min-width: 0;
`;
