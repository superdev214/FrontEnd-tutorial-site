import React, { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Service from "../service/service";
import { typeUser } from "../types/typeData";
const Login = () => {
    const initalUser = {
        first_name : null,
        last_name : null,
        email : null,
        password : null,
    };
    const navigate = useNavigate();
    const [m_user, setUser] = useState<typeUser>(initalUser);
   
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        setUser({...m_user, [name] : value});
    };
    const checkLogin = () =>{
        Service.checkLogin(m_user).then((res : any) => {
    
            if(res.data.msg === "success")
              {
                console.log(res.data.user);
                //  localStorage.setItem('token', res.data.user.token);
                localStorage.setItem('token', res.data.token);
                navigate('/tutorials');
              } 
            else
                console.log("failed log in");
        }).catch((err : Error) => {
            console.log(err);
        })
    }
  return (
    <div className="border-3 border-sky-700 p-[10px] shadow-lg shadow-cyan-700 bg-sky-300 text-center">
      <h3>Email:</h3>
      <input type="text"     name="email"      onChange={handleInputChange}></input>
      <h3>Password :</h3>
      <input type="password"     name="password"   onChange={handleInputChange}></input>
      <br></br>
      <button onClick={checkLogin}>Login</button>
    </div>
  );
};

export default Login;
