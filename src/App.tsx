import { Cerebro } from "./components/Cerebro";
import { Menu } from "./components/Menu";
import { Papel } from "./components/Papel";

/* Import das imagens da lampada */
import lamp1 from './assets/img/paper-obj/lampada/01.png'
import lamp2 from './assets/img/paper-obj/lampada/02.png'
import lamp3 from './assets/img/paper-obj/lampada/03.png'
import lamp4 from './assets/img/paper-obj/lampada/04.png'

/* Import das imagens do origami */
import origami1 from './assets/img/paper-obj/origami/01.png'
import origami2 from './assets/img/paper-obj/origami/02.png'
import origami3 from './assets/img/paper-obj/origami/03.png'
import origami4 from './assets/img/paper-obj/origami/04.png'

/* Import das imagens do pincel */
import pincel1 from './assets/img/paper-obj/pincel/01.png'
import pincel2 from './assets/img/paper-obj/pincel/02.png'
import pincel3 from './assets/img/paper-obj/pincel/03.png'
import pincel4 from './assets/img/paper-obj/pincel/04.png'

/* Import das imagens da tinta */
import tinta1 from './assets/img/paper-obj/tinta/01.png'
import tinta2 from './assets/img/paper-obj/tinta/02.png'
import tinta3 from './assets/img/paper-obj/tinta/03.png'
import tinta4 from './assets/img/paper-obj/tinta/04.png'


import './style/global.css'

export function App() {
  return (
    <div className="bg-background">
        <Menu />
        <Cerebro />

        <Papel img1={lamp1} img2={lamp2} img3={lamp3} img4={lamp4} />
      <Papel img1={origami1} img2={origami2} img3={origami3} img4={origami4} />
      <Papel img1={pincel1} img2={pincel2} img3={pincel3} img4={pincel4} />
      <Papel img1={tinta1} img2={tinta2} img3={tinta3} img4={tinta4} />
    </div>
  )
}
