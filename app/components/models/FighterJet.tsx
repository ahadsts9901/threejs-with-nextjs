import { useGLTF } from "@react-three/drei";

export const FighterJet = () => {
    
    const jet = useGLTF("./dassault_rafale_m_-_fighter_jet_-_free/scene.gltf");

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
                object={jet.scene}
                scale={0.5}
                position={[0, -3.25, -1.5]}
            />
        </mesh>
    );
};