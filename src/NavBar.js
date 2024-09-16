import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">Home</Link>
                </li>
                <li>
                    <Link to="/accounts">Client Accounts</Link>
                </li>
                <li>
                    <Link to="/enterprises">Enterprise Accounts</Link>
                </li>
                <li>
                    <Link to="/investments">Investments</Link>
                </li>
                <li>
                    <Link to="/branches">Branches</Link>
                </li>
                <li>
                    <Link to="/employees">Employees</Link>
                </li>
                <li>
                    <Link to="/currency">Currency</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;