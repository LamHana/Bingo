import { useRoutes } from 'react-router-dom';
import UserRoutes from './userRoutes';

const Routes = () => {
    return useRoutes([...UserRoutes]);
};

export default Routes;
