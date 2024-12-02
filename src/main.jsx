import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import NotFound404 from './pages/404/index.jsx';
import Spinner from './components/spinner/index.jsx';
import { ToastContainer } from 'react-toastify';
import './assets/styles/index.css'

const rutas = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '*',
    element: <NotFound404 />
  }
];

const router = createBrowserRouter(rutas);

createRoot(document.getElementById('root')).render(
  <>
    <Spinner />
    <ToastContainer />
    <RouterProvider router={router} />
  </>
)
