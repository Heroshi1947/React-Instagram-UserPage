import React, { useState } from 'react';
import '../src/Userpage.css';

const UserPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Handle login logic
      console.log('Logging in...');
    } else {
      // Handle signup logic
      console.log('Signing up...');
    }
  };

  return (
    <div className="container">
      {/* <h2>{isLogin ? 'Login' : 'Sign Up'}</h2> */}
      <div className="text">{isLogin ? 'User Login' : 'User Sign Up'}</div>
      <div className="page">
      <div className="title">Instantgram</div>
      <form id="signin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <div className="signup">
        <p>
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
      </div>
    </div>
  );
};

export default UserPage;