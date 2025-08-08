# 🛍️ EasyShop - Frontend React

Bienvenue dans la partie **client** de l'application e-commerce **EasyShop**, développée avec **React.js**, **Tailwind CSS** et connectée à un backend Express/MongoDB.

Ce projet propose une interface utilisateur moderne, responsive et conviviale, permettant aux utilisateurs de naviguer, consulter, ajouter des produits à leur panier et effectuer des commandes.

---

## 🚀 Fonctionnalités principales

- Interface utilisateur moderne et responsive
- Navigation fluide avec React Router
- Page d’accueil avec carrousel de produits
- Authentification des utilisateurs (connexion / inscription)
- Panier dynamique avec gestion des quantités
- Pages sécurisées pour l’utilisateur connecté
- Interface d'administration (accès restreint par rôle JWT)
- Filtres et recherche de produits
- Ajout, modification, suppression de produits (admin)
- Intégration avec backend REST API
- Stockage local du panier avec `localStorage`
- Animation et feedback utilisateur interactif (toasts, loaders, transitions)

---

## 🧰 Technologies utilisées

- [React.js](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) (optionnel si utilisé)
- [JWT Decode](https://www.npmjs.com/package/jwt-decode)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## ⚙️ Installation

### 1. Cloner le dépôt client

git clone https://github.com/votre-utilisateur/easyshop-client.git
cd easyshop-client
2. Installer les dépendances

npm install
3. Lancer l’application React

npm start
L'application sera accessible via http://localhost:3000

🧾 Structure du projet

easyshop-client/
├── public/
├── src/
│   ├── assets/           # Images et icônes
│   ├── components/       # Composants réutilisables (Navbar, Footer, ScrollToTopButton,Cards...)
│   ├── pages/            # Pages principales (Accueil, Produits, Panier, Admin...)
│   ├── styles/           # Fichiers CSS (si séparés)
│   ├── utils/            # Fonctions utilitaires, auth, API config
│   ├── App.js            # Structure principale avec routes
│   └── index.js          # Point d'entrée React
├── tailwind.config.js    # Configuration Tailwind
├── postcss.config.js     # Configuration PostCSS
└── package.json
🔐 Authentification et Sécurité
Les tokens JWT sont stockés dans le localStorage.

Les routes admin sont protégées grâce à une vérification du rôle depuis le token JWT.

Utilisation de PrivateRoute pour les pages protégées.

📦 Fonctionnalités avancées 
Animation d’ajout au panier avec feedback utilisateur

Badge dynamique du panier dans la navbar

Carrousel de présentation

Responsive design mobile/tablette

Tri, recherche, pagination

📸 Captures d’écran (à inclure dans le dépôt)
Ajoutez vos captures dans un dossier /screenshots :

1-homepage.png

2-product-details.png

3-cart.png

4-login.png

5-admin-dashboard.png


# Build production
npm run build
Puis suivez les étapes de déploiement sur votre plateforme.

👩‍💻 Développé par
Mme NDIAYE

Passionnée par le développement et l’organisation et la rigueur administrative

📄 Licence
Ce projet est open-source et libre de réutilisation à des fins éducatives.
