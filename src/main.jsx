import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Loader, KeyboardControls, Environment } from "@react-three/drei";
import { Physics } from '@react-three/rapier';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <ScoreCard />
      <Loader />
      <KeyboardControls map={[
        { name: 'forward', keys: ['ArrowUp', 'w'] },
        { name: 'backward', keys: ['ArrowDown', 's'] }
      ]}>

        <Canvas style={{ position: "absolute" }}>
        <Environment preset="night" />
          <Physics >
            <App />
          </Physics>
        </Canvas>

      </KeyboardControls>
    </Provider>
  </>
);

function ScoreCard() {
  let scores = useSelector((state) => state.position.score)
  useEffect(()=>{
    alert("CLick to play\n For vehicle to move forward press W  \n to move backward press S \n for changing direction point the cursor  ")
  },[])
  return (
    <h1 style={{ position: "relative", left: "0", top: "10px",zIndex:1 }}>{scores}</h1>
  )
}