import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import MasPopulares from "./pages/MasPopulares";
import EnCartel from "./pages/EnCartel";
import Detalle from "./pages/Detalle";
import NotFound from "./pages/NotFound";
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
      <header>
        <div className="header-content">
          <Link to={`/`}><img class="logo" src="hollywoodShines.png" alt="Logo"/></Link>
          <h1>HOLLYWOOD SHINES</h1>
        </div>
        <nav>
          <Navbar />
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" exact component={Favoritos} />
        <Route path="/maspopulares" exact component={MasPopulares} />
        <Route path="/encartel" exact component={EnCartel} />
        <Route path="/detalle/id/:id" exact component={Detalle} />
        <Route path="/resultadoBusqueda" component={SearchResults} />
        <Route component={NotFound} />
      </Switch>
      <footer>
        <p>Felicitas y Trinidad</p>
      </footer>
    </>
  );
}

export default App;