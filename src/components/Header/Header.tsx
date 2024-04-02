import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul className='flex justify-center gap-4 mb-4'>
                    <li><Link to="/questionBoard">Question Board</Link></li>
                    <li><Link to="/trafficLight">Traffic Light</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
