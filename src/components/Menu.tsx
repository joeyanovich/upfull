import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import paperBall from '../assets/img/paper/01.png'
import paperBall2 from '../assets/img/paper/02.png'
import paperBall3 from '../assets/img/paper/03.png'
import paperBall4 from '../assets/img/paper/04.png'
import { NavMenu } from './NavMenu'

interface IntervalId {
    id: ReturnType<typeof setInterval> | null;
  }

export function Menu() {
    const imagens = [paperBall, paperBall2, paperBall3, paperBall4];


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [intervalId, setIntervalId] = useState<IntervalId>({ id: null });

    const [isIntroPlaying, setIsIntroPlaying] = useState(true); // Estado para controlar a introdução

    const handleHoverStart = () => {
        setIsHovered(true);
        const id = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
        }, 250);
        setIntervalId({ id });
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
        if (intervalId.id) {
        clearInterval(intervalId.id);
        }
        setCurrentIndex(0);
        setIntervalId({ id: null });
    };

    const handleButtonClick = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      useEffect(() => {
        const introTimer = setTimeout(() => {
          setIsIntroPlaying(false); // Desativa a introdução após um determinado tempo (3 segundos no exemplo)
        }, 3000);
    
        return () => {
          clearTimeout(introTimer); // Limpa o temporizador quando o componente é desmontado
        };
      }, []);

    return (
        <div>
            {
            isMenuOpen ? <NavMenu key="navMenu" setIsMenuOpen={setIsMenuOpen} /> : null
            }
            <div className='w-full h-full flex justify-end pt-7 pr-7'>
                <motion.div
                    className='fixed w-14 h-14 cover p-3 rounded-full cursor-pointer bg-white-white'
                    onHoverStart={handleHoverStart}
                    onHoverEnd={handleHoverEnd}
                    onClick={handleButtonClick}
                >
                    <img className="h-full w-full" src={imagens[currentIndex]} alt="bolinha de papel amassada" />
                </motion.div>
            </div>
        </div>
        
    )
}