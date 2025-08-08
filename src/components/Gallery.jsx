import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const items = [
  {
    category: "Mode",
    src: "/images/robe7.jpg",
    title: "Look tendance",
    description: "Veste stylée pour un look urbain.",
  },
  {
    category: "Tech",
    src: "/images/IMG-20250508-WA0093.jpg",
    title: "Gadget dernier cri",
    description: "Smartphone dernière génération.",
  },
  {
    category: "Décoration",
    src: "/images/tableau7.jpg",
    title: "Déco cosy",
    description: "Salon lumineux et chaleureux.",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Galerie Mode, Tech & Décoration</h2>

      <div className="gallery-grid">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-img-wrapper">
              <motion.img
                src={item.src}
                alt={item.title}
                className="card-img"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="p-4 card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="category">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
