import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) return <p>Загрузка...</p>;

  if (!user) return null; // Пока редирект

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
     {/* пишешь от сюда */}
      <h2>Профиль</h2>
      <p>Email: {user.email}</p>
       
      
{/* до сюда */}
    </div>
  );
};

export default Profile;
