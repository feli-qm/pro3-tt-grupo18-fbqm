import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import MasPopulares from "./pages/MasPopulares";
import EnCartel from "./pages/EnCartel";
import Detalle from "./pages/Detalle";
import NotFound from "./pages/NotFound";
import SearchResults from './pages/SearchResults';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" exact component={Favoritos} />
        <Route path="/maspopulares" exact component={MasPopulares} />
        <Route path="/encartel" exact component={EnCartel} />
        <Route path="/detalle/id/:id" exact component={Detalle} />
        <Route path="/resultadoBusqueda" component={SearchResults} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;