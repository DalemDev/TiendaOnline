export const NAME_APP = import.meta.env.VITE_NAME_APP;
export const PAGES_ROUTES = [
    {
        name: 'Inicio',
        path: '/',
        index: true
    },
    {
        name: 'Iniciar Sesión',
        path: '/login'
    },
    {
        name: 'Lista de deseos',
        path: '/wishlist'
    },
    {
        name: 'Carrito',
        path: '/cart'
    }
];