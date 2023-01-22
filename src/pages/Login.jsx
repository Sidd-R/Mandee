import React, { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {TextField,Button,Stack} from '@mui/material';
import '../styles/Register.css';
import axios from "axios";

export default function Register({login,setLogin,setProfile}) {
    const nav = useNavigate()
    useEffect(() => {
      if (login) {
        nav('/dashboard')
      }
    }, [login])
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit =  () => {
        axios.get(`http://localhost:4000/register/${email}/${password}/`).then(res => {
                        console.log("hello",res);
            if (res.data.data.status === 'fail') alert('incorrect credentials')
            else {
                console.log("whyyyy",res.data.data.info,'profile');
                setProfile(res.data.data.info)
                nav('/home')
                setLogin(true)
                localStorage.setItem("login",true)
                localStorage.setItem("profile",res.data.data.info)
            }
        })
        console.log(email,password)
        
    }

    return (
        <div style={{marginTop:"90px"}}>
            <div className="registerForm" style={{ "border": "2px solid #A0A189", "borderRadius": "10px" }}>
                <form>
                    <Stack spacing={10} direction="row" justifyContent={"center"} alignItems={"center"}>
                        <div>
                        <h1 className="signUp">Login</h1>
                            <Stack spacing={2}>
                                <div>
                                    <p className="registerText">Email</p>
                                    <TextField name="email" onChange={(e)=>setEmail(e.target.value)} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                                <div>
                                    <p className="registerText">Password</p>
                                    <TextField name="password" type="password" onChange={(e)=>setPassword(e.target.value)} variant="filled" style={{ "border": "2px solid #A0A189", "borderRadius": "20px", "width": "100%" }} />
                                </div>
                            </Stack>
                        </div>
                        <div className="loginImage"style={{width:"40%",margin:"10% 3% 7%",marginLeft:"80px"}}></div>
                    </Stack>
                    <p className="alreadyRegistered">Already have an account?<Link to="/register"> Register</Link></p>
                    <Button color="inherit" onClick={submit}
                     style={{ "backgroundColor": "#F0F5D1", "width": "60%", "margin": "20px","border": "2px solid #A0A189", "borderRadius": "20px" }}>
                        <p className="Navbar-text">Login</p>
                    </Button>
                </form>
            </div>
        </div>
    )
};