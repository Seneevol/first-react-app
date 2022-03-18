import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Layout = ({children}) => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;