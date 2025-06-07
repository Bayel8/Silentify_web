import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/foot/Footer';
import Main from './components/main/Main';
import About from './components/about/About';
import Call from './components/call/Call';
import Azbuka from './components/azbuka/Azbuka';
import Privacy from './components/privacy/Privacy';
import Register from './components/Register/Register';
import Login from "./components/Register/login/Login";
import Profile from './components/Register/profile/Profile';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/Main" element={<Main />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/call" element={<Call />} />
                        <Route path="/azbuka" element={<Azbuka />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
