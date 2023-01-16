import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Account from "../components/Account";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <section className=" align-item justify-center">
        <h1 className="text-center mb-2.5 block font-extrabold">Lbanka_lik Souhaite la bienvenue {user && user.name}</h1>
        <p className="text-center">Account Dashboard</p>
        {/* <button type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out items-center justify-center ml-80" >creer Your Compte</button> */}

      </section>
      <Account />
    </>
  );
}

export default Dashboard;
