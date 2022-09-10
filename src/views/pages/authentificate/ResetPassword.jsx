import React from "react"
import { FaRegEnvelope, FaLockOpen, FaFacebook, FaGoogle } from "react-icons/fa"
import { BiUser} from "react-icons/bi"

import R from "../../../assets/styleSheets/Register.module.css"
import HeadImg from "views/partials/headImg"


const ResetPassword = () => {


    return (
        <div className = {R.block_body}>
           
            <div className = {R.form_block} id = {R.reset}>
            <h1> Mot de passe oublié? </h1>
                <form autoComplete="off" className = {R.resetPwd}>
                    <p>
                    Entrez votre email ci-dessous. Nous vous enverrons ensuite un 
                    lien de réinitialisation du mot de passe à votre adresse e-mail.
                    </p>
                    <div className = {R.div_input}>
                        <div>
                            <FaRegEnvelope />
                            <input type="text" name="email"
                             id="email"
                             placeholder="Adresse email *" />
                        </div>
                        <span id = "email_error"></span>
                    </div>
            
                    <button className = {R.btn_connect}> 
                        connexion 
                    </button>
                 
             
                    <p>
                    C'est bon j'ai retenu mon mot de passe
                    <a href="/connexion" className = {R.link_connect}>
                    Retournez à la page de connexion
                    </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword