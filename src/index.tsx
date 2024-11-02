import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Achievements from './components/Achievements';
import Goals from './components/Goals';
import Participants from './components/Participants';
import Statistics from './components/Statistics';
import MainPage from './pages/MainPage';
import './reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: 'statistics/:subComponent?',
        element: <Statistics />,
    },
    {
        path: 'participants/:subComponent?',
        element: <Participants />,
    },
    {
        path: 'goals',
        element: <Goals />,
    },
    {
        path: 'achievements',
        element: <Achievements />,
    },
]);

root.render(<RouterProvider router={routes} />);
