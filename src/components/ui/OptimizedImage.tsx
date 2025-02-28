import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
  }, [src]);

  return (
    <>
      {loading && (
        <div 
          className={`${className} bg-tertiary animate-pulse`}
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'hidden' : 'block'}`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </>
  );
};

export default OptimizedImage;