import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import { CanvasLoader } from "../ui/Loader";

const Ball = (props: { imgUrl: string }) => {
  const [decal] = useTexture([props.imgUrl]);
  if (!decal) {
    return null;
  }

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

const BallCanvas = ({icon} : {icon: string}) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [textureError, setTextureError] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    
    // Preload the image to check if it's valid
    const img = new Image();
    img.src = icon;
    img.onerror = () => {
      console.error('Failed to load image:', icon);
      setTextureError(true);
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [icon]);

  if (!domLoaded || isMobile || textureError) {
    return (
      <div className="w-28 h-28 flex items-center justify-center bg-tertiary rounded-full">
        {textureError ? (
          <span className="text-sm text-red-500">Failed to load image</span>
        ) : (
          <img 
            src={icon}
            alt="technology"
            className="w-1/2 h-1/2 object-contain"
          />
        )}
      </div>
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
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
          />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
