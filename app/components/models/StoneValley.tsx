import { useGLTF } from "@react-three/drei";

export const StoneValley = () => {
    
    const stone = useGLTF("./dolmenes_de_los_gabrieles_no_4/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={stone.scene}
                scale={0.5}
                position={[0, -3.25, -1.5]}
            />
        </mesh>
    );
};