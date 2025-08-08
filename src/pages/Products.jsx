import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const products = [
  { id: 1, name: "Sac à main élégant", price: 79, image: "/images/sac5.jpg" },
  { id: 2, name: "Chaussures de sport", price: 69, image: "/images/chaussure-sp.jpg" },
  { id: 3, name: "Montre connectée", price: 129, image: "/images/montre-connect.jpg" },
  { id: 4, name: "Casque audio Bluetooth", price: 89, image: "/images/casque-aud.jpg" },
];

export default function Products({ addToCart }) {
  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Tous les produits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4 shadow flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-3" />
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <p className="text-purple-600 font-bold mb-3">{product.price} €</p>
            <div className="flex space-x-2">
              <Link
                to={`/product/${product.id}`}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Voir détails
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
