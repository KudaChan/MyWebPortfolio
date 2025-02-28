import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  );
};

// Regular DOM loader
const DOMLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="canvas-loader"></div>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}
      >Loading...</p>
    </div>
  );
};

export { CanvasLoader, DOMLoader };
