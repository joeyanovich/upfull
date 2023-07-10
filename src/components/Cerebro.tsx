import React, { useState, useEffect } from 'react';

export function Cerebro (){
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame(prevFrame => (prevFrame === 57 ? 1 : prevFrame + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <img src={`../assets/img/brain/${currentFrame}.png`} alt="Brain Frame" />
    </div>
  );
};

