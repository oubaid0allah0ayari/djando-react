import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Check if the user is already logged in by checking the session cookie
  useEffect(() => {
    const sessionId = document.cookie.split('; ').find(row => row.startsWith('sessionid='));
    if (sessionId) {
      navigate('/'); // If logged in, redirect to the Home page
    }
  }, [navigate]);

  const handleLogin = () => {
    // Mock login logic
    if (email && password) {
      // Simulate setting session ID (this would normally be handled by the backend)
      document.cookie = 'sessionid=12345; path=/'; // Set a mock session ID
      navigate('/'); // Redirect to Home page on successful login
    } else {
      alert('Please enter both email and password');
    }
  };

  const handleRegister = () => {
    navigate('/UserRegister'); // Navigate to UserRegister page
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Log In
      </button>

      {/* Register Button */}
      <button className="btn btn-link mt-3" onClick={handleRegister}>
        Don't have an account? Register here
      </button>
    </div>
  );
};

export default Login;
