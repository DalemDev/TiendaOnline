import './index.css';

export default function index() {
  const wishlistItems = [
    {
      id: 1,
      name: 'Auriculares Bluetooth',
      description: 'Auriculares inalámbricos con cancelación de ruido.',
      price: '$49.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Smartwatch',
      description: 'Reloj inteligente con seguimiento de actividad física.',
      price: '$129.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Teclado Mecánico',
      description: 'Teclado RGB con switches de alta calidad.',
      price: '$89.99',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">Mi Lista de Deseos</h1>
      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img
              src={item.image}
              alt={item.name}
              className="wishlist-item-image"
            />
            <div className="wishlist-item-info">
              <h2 className="wishlist-item-name">{item.name}</h2>
              <p className="wishlist-item-description">{item.description}</p>
              <p className="wishlist-item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
