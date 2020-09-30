import React from 'react';
import { Provider } from 'react-redux';
import { YMaps } from 'react-yandex-maps';
import configureStore from './configureStore';
import './App.css';
import {
  PointsListContainer,
  MapContainer,
} from './containers';
import { Layout, LeftColumn, RightColumn } from './App.styled';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <YMaps>
        <Layout>
          <LeftColumn>
            <PointsListContainer />
          </LeftColumn>
          <RightColumn >
            <MapContainer />
          </RightColumn>
        </Layout>
      </YMaps>
    </Provider>
  );
}

export default App;
