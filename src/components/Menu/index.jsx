import { Link } from "react-router-dom";
import './style.css'

export const Menu = () => {
    return( 
    <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/10">Posts 10</Link>
        <Link to="/redirect">Redirect</Link>
    </nav>
    );
};