import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

export default function GoToCartButton() {
  const navigate = useNavigate();
  const { totalItems } = useContext(CartContext);

  const handleClick = () => {
    navigate("/panier");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Voir le panier"
      className="fixed bottom-4 right-16 z-50 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center"
      style={{ width: "32px", height: "32px", padding: 0 }}
    >
      <FaShoppingCart size={16} />
      {totalItems > 0 && (
        <span
          className="absolute bg-white text-purple-700 rounded-full flex items-center justify-center font-bold"
          style={{
            width: "18px",
            height: "18px",
            fontSize: "11px",
            top: "-6px",
            right: "-6px",
          }}
        >
          {totalItems}
        </span>
      )}
    </button>
  );
}
