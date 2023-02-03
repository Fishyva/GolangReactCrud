import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import EditMovies from './Components/EditMovies';
import ErrorPage from './Components/ErrorPage';
import Genres from './Components/Genres';
import GraphQL from './Components/GraphQL';
import Home from './Components/Home';
import Login from './Components/Login';
import ManageCatalogue from './Components/ManageCatalogue';
import Movie from './Components/Movie';
import Movies from './Components/Movies';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/movies/:id",
        element: <Movie />
      },
      {
        path: "/genres",
        element: <Genres />
      },
      {
        path: "/admin/movie/0",
        element: <EditMovies />
      },
      {
        path: "/manage-catalogue",
        element: <ManageCatalogue />
      },
      {
        path: "/graphql",
        element: <GraphQL />
      },
      {
        path: "/login",
        element: <Login />
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


