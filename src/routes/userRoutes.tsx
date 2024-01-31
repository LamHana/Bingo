import configs from '@/configs';
import CreateRoom from '@/pages/CreateRoom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Loto from '@/pages/Loto';
import Room from '@/pages/Room';

const UserRoutes = [
    {
        path: configs.routes.login,
        element: <Login />,
    },
    {
        path: configs.routes.home,
        element: <Home />,
    },
    {
        path: configs.routes.room,
        element: <Room />,
    },
    {
        path: configs.routes.createRoom,
        element: <CreateRoom />,
    },
    {
        path: configs.routes.loto,
        element: <Loto />,
    },
];

export default UserRoutes;
