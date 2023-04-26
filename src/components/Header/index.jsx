import { Link, useLocation } from 'react-router-dom'
import './styles.css'

const Header = () => {
    const location = useLocation()

    return (
        <nav className="header-main">
            <ul style={{ color: 'white', display: 'flex', width: '100%' }}>
                <li
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    <Link to="/">Rovers</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
