
import { useFrame } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import Road from './shared/components/Road'
import Car from './shared/components/car'
import { OrbitControls } from "@react-three/drei"





function App() {

  return (
    <>


      <Perf />
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Road/>
      <Car/>
    
    </>
  )
}




export default App