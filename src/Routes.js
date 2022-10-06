
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import About from './components/About';
import Root from './components/Root'
import Books from './components/Books';
import BookDetails from './components/BookDetails';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                // path: '/',
                index: true,
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: '/books',
                loader: () => {
                    return fetch('https://api.itbook.store/1.0/new');
                },
                element: <Books></Books>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: 'book/:id',
                loader: ({ params }) => {
                    console.log(params)
                    return fetch(`https://api.itbook.store/1.0/books/${params.id}
                    `);
                },
                element: <BookDetails></BookDetails>
            }

        ]
    },
])


export default router;