


import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

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
      }, 30);
  
      
      return () => clearInterval(interval);
    }, [currentFrame, isReversed]);

    
  return (
    <div className="w-full h-full">
      <motion.img
        src={`/src/assets/img/brain/${currentFrame}.png`}
        className='transition ease-in-out delay-150'
        alt="Brain Frame"
        
        transition={{ duration: 1, fade: "fadeIn" }}
      />
    </div>
  );
}
