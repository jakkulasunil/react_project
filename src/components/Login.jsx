import { useState } from "react";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setError("");
    alert("Login Successful (demo)");
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>UmadeviCollections</h2>
        <p className="login-subtitle">Login to continue</p>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <div className="login-footer">
          <a href="#">Forgot Password?</a>
          <span> | </span>
          <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
