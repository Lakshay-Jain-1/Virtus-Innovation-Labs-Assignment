
import { useFrame } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import Road from './shared/components/Road'
import Car from './shared/components/car'
import { OrbitControls } from "@react-three/drei"
import RandomObject from "./shared/components/RandomObject"






function App() {

      return (
    <>


      <Perf />
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <RandomObject x={0} z={0}/>
      <Road/>
      <Car/>
    
    </>
  )
}




export default App
