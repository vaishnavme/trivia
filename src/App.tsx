import { Routes, Route } from 'react-router-dom';
import { Home, Playzone, Result } from './pages';

function App() {
    return (
        <div>
            <div className="p-4 mt-16 md:ml-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/playzone/:quizID" element={<Playzone />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
