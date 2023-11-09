import {Outlet, Link} from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <nav className="navigation-bar">
                <ul>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                    <li>
                        <Link to="/users/0/albums">Albums</Link>
                    </li>
                    <li>
                        <Link to="/users/0/albums/0/photos">Photos</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

export default Layout;