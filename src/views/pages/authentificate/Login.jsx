import React from "react"
import { FaRegEnvelope, FaLockOpen, FaFacebook, FaGoogle } from "react-icons/fa"
import { BiUser} from "react-icons/bi"

import R from "../../../assets/styleSheets/Register.module.css"


const Login = () => {


    return (
        <div className = {R.block_body}>
            <div className = {R.form_block}>
                <div className = {R.block_img}>
                    <h2> Connectez-vous </h2>
                </div>
                <form autoComplete="off">
                    
                    <div className = {R.div_input}>
                        <div>
                            <FaRegEnvelope />
                            <input type="text" name="email"
                             id="email"
                             placeholder="Adresse email *" />
                        </div>
                        <span id = "email_error"></span>
                    </div>
                    <div className = {R.div_input}>
                        
                        <div>
                        <FaLockOpen />
                            <input type="text" name="password"
                             id="password"
                             placeholder="Mot de passe *" />
                             
                        </div>
                        <span id = "pwd_error"></span>
                    </div>
                    <li>
                        <a href="/reinitialise">J'ai oublier mon mot de passe </a>
                    </li>
                    <button className = {R.btn_connect}> 
                        connexion 
                    </button>
                    <p className = {R.p}>
                        <a href="">En poursuivant</a> , vous acceptez notre accord d'utilisation.
                    </p>
                    ou
                    <div className = {R.orther_service}>
                        <div> <FaFacebook /> </div>
                        <button> continuer avec faceboook</button>
                    </div>
                    <div className = {R.orther_service}>
                        <div> <FaGoogle /> </div>
                        <button> continuer avec google</button>
                    </div>
                    
                    <p>
                    Besoin d'un compte ? 
                    <a href="/inscription" className = {R.link_connect}>
                        S'inscrire gratuitement
                    </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login