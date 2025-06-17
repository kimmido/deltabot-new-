import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
        const handleScrollTop = () => {
            window.scrollTo(0, 0);
        };
        
        requestAnimationFrame(() => {
            requestAnimationFrame(handleScrollTop);
        });
	}, [pathname]);
	return null;
};

export default ScrollToTop;