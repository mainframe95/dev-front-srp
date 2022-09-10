import React, { useEffect, useState } from "react"
import H from "../../assets/styleSheets/Header.module.css"
import { FaSearch } from "react-icons/fa"
import Countdown from "react-countdown"

import HeadImg from "./headImg"

const Header = () => {


    const [val, setVal] = useState(0)

    let getV = window.location.search.substring(1);


    //function pour le compte à rebours
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <span>
                    {hours + "h " + minutes + "min " + seconds + "s"}
                </span>
            );
        }
    };

    const Completionist = () => <span> Temps espiré</span>;

    useEffect(() => {

        setVal(getV);
        var all = document.querySelectorAll("#li");
        var element = document.getElementById("compteur");

        if (val == 8) {
            all[0].style.display = "none"
            all[1].style.display = "none"
            all[2].style.display = "none"
            all[3].style.display = "none"
            element.style.display = "flex"

        }
    })

    //function qui fait la rechercher des produit
    const searchCategorie = (text, id) => {
        window.location.search = text

        sessionStorage.setItem("active_link", id)
    }

    const s_link_logo = [
        { link: "Conception de logo", searchs: "Conception_de_logo" },
        { link: "Style de marque", searchs: "Style_de_marque" },
        { link: "Police et Typographie", searchs: "Police_et_typographie" },
        { link: "Carte de visite et Papeterie", searchs: "Carte_de_visite_et_papeterie" },
        { link: "Affiche de Publicité", searchs: "Affiche_de_publicite" }
    ]

    const s_link_web = [
        { link: "Conception de site web", searchs: "Conception_de_site_web" },
        { link: "Conception d'application", searchs: "Conception_application" },
        { link: "Conception UX", searchs: "Conception_UX" },
        { link: "Page de destination", searchs: "Conception_page_destination" },
        { link: "Conception d'icône", searchs: "Conception_icone" },
    ]

    const s_link_visual = [
        { link: "Montage photoshop", searchs: "Montage_photoshop" },
        { link: "Conception des présentation", searchs: "Conception_des_presentations" },
        { link: "Conception infographique", searchs: "Conception_infographique" },
        { link: "Conception de CV", searchs: "Conception_de_CV" },
        { link: "Traçage vectoriel", searchs: "Tracage_vectoriel" }
    ]

    const s_link_print = [
        { link: "Conception de dépliants", searchs: "Conception_des_depliants" },
        { link: "Conception de brochure", searchs: "Conception_des_brochures" },
        { link: "Conception d'affiche", searchs: "Conception_des_affiches" },
        { link: "Conception de catalogue", searchs: "Conception_des_catalogues" },
        { link: "Conception de menus", searchs: "Conception_des_menus" },
        { link: "Conception de carte de visite", searchs: "Conception_de_carte_de_viste" }
    ]

    const s_link_market = [
        { link: "Médias sociaux", searchs: "Conception_des_medias_sociaux" },
        { link: "Art de filtre et de lentille", searchs: "Art_de_filtre_et_de_lentille" },
        { link: "Courier électronique", searchs: "Conception_de_courier_electronique" },
        { link: "Banières web", searchs: "Barniere" },
    ]

    const s_link_pers = [
        { link: "Industrielle et produit", searchs: "Industriel_et_produits" },
        { link: "Modélisation de personnage", searchs: "Modelisation_de_personnage" },
        { link: "Stand commercial", searchs: "Conception_de_stand_commercial" },
    ]

    const s_link_art = [
        { link: "Illustration", searchs: "Illustration" },
        { link: "Conception des motifs", searchs: "Conception_des_motifs" },
        { link: "Portraire et Caricature", searchs: "Portraire_et_caricature" },
        { link: "Dessin animé et bande déssiné", searchs: "Dessin_anime_et_bande_dessine" },
        { link: "Conception de tatouage", searchs: "Conception_de_tatouage" }
    ]

    const s_link_pack = [
        { link: "Emballage et couverture", searchs: "Emballage_et_couverture" },
        { link: "Conception de livre", searchs: "Conception_de_livre" },
        { link: "Conception de pochette d'album", searchs: "Conception_de_pochette_album" },
    ]

    //tableau des sous liens
    const link_graphics = [
        { s_link: "Conception de logo", index: 0 },
        { s_link: "Style de marque" },
        { s_link: "Art du jeu" },
        { s_link: "Graphique pour streamers" },
        { s_link: "Carte de viste" },
        { s_link: "Illustration" },
        { s_link: "Conception des motifs" },
        { s_link: "Emballage & Conception d'étiquette" },
        { s_link: "Conception de la brochure" },
        { s_link: "Graphique pour streamers" },
        { s_link: "Carte de viste" },
        { s_link: "Illustration" },
        { s_link: "Conception des motifs" },
        { s_link: "Emballage & Conception d'étiquette" },
        { s_link: "Conception de la brochure" },
    ]


    //sous menu du lien marketing digital
    const s_link_mk1 = [
        { link: "Marketing des médias sociaux", searchs: "Marketing_des_medias_sociaux" },
        { link: "Publicité sur les réseaux sociaux", searchs: "Publicite_sur_les_reseaux_sociaux" },
        { link: "Optimisation du moteur de recherche", searchs: "Optimisation_du_moteur_de_recherche" },
        { link: "Local SEO", searchs: "local_SEO" },
        { link: "Marketing Stratégique", searchs: "Marketing_Strategique" },
        { link: "Relations Public", searchs: "Relatons_public" },
        { link: "Marketing de contenu", searchs: "Marketing_de_contenu" },
        { link: "Marketing de email", searchs: "Marketing_de_email" },
    ]

    const s_link_mk2 = [
        { link: "Analyse d'audience d'internet", searchs: "Analyse_audience_internet" },
        { link: "Conseil en commercialisation", searchs: "Conseil_en_commercialisation" },
        { link: "Marketing des moteurs de recherche", searchs: "Marketing_des_moteurs_de_recherche" },
        { link: "Marketing de e-commerce", searchs: "Marketing_de_e-commerce" },
        { link: "Commercialisation d'application mobile", searchs: "Commercialisation_application_mobile" },
        { link: "Commercialisation des livres", searchs: "Commercialisation_des_livres" },
        { link: "Autres", searchs: "Autres" },
    ]


    //Redaction et traduction
    const s_link_trad1 = [
        { link: "Article et Poste de blogs", searchs: "Article_et_Poste_de_blogs" },
        { link: "Traduction", searchs: "Traduction" },
        { link: "Couverture de lettre", searchs: "Couverture_de_lettre" },
        { link: "Profile de LinkedIn", searchs: "Profile_de_LinkedIn" },
        { link: "Copy de vente", searchs: "Copy_de_vente" },
        { link: "Copie sur les réseaux sociaux", searchs: "Copie_sur_les_reseaux_sociaux" },
        { link: "Copie d'email", searchs: "Copie_email" },
        { link: "Edition de livre", searchs: "Edition_de_livre" },
        { link: "Etudes de cas", searchs: "Etudes_de_cas" },
        { link: "Copie d'email", searchs: "Copie_email" },
    ]

    const s_link_trad2 = [
        { link: "L'écriture de scénario", searchs: "ecriture_de_scenario" },
        { link: "Création d'écriture", searchs: "Creation_ecriture" },
        { link: "Ecriture UX", searchs: "Ecriture_UX" },
        { link: "Voix et tonalité de marque", searchs: "Voix_et_tonalite_de_marque" },
        { link: "Rédaction d'écriture", searchs: "Redaction_ecriture" },
        { link: "Rédaction technique", searchs: "Redaction_technique" },
        { link: "Contenu de site web", searchs: "Contenu_de_site_web" },
        { link: "Descritpion de produits", searchs: "Descritpion_de_produits" },
        { link: "Transcription", searchs: "Transcription" },
        { link: "Rédaction de subvention", searchs: "Rédaction de subvention" },
    ]

    return (
        <header>
            <div className={H.head_nav1}>
                <li className={H.link_logo}>
                    <a href="/">
                        <img src="/ressources/logo.svg" className={H.logo} />
                    </a>
                </li>
                <div className={H.minuteur} id="compteur">
                    <div className={H.ms}>
                        <img src="/ressources/pin.svg" />
                        <h4>L'offre se termine</h4>
                        <h3>
                            <Countdown date={Date.now() + 5011200000} renderer={renderer} />
                        </h3>
                    </div>
                </div>
                <ul className={H.li_group} id="li" >
                    <li>
                        <a href="">Anaizan Business</a>
                    </li>
                    <li>
                        <a href="">Découvrir</a>
                    </li>
                    <li>
                        <a href="">Français</a>
                    </li>
                    <li>
                        <a href="">Devenir prestataires</a>
                    </li>
                    <ul className={H.btn_group} id="li" >
                    <li>
                        <a href="/connexion">Se connecter</a>
                    </li>
                    <li>
                        <a href="/inscription">S'inscrire</a>
                    </li>
                </ul>
                </ul>

                

                <form id="li" >
                    <button>
                        <FaSearch />
                    </button>
                    <input type="text" name="text" id="text"
                        placeholder="Rechercher" />
                </form>
            </div>

            <nav id="li">
                <ul>
                    <li>
                        <a href="/graphisme&design">Graphisme & Design</a>
                        <div className={H.div_menus_ul}>
                            <div>
                                <ul className={H.menu_ul}>
                                    <h3>Logo et identité</h3>
                                    {s_link_logo.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, i)}>
                                                <a href={`${   "produits?" + list.searchs}`}>{list.link}</a>
                                                
                                            </li>
                                        )
                                    })}
                                </ul>

                                <ul className={H.menu_ul}>
                                    <h3> Web et application </h3>
                                    {s_link_web.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, 5 + i)}>
                                                <a href={`${   "produits?" + list.searchs}`}>{list.link}</a>
                                            </li>
                                        )
                                    })}
                                </ul>

                                <ul className={H.menu_ul}>
                                    <h3> Conception Visuel </h3>
                                    {s_link_visual.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, 10 + i)}>
                                                <a href={`${   "produits?" + list.searchs}`}>{list.link}</a>
                                            </li>
                                        )
                                    })}
                                </ul>

                                <ul className={H.menu_ul}>
                                    <h3> Conception d'impression </h3>
                                    {s_link_print.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, 15 + i)}>
                                                <a href={`${   "produits?" + list.searchs}`}>{list.link}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                                <ul className={H.menu_ul}>
                                    <h3> Conception Marketing </h3>
                                    {s_link_market.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, 21 + i)}>
                                                <a href={`${   "produits?" + list.searchs}`}>{list.link}</a>
                                            </li>
                                        )
                                    })}
                                </ul>

                                <ul className={H.menu_ul}>
                                    <h3> Conception de Personnage </h3>
                                    {s_link_pers.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, 25 + i)}>
                                                <a href={`${   "produits?" + list.searchs}`}>{list.link}</a>
                                            </li>
                                        )
                                    })}
                                </ul>

                                <ul className={H.menu_ul}>
                                    <h3> Art et Illustration </h3>
                                    {s_link_art.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, 28 + i)}>
                                                <a href={`${   "produits?" + list.searchs}`}>{list.link}</a>
                                            </li>
                                        )
                                    })}
                                </ul>

                                <ul className={H.menu_ul}>
                                    <h3> Emballage et Pochette </h3>
                                    {s_link_pack.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, 33 + i)}>
                                                <a href={`${   "produits?" + list.searchs}`}>{list.link}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li>
                        <a href="/marketingDigital">Marketing Digital </a>
                        <div className={H.div_menus_ul}>
                            <div>
                                <ul className={H.menu_ul}>
                                    <h3>Logo et identité</h3>
                                    {s_link_mk1.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, i)}>
                                                <a href={`${ window.location + "?" + list.searchs}`}>{list.link}</a>
                                                
                                            </li>
                                        )
                                    })}
                                </ul>

                                <ul className={H.menu_ul}>
                                    <h3> Conception Marketing </h3>
                                    {s_link_mk2.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, 21 + i)}>
                                                {list.link}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li>
                        <a href="/redactionTraduction">Rédaction & Traduction</a>
                        <div className={H.div_menus_ul}>
                            <div>
                                <ul className={H.menu_ul}>
                                    <h3>Logo et identité</h3>
                                    {s_link_trad1.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, i)}>
                                                <a href={`${ window.location + "?" + list.searchs}`}>{list.link}</a>
                                                
                                            </li>
                                        )
                                    })}
                                </ul>

                                <ul className={H.menu_ul}>
                                    <h3> Conception Marketing </h3>
                                    {s_link_trad2.map((list, i) => {
                                        return (
                                            <li id="items"
                                                onClick={() => searchCategorie(list.searchs, 21 + i)}>
                                                {list.link}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li>
                        <a href="/videoAnimation"> Video & Animation</a>
                    </li>
                    <li>
                        <a href="/programmationTech">Programmation & Tech</a>
                    </li>
                    <li>
                        <a href="/business">Business</a>
                    </li>
                    <li>
                        <a href="/formation">Formation</a>
                    </li>
                    <li>
                        <a href="">Tendance</a>
                    </li>
                </ul>
            </nav>


        </header>
    )
}

export default Header;