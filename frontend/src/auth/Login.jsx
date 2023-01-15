import React,{useState,useEffect} from 'react';
import NavBar from '../components/NavBar';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { FaSignInAlt } from "react-icons/fa";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    if (isSuccess) {
      toast.success(message);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const Login = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
    <NavBar/>
    <ToastContainer />
 <div class=" flex w-full">
  <div class="w-full bg-black lg:mt-16 sm:mt-auto md:mt-auto">
    <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p class="text-2xl mt-5">Login|</p>
      </div>
      <div>
        <fieldset class="border-t border-solid border-gray-600">
          <legend class="mx-auto px-2 text-center text-sm">login via our secure system</legend>
        </fieldset>
      </div>
      <div class="mt-10">
        <form onSubmit={Login}>
          <div>
            <label class="mb-2.5 block font-extrabold" for="email">Email</label>
            <input type="email" id="email" name='email' value={email} onChange={onChange} class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="nadia@gmail.com" />
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="password">Password</label>
            <input type="password" id="password" name='password' value={password} onChange={onChange} class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
          </div>
          <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
            <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label></div>
            <div>
              <a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
            </div>
          </div>
          <div class="my-10">
            <button class="w-full rounded bg-green-700 p-2 hover:bg-green-900">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="h-screen w-1/2 bg-blue-600 md:block lg:block hidden mt-5">
    <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" class="h-full w-full" />
  </div>
</div>
    </>

  );
}
export default Login;