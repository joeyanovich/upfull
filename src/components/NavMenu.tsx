import React, { useEffect, useState } from 'react';

interface NavMenuProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }


  export function NavMenu(props: NavMenuProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleExitButtonClick = () => {
      props.setIsMenuOpen(false);
    };

    useEffect(() => {
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
    }, [])

    return(
        <section  className="fixed z-10 w-screen h-screen bg-[url('/src/assets/img/bg-menu.jpg')] bg-no-repeat bg-cover overflow-hidden">
            <div className="h-full w-full overflow-hidden">
                <nav className="flex justify-center items-center h-full w-auto flex-col">
                    <div>
                        ola
                    </div>
                    <div>
                        ola
                    </div>

                    {/* Botão de saída */}
                    <button onClick={handleExitButtonClick}>Sair do Menu</button>
                </nav>
            </div>
        </section>
    )
}