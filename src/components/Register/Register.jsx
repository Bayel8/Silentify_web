import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { registerUser } from "./handle/HandleRegister";
import "./Register.css"; // твои стили

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(email, password);
      console.log("Пользователь зарегистрирован:", user);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-section">
      <div className="register-card">
        <h2>Регистрация</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
       <p>
        Уже есть аккаунт?{' '}
        <Link to="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
          Войти
        </Link>
        {/* <button></button> */}
      </p>
      </div>
    </div>
  );
};

export default Register;
