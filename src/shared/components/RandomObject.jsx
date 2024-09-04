import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier"
import { useState } from "react";


export default function RandomObject() {
   
    let [display,setDisplay] = useState(0)
   
    let [z,setz] = useState(0)
    useFrame(()=>{
        if(display==0){
            setDisplay(1)
            setz(Math.random()*10)
        }else{
            setDisplay(0)
            setz(Math.random()*10)
        }
    })

    return (
        <RigidBody type="dynamic" position={[0,4,0]} onCollisionEnter={()=>console.log(1)}>

         {display==1?<Circle/>:<Square/>}
        
        </RigidBody>
    )


}

function Circle() {
    return (
      <mesh>
        <circleGeometry args={[1, 32]} /> {/* radius: 1, segments: 32 */}
        <meshBasicMaterial color="blue" />
      </mesh>
    );
  }

  function Square() {
    return (
      <mesh>
        <planeGeometry args={[1, 1]} /> {/* width: 1, height: 1 */}
        <meshBasicMaterial color="green" />
      </mesh>
    );
  }