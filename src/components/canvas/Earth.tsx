import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { CanvasLoader, DOMLoader } from "../ui/Loader";

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    return () => {
      useGLTF.preload('./planet/scene.gltf');
    };
  }, []);

  if (!domLoaded) {
    return <DOMLoader />;
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        shadows
        frameloop="demand"
        gl={{ 
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          antialias: true,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={true}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enablePan={false}
          />
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
