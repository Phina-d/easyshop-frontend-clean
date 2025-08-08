import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PrivateRouteCloser from "./routes/PrivateRouteCloser";

import UserList from "./pages/admin/UsersListAdmin";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/admin/AddUser";
import OrderList from "./pages/admin/OrderList";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from './components/WhatsappButton';
import ScrollToTopButton from "./components/ScrollToTopButton";
import GoToCartButton from "./components/GoToCartButton";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductGallery from "./pages/ProductGallery";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import ContactAvis from "./pages/ContactAvis";

import AdminProduits from "./pages/AdminProduits";
import PrivateRouteAdmin from "./routes/PrivateRouteAdmin";
import PrivateRouteRole from "./routes/PrivateRouteRole";
import PrivateRouteChef from "./routes/PrivateRouteChef";

import CustomerList from "./pages/admin/CustomerList";
import ClientOrders from "./pages/client/ClientOrders";
import ClientProfile from "./pages/client/ClientProfile";
import ClientPaymentMethods from "./pages/client/ClientPaymentMethods";
import ClientSupport from "./pages/client/ClientSupport";

import ProspectList from "./pages/admin/ProspectList";
import ConfirmedClients from "./pages/admin/ConfirmedClients";
import OrdersToConfirm from "./pages/admin/OrdersToConfirm";
import UsersListAdmin from "./pages/admin/UsersListAdmin"; // Assure-toi que ce fichier existe

import ClientDashboard from "./pages/dashboards/ClientDashboard";
import CloserDashboard from "./pages/dashboards/CloserDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import DashboardRedirect from "./pages/dashboard/DashboardRedirect";
import ClientListForCloser from "./pages/closer/ClientListForCloser";
import ClientProfileCloser from "./pages/closer/ClientProfileCloser";
import UserProfile from "./pages/admin/UserProfile";
import CloserOrdersToConfirm from "./pages/closer/CloserOrdersToConfirm";

import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";
import FAQ from "./pages/FAQ";
import Livraison from "./pages/Livraison";
import Retours from "./pages/Retours";
import CGV from "./pages/CGV";
import SendTestEmail from "./pages/SendTestEmail";

// ✅ ROUTES dans App.jsx ou routes.jsx
import ChefLayout from "./pages/chef/ChefLayout";
import ChefDashboard from "./pages/chef/ChefDashboard";
import ChefCommandes from "./pages/chef/ChefCommandes";
import ChefProfile from "./pages/chef/ChefProfile";
import ChefProspects from "./pages/chef/ChefProspects";

import ClientLayout from "./pages/dashboards/ClientLayout";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ToastContainer />
      <main className="flex-grow">
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/produits" element={<ProductGallery />} />
          <Route path="/produits/:id" element={<ProductDetails />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/contact" element={<ContactAvis />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Livraison />} />
          <Route path="/returns" element={<Retours />} />
          <Route path="/terms" element={<CGV />} />
          <Route path="/tester-email" element={<SendTestEmail />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />

          {/* Routes admin protégées */}
          <Route path="/admin" element={<PrivateRouteAdmin><AdminDashboard /></PrivateRouteAdmin>} />
          <Route path="/admin/produits" element={<PrivateRouteAdmin><AdminProduits /></PrivateRouteAdmin>} />
          <Route path="/admin/customers" element={<PrivateRouteAdmin><CustomerList /></PrivateRouteAdmin>} />
          <Route path="/admin/clients" element={<PrivateRouteAdmin><CustomerList /></PrivateRouteAdmin>} />
          <Route path="/admin/users" element={<PrivateRouteAdmin><UserList /></PrivateRouteAdmin>} />
          <Route path="/admin/utilisateurs" element={<PrivateRouteAdmin><UserList /></PrivateRouteAdmin>} />
          <Route path="/admin/utilisateurs/:id/edit" element={<PrivateRouteAdmin><EditUser /></PrivateRouteAdmin>} />
          <Route path="/admin/utilisateurs/ajouter" element={<PrivateRouteAdmin><AddUser /></PrivateRouteAdmin>} />
          <Route path="/admin/commandes" element={<PrivateRouteAdmin><OrderList /></PrivateRouteAdmin>} />
          <Route path="/admin/users/:id/edit" element={<PrivateRouteAdmin><EditUser /></PrivateRouteAdmin>} />
          <Route path="/prospects" element={<ProspectList />} />
          <Route path="/clients" element={<ConfirmedClients />} />
          <Route path="/orders" element={<OrdersToConfirm />} />
          <Route path="/dashboard/chef" element={<PrivateRouteRole allowedRoles={["admin", "chef"]}><h1 className="text-center mt-20 text-3xl font-bold text-purple-700">ChefDashboard</h1></PrivateRouteRole>} />
          <Route path="/admin/utilisateurs/:id" element={<PrivateRouteAdmin><UserProfile /></PrivateRouteAdmin>} />
          <Route path="/admin/edit-user/:id" element={<EditUser />} />
          <Route path="clients-confirmes" element={<ConfirmedClients />} />

          {/* Route chef avec sous-routes */}
          <Route path="/dashboard/chef" element={<ChefLayout />}>
            <Route index element={<ChefDashboard />} />
            <Route path="profil" element={<ChefProfile />} />
            <Route path="commandes" element={<ChefCommandes />} />
            <Route path="prospects" element={<ChefProspects />} />
          </Route>


          {/* Routes dashboard redirection */}
          <Route path="/dashboard" element={<DashboardRedirect />} />
          <Route path="/dashboard/client" element={<ClientDashboard />} />
          <Route path="/dashboard/closer" element={<CloserDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/closer/clients" element={<ClientListForCloser />} />
          <Route path="/dashboard/closer/orders-to-confirm" element={<PrivateRouteCloser><CloserOrdersToConfirm /></PrivateRouteCloser>} />

          {/* Routes client avec layout + sous-routes */}
          <Route path="/client" element={<ClientLayout />}>
            <Route path="dashboard" element={<ClientDashboard />} />
            <Route path="orders" element={<ClientOrders />} />
            <Route path="profile" element={<ClientProfile />} />
            <Route path="payment-methods" element={<ClientPaymentMethods />} />
            <Route path="support" element={<ClientSupport />} />

            <Route path="chef/dashboard" element={<ChefDashboard />} /> {/* CHEMIN RELATIF */}

            {/* Route spécifique profil par id (plus haut dans la hiérarchie) */}
            <Route path="/client/profile/:id" element={<ClientProfileCloser />} />
          </Route>
        </Routes>
      </main>
      <GoToCartButton />
      <ScrollToTopButton />
      <Footer />
      <WhatsappButton />
    </div>
  );
}
