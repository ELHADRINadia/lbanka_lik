import React from 'react'
import NavBar from '../components/NavBar';
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect} from 'react';
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

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
      navigate("/dashboard");
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

  const Register = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
    <NavBar/>
 <div class="flex w-full">
  <div class="w-full bg-black lg:mt-16 sm:mt-12 md:mt-12">
    <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p class="text-2xl mt-12">Register|</p>
      </div>
      <div>
        <fieldset class="border-t border-solid border-gray-600">
          <legend class="mx-auto px-2 text-center text-sm">register via our secure system</legend>
        </fieldset>
      </div>
      <div class="mt-10">
        <form onSubmit={Register}>
          <div>
            <label class="mb-2.5 block font-extrabold" for="fullname">fullname</label>
            <input id="name" name='name' value={name} type="text" class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"  onChange={onChange}/>
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="email">Email</label>
            <input id="email" name='email' value={email} type="email" class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"  onChange={onChange}/>
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="password">Password</label>
            <input id="password" name='password' value={password} type="password" class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" onChange={onChange}/>
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="password2">Password</label>
            <input id="password2" name='password2' value={password2} type="password2" class="inline-block w-full rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" onChange={onChange}/>
          </div>
          <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
            <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label></div>
            
          </div>
          <div class="my-10">
            <button class="w-full rounded bg-green-700 p-2 hover:bg-green-900">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="h-screen w-1/2 bg-blue-600 lg:block md:block hidden mt-16">
    <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" class="h-full w-full mt-2" />
  </div>
</div>
    </>
    

  );
}
export default Register;