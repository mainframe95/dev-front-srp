import React from "react"
import { FaRegEnvelope, FaLockOpen } from "react-icons/fa"
import { BiUser } from "react-icons/bi"

import R from "../../../assets/styleSheets/Register.module.css"


const Register = () => {


    const chooseOption = (e, index, link) => {
        e.preventDefault();
        var allBtn = document.querySelectorAll("#btn");

        for (var i = 0; i < allBtn.length; i++) {
            allBtn[i].classList.remove(R.active);
            allBtn[i].classList.add(R.no_active);
        }

        allBtn[index].classList.add(R.active);
        allBtn[index].classList.remove(R.no_active);

        window.location.href = link
    }

    return (
        <div className={R.block_body}>
            <div className={R.form_block}>
                <div className={R.block_img}>
                    <h2> Créer un compte </h2>
                </div>
                <form autoComplete="off">
                    <div className={R.div_input}>
                        <div>
                            <BiUser />
                            <input type="text" name="name"
                                id="name"
                                placeholder="Nom complet *" />
                        </div>
                        <span id="name_error"></span>
                    </div>
                    <div className={R.div_input}>
                        <div>
                            <FaRegEnvelope />
                            <input type="text" name="email"
                                id="email"
                                placeholder="Adresse email *" />
                        </div>
                        <span id="email_error"></span>
                    </div>
                    <div className={R.div_input}>
                        <FaLockOpen />
                        <div>
                            <input type="text" name="password"
                                id="password"
                                placeholder="Mot de passe *" />
                            <span id="pwd_error"></span>
                        </div>
                        <div>
                            <input type="text" name="passwordC"
                                id="passwordC"
                                placeholder="Confirmer mot de passe *" />
                            <span id="pwdC_error"></span>
                        </div>
                    </div>
                    <div className={R.btn_group} >
                        <button
                            id="btn"
                            onClick={(e) => chooseOption(e, 0, "/projetDetails?8")}>
                            je suis client
                        </button>
                        <button
                            id="btn"
                            onClick={(e) => chooseOption(e, 1, "/dashboardUser")}>
                            je suis prestataires
                        </button>
                    </div>
                    <button className={R.btn_connect}>
                        connexion
                    </button>
                    <p>
                        <a href="">En poursuivant</a> , vous acceptez notre accord d'utilisation.
                    </p>
                    <p>
                        Avez-vous déjà un compte ?
                        <a href="/connexion" className={R.link_connect}>
                            Connectez-vous
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register