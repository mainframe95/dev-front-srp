import React from "react"
import H from "../../assets/styleSheets/Header.module.css"
import { FaSearch } from "react-icons/fa"

const HeadImg = () => {

    return (
        <header>
            <div className = {H.div_img}>
                <div className = {H.d1} >
                <img src="/ressources/ellipse1.png"/>
                    <img src="/ressources/ellipse3.png"/>
                    <img src="/ressources/ellipse5.png"/>
                    <img src="/ressources/ellipse4.png"/>
                    <div className = {H.title}>
                        <h1>
                            Meilleurs services freelance <br /> 
                            pour votre  <b> Business </b> 
                        </h1>
                        <p>
                        Bienvenue dans l'un des plus grands affiliés
                            programmes de marketing dans le monde.
                            Le programme Anaizan Associates aide
                            créateurs de contenu, éditeurs et
                            les blogueurs monétisent leur trafic.
                            Avec des millions de produits et de programmes
                             disponible sur Anaizan, les associés utilisent
                             outils de création de liens faciles à diriger
                             leur public à leurs recommandations,
                              et gagnez des achats et des programmes éligibles.
                        </p>
                    </div>
                </div>
                <div className = {H.d2}>
                    <img src="/ressources/ellipse2.png" alt="" />
                    <img src="/ressources/ellipse48.png" alt="" />
                    <img src="/ressources/ellipse47.png" alt="" />
                    <img src="/ressources/img.png" alt="" />
                </div>
            </div>
        </header>
    )
}

export default HeadImg;