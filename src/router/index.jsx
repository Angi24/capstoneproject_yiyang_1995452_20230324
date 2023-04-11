import { Navigate } from 'react-router-dom';
// import Layout from '../pages/Main/Layout';
import Home from '../pages/Main/Home';
import LifeService from '../pages/Main/LifeService';
import Shop from '../pages/Main/Shop';
import User from '../pages/Main/User';
import City from '../pages/City';
import Search from '../pages/Search';

// const routes = [
//     {
//         path: '/',
//         element: < Layout />,
//         children: [
//             {
//                 path: 'home',
//                 element: < Home />
//             },
//             {
//                 path: '/life',
//                 element: < LifeService />
//             },
//             {
//                 path: '/shop',
//                 element: < Shop />
//             },
//             {
//                 path: '/user',
//                 element: < User />
//             },
//         ]
//     },
//     {
//         path: '/city',
//         element: < City />
//     },
//     {
//         path: '/search/:keywords',
//         element: < Search />
//     },
// ]
const routes = [
    {
        path: '/home',
        element: < Home />
    },
    {
        path: '/life',
        element: < LifeService />
    },
    {
        path: '/shop',
        element: < Shop />
    },
    {
        path: '/user',
        element: < User />
    },
    {
        path: '/city',
        element: < City />
    },
    {
        path: '/search/:keywords',
        element: < Search />
    },
    {
        path: '/',
        element: < Navigate to="/home" />
    }
]

export default routes