import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import MasPopulares from "./pages/MasPopulares";
import EnCartel from "./pages/EnCartel";
import { Link } from "react-router-dom";

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
      </Switch>
      <footer>
        <p>Felicitas y Trinidad</p>
      </footer>
    </>
  );
}

export default App;