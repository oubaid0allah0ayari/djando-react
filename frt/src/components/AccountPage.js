import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for session ID in cookies
    const sessionid = document.cookie
      .split('; ')
      .find(row => row.startsWith('sessionid='));
    if (sessionid) {
      setIsLoggedIn(true);
    } else {
      navigate('/UserLogin'); // Redirect to login if no session ID found
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the session ID cookie
    document.cookie = 'sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    navigate('/UserLogin'); // Redirect to login after logout
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome to your account</h2>
          <p>You are logged in!</p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <p>Redirecting to login...</p>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
