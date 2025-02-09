import { Suspense, useState, useEffect} from "react"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from '../ui/Loader';

const Computer = ({ isMobile, isSmallLaptop }: { isMobile: boolean, isSmallLaptop: boolean }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={ 1024 }
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75 : isSmallLaptop ? 0.85 : 1}
        position={isMobile ? [-3, -4, -1.75] : isSmallLaptop ? [0, -3.25, 0.5] : [0, -3.25, 0.5]}
        rotation={[0, -5, 0]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallLaptop, setIsSmallLaptop] = useState(false);

  useEffect(() => {
    // Add listeners to check if the screen size is less than 500px or between 500px and 1024px
    const mobileMediaQuery = window.matchMedia('(max-width: 500px)');
    const smallLaptopMediaQuery = window.matchMedia('(min-width: 501px) and (max-width: 1600px)');

    // Set the initial state based on the media queries
    setIsMobile(mobileMediaQuery.matches);
    setIsSmallLaptop(smallLaptopMediaQuery.matches);

    // Define functions to handle the media query changes
    const handleMobileMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    const handleSmallLaptopMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsSmallLaptop(event.matches);
    };

    // Add the event listeners to the media queries
    mobileMediaQuery.addEventListener('change', handleMobileMediaQueryChange);
    smallLaptopMediaQuery.addEventListener('change', handleSmallLaptopMediaQueryChange);

    // Remove the event listeners when the component unmounts to avoid memory leaks
    return () => {
      mobileMediaQuery.removeEventListener('change', handleMobileMediaQueryChange);
      smallLaptopMediaQuery.removeEventListener('change', handleSmallLaptopMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 35 }}
      gl = {{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} isSmallLaptop={isSmallLaptop} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas