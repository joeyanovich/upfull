import React from 'react';

interface NavMenuProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }


  export function NavMenu(props: NavMenuProps) {
    const handleExitButtonClick = () => {
      props.setIsMenuOpen(false);
    };


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