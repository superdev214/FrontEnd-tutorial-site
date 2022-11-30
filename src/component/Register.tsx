import React, { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Service from "../service/service";
import { typeUser } from "../types/typeData";

const Register = () => {
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
    const register = () =>{
        console.log(m_user);
        Service.checkRegister(m_user).then((res : any) => {
            if(res.data.msg === "success")
              {
                navigate('/Login');
              } 
            else
                console.log("failed register");
        }).catch((err : Error) => {
            console.log(err);
        })
    }
    return (
        <div className="border-3 border-sky-700 p-[10px] shadow-lg shadow-cyan-700 bg-sky-300 text-center">
        <p>First Name:</p>
        <input type="text"     name="first_name" onChange={handleInputChange}></input>
        <p>Last Name</p>
        <input type="text"     name="last_name"  onChange={handleInputChange}></input>
        <h3>Email:</h3>
        <input type="text"     name="email"      onChange={handleInputChange}></input>
        <h3>Password :</h3>
        <input type="password"     name="password"   onChange={handleInputChange}></input>
        <br></br>
        <button onClick={register}>Register</button>
      </div>
    )
}

export default Register;