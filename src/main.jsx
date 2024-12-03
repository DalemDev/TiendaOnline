import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Spinner from './components/spinner/index.jsx';
import { PAGES_ROUTES } from './constants/index.js';
import Home from './pages/home/index.jsx';
import NotFound404 from './pages/404/index.jsx';
import FullLayout from './layouts/FullLayout.jsx';
import Login from './pages/login/index.jsx';
import Wishlist from './pages/wishlist/index.jsx';
import './assets/styles/index.css';

const componentsMap = {
  'Inicio': <Home />,
  'Iniciar Sesión': <Login />,
  'Lista de deseos': <Wishlist />,
};

const rutas = PAGES_ROUTES.map((page) => {
  const { name } = page;
  const component = componentsMap[name] || null;

  return {
    ...page,
    element: component,
  };
}).filter((page) => page.element !== null);

const rutasWithLayout = [
  {
    path: '/',
    element: <FullLayout />,
    children: rutas,
  },
  {
    path: '*',
    element: <NotFound404 />,
  }
];

const router = createBrowserRouter(rutasWithLayout);

createRoot(document.getElementById('root')).render(
  <>
    <Spinner />
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
