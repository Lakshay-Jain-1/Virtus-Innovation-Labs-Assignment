import { React } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { Loader } from "@react-three/drei"
import { KeyboardControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'






ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Loader />

   
    <KeyboardControls map={[
      { name: 'forward', keys: ['ArrowUp', "w"] },
      { name: 'backward', keys: ['ArrowDown', "s"] }
      
    ]}>
      <Canvas  >


        <Physics debug gravity={[0,100,0]}   >
          <App />
        </Physics>



      </Canvas>

    </KeyboardControls>


  </>

)


