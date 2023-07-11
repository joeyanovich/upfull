import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Cerebro (){
    const [currentFrame, setCurrentFrame] = useState(1);
    const [isReversed, setIsReversed] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        if (!isReversed) {
          setCurrentFrame(prevFrame => (prevFrame === 57 ? prevFrame - 1 : prevFrame + 1));
          if (currentFrame === 57) {
            setIsReversed(true);
          }
        } else {
          setCurrentFrame(prevFrame => (prevFrame === 1 ? prevFrame + 1 : prevFrame - 1));
          if (currentFrame === 1) {
            setIsReversed(false);
          }
        }
      }, 60 + Math.floor(Math.random() * 21));
  
      return () => clearInterval(interval);
    }, [currentFrame, isReversed]);

    
  return (
    <div className="w-full h-full bg-black">
      <motion.img
        src={`/src/assets/img/brain/${currentFrame}.png`}
        className='transition ease-in-out delay-150'
        alt="Brain Frame"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};

