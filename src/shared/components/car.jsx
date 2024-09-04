import React, { useRef } from 'react';
import { RigidBody, useRevoluteJoint } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Vehicle = () => {
  const bodyRef = useRef(null);
  const frontWheelRef = useRef(null);
  const backLeftWheelRef = useRef(null);
  const backRightWheelRef = useRef(null);

  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame((state, delta) => {
    const { x, y } = state.mouse;
    
   
    let velocity = { x: 0, y: 0, z: 0 };
    let torque = { x: 0, y: 0, z: 0 };

    const velocityStrength = 160 * delta;
    const torqueStrength = 0.1; 

     function changeDirection(){
      if (x > 0 && y > 0) { 
        velocity.x = velocityStrength; 
        torque.y = -torqueStrength;
      } else if (x > 0 && y < 0) { 
        velocity.x = velocityStrength; 
        torque.y = -torqueStrength;
      } else if (x < 0 && y < 0) { 
        velocity.x = -velocityStrength; 
        torque.y = torqueStrength;
      } else if (x < 0 && y > 0) { 
        velocity.x = -velocityStrength; 
        torque.y = torqueStrength;
      } 
     }

    const { forward, backward } = getKeys();

    if (forward) {
      velocity.z = -velocityStrength;
      changeDirection()
      
    } else if (backward) {
      velocity.z = velocityStrength;
      changeDirection()
    }

    bodyRef.current?.setLinvel(velocity);
    bodyRef.current?.applyTorqueImpulse(torque);
    frontWheelRef.current?.setLinvel(velocity);
    frontWheelRef.current?.applyTorqueImpulse(torque);
    backLeftWheelRef.current?.setLinvel(velocity);
    backLeftWheelRef.current?.applyTorqueImpulse(torque);
    backRightWheelRef.current?.setLinvel(velocity);
    backRightWheelRef.current?.applyTorqueImpulse(torque);
  });

  useRevoluteJoint(bodyRef, frontWheelRef, [
    [0, -1, 4],
    [0, 0, 0],
    [0, 0, 1],
  ]);

  useRevoluteJoint(bodyRef, backLeftWheelRef, [
    [-2, -1, -3],
    [0, 0, 0],
    [0, 0, 1],
  ]);

  useRevoluteJoint(bodyRef, backRightWheelRef, [
    [2, -1, -3],
    [0, 0, 0],
    [0, 0, 1],
  ]);

  return (
    <>
    
      <RigidBody
        ref={bodyRef}
        type="kinematicVelocity"
        position={[0, 2, 0]}
        mass={10}
      >
        <mesh>
          <boxGeometry args={[4, 2, 8]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </RigidBody>

      
      <RigidBody
        ref={frontWheelRef}
        type="kinematicVelocity"
        position={[0, 1, 4]}
        colliders="trimesh"
        mass={5}
      >
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </RigidBody>

    
      <RigidBody
        ref={backLeftWheelRef}
        type="kinematicVelocity"
        position={[-2, 1, -3]}
        mass={5}
        colliders="trimesh"
      >
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[1, 1, 0.5, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </RigidBody>

      
      <RigidBody ref={backRightWheelRef} type="kinematicVelocity" position={[2, 1, -3]} mass={5} colliders="trimesh">
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[1, 1, 0.5, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Vehicle;