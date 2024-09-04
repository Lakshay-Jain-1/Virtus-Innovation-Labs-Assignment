import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Loader, KeyboardControls } from "@react-three/drei";
import { Physics } from '@react-three/rapier';
import { Provider } from 'react-redux';
import {store} from './store/store.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Loader />
    <KeyboardControls map={[
      { name: 'forward', keys: ['ArrowUp', 'w'] },
      { name: 'backward', keys: ['ArrowDown', 's'] }
    ]}>
      <Provider store={store}>
        <Canvas>
          <Physics debug>
            <App />
          </Physics>
        </Canvas>
      </Provider>
    </KeyboardControls>
  </>
);
