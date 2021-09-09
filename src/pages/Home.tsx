import { Dashboard, QuizGrid } from '../components';

export default function Home() {
    return (
        <div className="flex">
            <Dashboard />
            <QuizGrid />
        </div>
    );
}
