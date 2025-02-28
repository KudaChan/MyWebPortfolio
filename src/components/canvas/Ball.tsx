import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import Loader from "../ui/Loader";

interface BallProps {
  imgUrl: string;
}

const Ball: React.FC<BallProps> = (imgUrl) => {
  const [decal] = useTexture([imgUrl.imgUrl])
  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          metalness={0.2}
          roughness={0.5}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

// Separate Ball component for code splitting
const BallCanvas = ({ imgUrl }: BallProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  // Don't render 3D on mobile
  if (isMobile) {
    return (
      <img 
        src={imgUrl} 
        alt="technology" 
        className="w-28 h-28 object-contain"
      />
    );
  }

  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={imgUrl} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas
