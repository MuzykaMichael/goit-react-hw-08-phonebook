import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import {Navigate, Route, Routes} from 'react-router-dom'
import { refreshUser } from "redux/auth/operations";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { Suspense } from "react";
import { Loader } from "./Loader/Loader";

export const App = ()=>{
  const Welcome = lazy(()=>import('pages/Welcome/Welcome'));
  const Contacts = lazy(()=>import('pages/Contacts/Contacts'));
  const Register = lazy(()=>import('pages/Register/Register'));
  const Login = lazy(()=>import('pages/LogIn/LogIn'));

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(refreshUser());
  },[dispatch])

  return(
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route index element={<Welcome />}/>
      <Route path="contacts" element={<PrivateRoute component={<Contacts />}/>}/>
      <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />}/>}/>
      <Route path="login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />}/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    </Suspense>
  )


}