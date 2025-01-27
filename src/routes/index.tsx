import Layout from '@/components/Layout/Layout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Search from '@/pages/Search';
import React from 'react';
import { createHashRouter } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'search/:inputText',
                element: <Search />,
            },
        ],
    },
    {
        path: '/*',
        element: <NotFound />,
    },
];

export const router = createHashRouter(routes);
