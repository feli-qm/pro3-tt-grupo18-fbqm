import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import MasPopulares from "./pages/MasPopulares";
import EnCartel from "./pages/EnCartel";

function App() {
  return (
    <>
      <header>
        <p>Hollywood Shines</p>
        <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/favoritos" exact component={Favoritos}/>
        <Route path="/maspopulares" exact component={MasPopulares}/>
        <Route path="/encartel" exact component={EnCartel}/>
      </Switch>
      </header>
      <footer>
        <p>Felicitas y Trinidad</p>
      </footer>
    </>
  );
}

export default App;