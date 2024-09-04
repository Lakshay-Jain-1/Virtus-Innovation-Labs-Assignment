import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier"
import { useRef, useState } from "react";



export default function RandomObject() {

    let [display, setDisplay] = useState(0)
    let [x, setX] = useState(0)
    let [z, setZ] = useState(0)
    const lastUpdateRef = useRef(0);

    function coords(state) {
        setX(Math.random() * 5 + state.camera.position.x);
        setZ(Math.random() * 4 - 20 + state.camera.position.z);

        setDisplay(prevDisplay => prevDisplay === 0 ? 1 : 0);
    }
    useFrame((state) => {

        const now = performance.now();
        const timeElapsed = now - lastUpdateRef.current;

        if (timeElapsed > 4000) {
            coords(state);
            lastUpdateRef.current = now;
        }

    })

    return (

        <>
            {display == 1 ? <Circle z={z} x={x} /> : <Square z={z} x={x} />}
        </>

    )


}

function Circle({ z, x }) {
    return (
        <RigidBody
            type="dynamic"
            position={[x || 0, 4, z || 0]}
            onCollisionEnter={() => console.log(1)}
            mass={100}
        >
            <mesh>
                <cylinderGeometry args={[2, 2, 1, 32]} />
                <meshBasicMaterial color="blue" />
            </mesh>
        </RigidBody>
    );
}

// Square component
function Square({ z, x }) {
    return (
        <RigidBody
            type="dynamic"
            position={[x || 0, 4, z || 0]}
            onCollisionEnter={() => console.log(1)}
        >
            <mesh>
                <boxGeometry args={[1, 1, 10]} />
                <meshBasicMaterial color="green" />
            </mesh>
        </RigidBody>
    );
}