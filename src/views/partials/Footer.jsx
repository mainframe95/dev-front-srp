import React, { useState, useEffect } from "react"
import F from "../../assets/styleSheets/Footer.module.css"


const Footer = () => {

    const [val, setVal] = useState(0)

    let getV = window.location.search.substring(1);

    useEffect(() => {
        setVal(getV);
        //alert (getV)
        // setTimeout(() => {
        if (val == 8) {
            document.querySelectorAll("#foot")[0].style.display = "none"
            document.querySelectorAll("#foot")[1].style.display = "none"
            document.querySelectorAll("#foot")[2].style.display = "none"
            // document.querySelectorAll ("#foot")[3].style.display = "none"

            //document.getElementById ("footer_social").style.display = "none"
        }
        //}, 2000);

    })

    return (
        <footer >
            <div className={F.widget_group} id="foot">
                <div className={F.socials}>
                    <li>
                        <a href="">
                            <img src="/ressources/socials.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/ressources/socials4.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/ressources/socials3.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/ressources/socials2.svg" />
                        </a>
                    </li>
                </div>
                <div className={F.newsletter_form} id="foot">
                    <p>
                        Abonnez-vous aux alertes de nouvelles et
                        idées de Services Rapide.
                    </p>
                    <form>
                        <input type="text" name="email"
                            id="email" placeholder="Entré votre email" />
                        <button> S'inscrire</button>
                    </form>
                </div>
            </div>

            <div className={F.link_foot} id="foot">
                <ul>
                    <h3> A propos </h3>
                    <li>
                        <a href="">Graphisme & Design</a>
                    </li>
                    <li>
                        <a href="">Marketing Digital </a>
                    </li>
                    <li>
                        <a href="">Rédaction & Traduction</a>
                    </li>
                    <li>
                        <a href=""> Video & Animation</a>
                    </li>
                    <li>
                        <a href="">Programmation & Tech</a>
                    </li>
                    <li>
                        <a href="">Business</a>
                    </li>
                    <li>
                        <a href="">Loisirs</a>
                    </li>
                    <li>
                        <a href="">Tendance</a>
                    </li>
                    <li>
                        <a href="">Tous categories</a>
                    </li>
                </ul>

                <ul>
                    <h3> Nos Services </h3>
                    <li>
                        <a href="">Graphisme & Design</a>
                    </li>
                    <li>
                        <a href="">Marketing Digital </a>
                    </li>
                    <li>
                        <a href="">Rédaction & Traduction</a>
                    </li>
                    <li>
                        <a href=""> Video & Animation</a>
                    </li>
                    <li>
                        <a href="">Programmation & Tech</a>
                    </li>
                    <li>
                        <a href="">Business</a>
                    </li>
                    <li>
                        <a href="">Loisirs</a>
                    </li>
                    <li>
                        <a href="">Tendance</a>
                    </li>
                    <li>
                        <a href="">Tous categories</a>
                    </li>
                </ul>

                <ul>
                    <h3> Industries </h3>
                    <li>
                        <a href="">Graphisme & Design</a>
                    </li>
                    <li>
                        <a href="">Marketing Digital </a>
                    </li>
                    <li>
                        <a href="">Rédaction & Traduction</a>
                    </li>
                    <li>
                        <a href=""> Video & Animation</a>
                    </li>
                    <li>
                        <a href="">Programmation & Tech</a>
                    </li>
                    <li>
                        <a href="">Business</a>
                    </li>
                    <li>
                        <a href="">Formation</a>
                    </li>
                </ul>

                <ul>
                    <h3>  </h3>
                    <li>
                        <a href="">Graphisme & Design</a>
                    </li>
                    <li>
                        <a href="">Marketing Digital </a>
                    </li>
                    <li>
                        <a href="">Rédaction & Traduction</a>
                    </li>
                    <li>
                        <a href=""> Video & Animation</a>
                    </li>
                    <li>
                        <a href="">Programmation & Tech</a>
                    </li>
                    <li>
                        <a href="">Business</a>
                    </li>
                    <li>
                        <a href="">Formation</a>
                    </li>
                </ul>
            </div>

            <div className={F.copyright}>
                <p>
                    Copyright © 2022 Services Rapide.
                    L'utilisation de ce site Web vaut acceptation de nos &nbsp;
                    <a href="">Accord de l'utilisateur</a>&nbsp;&&nbsp;
                    <a href="">Politique de confidentialité</a>.
                </p>
                <p>
                    Des conditions s'appliquent, veuillez consulter notre remboursement
                    &nbsp;<a href=""> politique de remboursement. </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;