import React from 'react';
import { YMaps } from 'react-yandex-maps';
import './App.css';
import Map from './Map';
import PointsList from './PointsList';
import { Layout, LeftColumn, RightColumn } from './App.styled';

function App() {
  return (
    <YMaps>
      <Layout>
        <LeftColumn>
          <PointsList />
        </LeftColumn>
        <RightColumn >
          <Map />
        </RightColumn>
      </Layout>
    </YMaps>
  );
}

export default App;
