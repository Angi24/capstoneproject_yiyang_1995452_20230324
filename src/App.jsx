import React from 'react';
import { NavLink, useRoutes, useInRouterContext } from 'react-router-dom';
import routes from './router';
import FooterNav from './components/FooterNav';

const App = () => {
    const elements = useRoutes(routes)

    return (
        <div>
            {elements}
            {/* <FooterNav/> */}
        </div>
    );
}

export default App;
