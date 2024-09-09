import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/maspopulares">Mas populares</Link></li>
                <li><Link to="/encartel">En cartel</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
