import React from 'react';
import { Provider } from 'react-redux';
import { YMaps } from 'react-yandex-maps';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
      <DndProvider backend={HTML5Backend}>
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
      </DndProvider>
    </Provider>
  );
}

export default App;
