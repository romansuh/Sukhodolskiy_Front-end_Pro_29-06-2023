import {Outlet, Link} from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <nav className="navigation-bar">
                <ul>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/albums">Albums</Link>
                    </li>
                    <li>
                        <Link to="/photos">Photos</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

export default Layout;