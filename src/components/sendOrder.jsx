import React, { useContext, useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from './context/CartContext'; 
const SendOrder = () => {
  const { cart, clear } = useContext(CartContext);
  const [orderStatus, setOrderStatus] = useState('');
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
  const db = getFirestore();

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const crearOrden = async (orden) => {
    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrderStatus(`Orden creada con éxito. ID de la orden: ${docRef.id}`);
      clear(); 
      return docRef.id;
    } catch (error) {
      console.error("Error al crear la orden:", error);
      setOrderStatus("Error al crear la orden. Por favor, intentalo de nuevo.");
    }
  };

  const enviarOrden = () => {
    const orden = {
      buyer,
      items: cart.map(({ id, title, price, quantity }) => ({
        id,
        title,
        price,
        quantity
      })),
      date: new Date().toISOString(),
      total: cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
    };

    crearOrden(orden);
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); enviarOrden(); }}>
        <input 
          type="text" 
          name="name" 
          value={buyer.name} 
          onChange={handleInputChange} 
          placeholder="Nombre" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={buyer.email} 
          onChange={handleInputChange} 
          placeholder="Email" 
          required 
        />
        <input 
          type="text" 
          name="phone" 
          value={buyer.phone} 
          onChange={handleInputChange} 
          placeholder="Teléfono" 
          required 
        />
        <button type="submit">Enviar Orden</button>
      </form>
      {orderStatus && <p>{orderStatus}</p>}
    </div>
  );
};

export default SendOrder;