import { Suspense, useState, useEffect} from "react"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from '../Loader';

const Computer = ({isMobile}: {isMobile: boolean}) => {
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
        scale={isMobile ? 0.7 : 0.85}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listerner to check if the screen size is less than 500px
    const mediaQuery = window.matchMedia('max-width: 500px');

    // Set the initial state based on the media query
    setIsMobile(mediaQuery.matches);

    // Define a function to handle the media query change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    }

    // Add the event listener to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl = {{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas