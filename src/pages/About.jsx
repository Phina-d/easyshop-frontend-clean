import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sophie L.",
    message: "Grâce à EasyShop, j'ai pu lancer ma boutique en ligne rapidement et facilement. Je recommande vivement !",
  },
  {
    id: 2,
    name: "Karim D.",
    message: "Interface claire et support réactif. La gestion des produits est un jeu d'enfant.",
  },
  {
    id: 3,
    name: "Fatou S.",
    message: "Mes clients adorent la simplicité du site. Bravo à l'équipe EasyShop !",
  },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-purple-700 text-center">À propos d'EasyShop</h1>
      
      {/* Photo + texte */}
      <div className="flex flex-col md:flex-row items-center mb-10 gap-8">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
          alt="Equipe EasyShop"
          className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
        />
        <p className="text-gray-700 leading-relaxed md:w-1/2">
          EasyShop est une plateforme e-commerce moderne conçue pour offrir une expérience d'achat simple, rapide et agréable. Notre mission est de permettre aux petites et moyennes entreprises de vendre leurs produits en ligne facilement, sans dépendre des grandes plateformes.
          <br /><br />
          Nous offrons une interface utilisateur intuitive, une gestion complète des produits, un système sécurisé d'authentification, ainsi qu’un espace d'administration performant pour gérer votre boutique.
          <br /><br />
          EasyShop a été développé avec les technologies MERN (MongoDB, Express, React, Node.js) pour garantir performance, évolutivité et flexibilité.
          <br /><br />
          Merci de votre confiance et bienvenue dans l’aventure EasyShop !
        </p>
      </div>

      {/* Témoignages */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-purple-700 text-center">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, message }) => (
            <div key={id} className="bg-purple-50 p-6 rounded-lg shadow">
              <p className="italic mb-4 text-gray-800">"{message}"</p>
              <p className="font-bold text-purple-700 text-right">— {name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
