import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import NotFound404 from './pages/404/index.jsx';
import Spinner from './pages/spinner/index.jsx';
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

createRoot(document.getElementById('root')).render(
  <>
    <Spinner />
    <BrowserRouter>
      <Routes>
        {rutas.map((ruta, index) => (
          <Route key={index} {...ruta} />
        ))}
      </Routes>
    </BrowserRouter>
  </>
)
