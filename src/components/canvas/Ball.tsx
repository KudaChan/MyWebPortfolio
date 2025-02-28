import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

interface BallProps {
  imgUrl: string;
}

const Ball = ({ imgUrl }: BallProps) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ imgUrl }: BallProps) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!domLoaded || isMobile) {
    return (
      <img 
        src={imgUrl}
        alt="technology"
        className="w-28 h-28 object-contain"
      />
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        frameloop="demand"
        gl={{ 
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          antialias: true,
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
          />
          <Ball imgUrl={imgUrl} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas
