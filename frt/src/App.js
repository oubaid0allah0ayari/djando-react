import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage';
import AdminPage from './components/AdminPage';
import AccountPage from './components/AccountPage';
import UserRegister from './components/UserRegister';
import Login from './components/Login';  // Ensure you import the Login component

const user = {
  isLoggedIn: false,
  isAdmin: true, // Set to true if the user is an admin
};

function App() {
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999, image: 'demonBluray', rating: 4 },
    { id: 2, name: 'Shirt', category: 'Clothing', price: 29, image: 'demonBluray', rating: 4 },
    { id: 3, name: 'Book', category: 'Books', price: 19, image: 'demonBluray', rating: 4 },
  ];

  const recommendedProducts = [
    { id: 4, name: 'Smartphone', category: 'Electronics', price: 599, image: 'demonBluray', rating: 4 },
    { id: 5, name: 'Jacket', category: 'Clothing', price: 49, image: 'demonBluray', rating: 4 },
  ];

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/account"
            element={
              user.isLoggedIn ? (
                user.isAdmin ? (
                  <AdminPage />
                ) : (
                  <AccountPage />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/UserRegister" element={<UserRegister />} />
          <Route path="/login" element={<Login />} /> {/* Ensure the Login page route */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
