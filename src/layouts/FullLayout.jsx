import { useMemo } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NAME_APP, PAGES_ROUTES } from '../constants';
import Logo from '../components/logo';
import './index.css';

export default function FullLayout() {
  const anioActual = useMemo(() => new Date().getFullYear(), []);

  return (
    <div>
      <header className="full-layout_header">
        <Logo />
        <nav className="full-layout_nav">
          {PAGES_ROUTES.map((link, index) => (
            <Link className="full-layou_link" key={index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      <main className="full-layout_main">
        <Outlet />
      </main>

      <footer className="full-layout_footer">
        <p>
          © {anioActual} {NAME_APP}. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
