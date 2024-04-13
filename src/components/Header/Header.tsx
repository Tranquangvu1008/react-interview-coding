import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const isActive = (path: any) => location.pathname === path;

    return (
        <header>
            <nav>
                <ul className='flex justify-center gap-4 my-6'>
                    <li>
                        <Link to="/questionBoard" className={isActive('/questionBoard') ? 'text-blue-500' : ''}>
                            Question Board
                        </Link>
                    </li>
                    <li>
                        <Link to="/trafficLight" className={isActive('/trafficLight') ? 'text-blue-500' : ''}>
                            Traffic Light
                        </Link>
                    </li>
                    <li>
                        <Link to="/accordion" className={isActive('/accordion') ? 'text-blue-500' : ''}>
                            Accordion
                        </Link>
                    </li>
                    <li>
                        <Link to="/reactHookForm" className={isActive('/reactHookForm') ? 'text-blue-500' : ''}>
                            React Hook Form
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
