import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './assets/styles/index.css'

const rutas = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
];

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {rutas.map((ruta, index) => (
        <Route key={index} {...ruta} />
      ))}
    </Routes>
  </BrowserRouter>
)
