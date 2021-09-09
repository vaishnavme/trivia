import { Link } from 'react-router-dom';
import { useData } from '../context';

export const Navbar = () => {
    const { dispatch } = useData();

    return (
        <div className="p-4 shadow">
            <h1 className="text-2xl font-medium text-pink-500 cursor-pointer">
                Trivia
            </h1>
        </div>
    );
};
