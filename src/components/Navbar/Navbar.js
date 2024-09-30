import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className="header-content">
                <Link to={`/`}><img className="logo" src="hollywoodShines.png" alt="Logo" /></Link>
                <h1>HOLLYWOOD SHINES</h1>
            </div>
            <nav className="navegacion">
                <ul className="main-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link></li>
                    <li><Link to="/maspopulares">Mas populares</Link></li>
                    <li><Link to="/encartel">En cartel</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;