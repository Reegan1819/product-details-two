// LazyImage.tsx
import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const imgElement = imgRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (imgElement) observer.unobserve(imgElement);
      }
    });

    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => {
      if (imgElement) observer.unobserve(imgElement);
    };
  }, [imgRef]);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined} // Only load the image if it is visible
      alt={alt}
      style={{ width: "100%", height: "200px" }} // Optional styling
      loading="lazy" // Optional: for additional lazy loading support
    />
  );
};

export default LazyImage;
