import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The James Blog </h1>
            <div className="links">
                <Link to="/" className="">Home</Link>
                <Link to="/create"  className="nav">New Blog</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;