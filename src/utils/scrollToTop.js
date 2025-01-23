import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const { pathname } = useLocation();
    // const [beforePath, setBeforePath] = useState(pathname.split('/')[1] || 'home');
    
    // function findPath(pathname) {
    //     const firstPath = pathname.split('/')[1] || 'home';

    //     if (beforePath !== firstPath) {
    //         window.scrollTo(0, 0);
    //         setBeforePath(firstPath);
    //     }
    // }

	useEffect(() => {
        // findPath(pathname);
            window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

export default ScrollToTop;