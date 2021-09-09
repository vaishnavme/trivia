import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="p-4 shadow">
            <Link to="/">
                <h1 className="text-2xl font-medium text-pink-500">Trivia</h1>
            </Link>
        </div>
    );
};
