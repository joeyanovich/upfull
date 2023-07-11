import { Cerebro } from "./components/Cerebro";
import { Menu } from "./components/Menu";

import './style/global.css'

export function App() {
  return (
    <div className="bg-background">
        <Menu />
        <Cerebro />
    </div>
  )
}
