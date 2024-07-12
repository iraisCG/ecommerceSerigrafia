import React, { useState, useContext } from 'react';
import Context from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    repeatedEmail: '',
    phone: ''
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const { cart, getTotal, clearCart } = useContext(Context);
  const navigate = useNavigate();

  const updateUser = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!user.name) {
      errors.name = 'Debes agregar un nombre';
    } else if (user.name.length < 4) {
      errors.name = 'El nombre debe tener al menos 4 caracteres';
    }
    if (!user.email) {
      errors.email = 'Debes agregar un correo';
    }
    if (!user.repeatedEmail) {
      errors.repeatedEmail = 'Debes repetir el correo';
    } else if (user.email !== user.repeatedEmail) {
      errors.repeatedEmail = 'Los correos no coinciden';
    }
    if (!user.phone) {
      errors.phone = 'Debes agregar un celular';
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const coleccion = collection(db, 'orders');
    try {
      const order = {
        buyer: user,
        cart: cart,
        total: getTotal(),
        fecha: Timestamp.now()
      };

      const orderRef = await addDoc(coleccion, order);

      Swal.fire({
        title: "Gracias por tu compra!",
        text: `El número de pedido es: ${orderRef.id}`,
        icon: "success",
        confirmButtonText: "Ir al inicio",
      }).then(() => {
        clearCart();
        navigate('/');
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registro de contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={updateUser}
            required
          />
          {error.name && <div className="text-danger">{error.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={updateUser}
            required
          />
          {error.email && <div className="text-danger">{error.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="repeatedEmail" className="form-label">Repetir Correo</label>
          <input
            type="email"
            className="form-control"
            id="repeatedEmail"
            name="repeatedEmail"
            value={user.repeatedEmail}
            onChange={updateUser}
            required
          />
          {error.repeatedEmail && <div className="text-danger">{error.repeatedEmail}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Celular</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={updateUser}
            required
          />
          {error.phone && <div className="text-danger">{error.phone}</div>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
