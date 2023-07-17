import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface imgProps {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

export function Papel({ img1, img2, img3, img4 }: imgProps) {
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (currentImageIndex < images.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isVisible, currentImageIndex, images.length]);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1 });
    }
  }, [isVisible, controls]);

  return (
    <div ref={imageRef}>
      <motion.img
        src={images[currentImageIndex]}
        alt="Lamp"
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
        transition={transition}
      />
    </div>
  );
}
