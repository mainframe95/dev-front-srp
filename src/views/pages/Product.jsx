import React, { useState, useEffect } from "react";
import { FaStar, FaChevronDown, FaChevronRight } from "react-icons/fa"

import C from "../../assets/styleSheets/Categories.module.css"
import F from "../../assets/styleSheets/Product.module.css"

import { c, c2 } from "./Graphisme"
import { s } from "./AllCategories"
import HeadImg from "views/partials/headImg";

const Product = () => {

    const [article, setArticle] = useState(0)
    const [articles, setArticles] = useState(0)
    const [openMenu, setOpenMenu] = useState(sessionStorage.getItem("index") ? sessionStorage.getItem("index") : 0)

    //function qui affiche les sous menu
    const showMenu = async (index) => {
        sessionStorage.setItem("index", index)
        var allLi = document.querySelectorAll("#li_link");
        var allUl = document.querySelectorAll("#ul_link");
        var chevrons = document.querySelectorAll("#li_link span");

        for (var i = 0; i < allLi.length; i++) {
            allUl[i].style.display = "none"
            allLi[i].style.fontWeight = "100"
        }

        allUl[index].style.display = "block";
        allLi[index].style.fontWeight = "600";

        /*if ( allLi[index].style.display == "block" ) {
            chevrons[index].textContent =  ""
        } else {
            chevrons[index].innerText =  "<"
        }*/
    }

    //function qui permet de mettre en subrillance les liens cliquer
    async function activeLink(index) {
        var allLi = document.querySelectorAll("#items");

        for (var i = 0; i < allLi.length; i++) {
            allLi[i].style.background = "none";
        }

        allLi[index].style.background = "redp";
    }

    useEffect(() => {
        if (window.location.search == "") {
            sessionStorage.removeItem("active_link")
            sessionStorage.removeItem("index")
        }
        activeLink(sessionStorage.getItem("active_link"))
        showMenu(sessionStorage.getItem("index"))
    }, [])


    //tableau des liens
    const tab_link = [
        { link: "Logo et identité de marque" },
        { link: "Web et Conception d'application" },
        { link: "Conception Visuel" },
        { link: "Conception d'impression" },
        { link: "Conception marketing" },
        { link: "Conception de produit et de personnage" },
        { link: "Art et Illustration" },
        { link: "Emballage et housses" }
    ]

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
        { link: "Conception de la page de destination", searchs: "Conception_page_destination" },
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
        { link: "Conception de médias sociaux", searchs: "Conception_des_medias_sociaux" },
        { link: "Art de filtre et de lentille", searchs: "Art_de_filtre_et_de_lentille" },
        { link: "Conception de courier électronique", searchs: "Conception_de_courier_electronique" },
        { link: "Banières web", searchs: "Barniere" },
    ]

    const s_link_pers = [
        { link: "Industrielle et produit", searchs: "Industriel_et_produits" },
        { link: "Modélisation de personnage", searchs: "Modelisation_de_personnage" },
        { link: "Conception de stand commercial", searchs: "Conception_de_stand_commercial" },
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

    var el = document.getElementById("ul_link");

    //tableau de prpduct
    const tab_product = [
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
    ]

    // nouveau produits
    const newItem = [
        { img: "/ressources/product&logo/prod3.png", name: "Carte de visite", searchs: "Nouveau_produits" },
        { img: "/ressources/product&logo/prod3.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/prod3.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/prod3.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/prod3.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/prod3.png", name: "Carte de visite" },
    ]

    //produit moins cher
    const chepeast = [
        { img: "/ressources/product&logo/prod8.png", name: "Logo", searchs: "Produits_moins_cher" },
        { img: "/ressources/product&logo/prod3.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/prod3.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/prod8.png", name: "Logo" },
        { img: "/ressources/product&logo/prod8.png", name: "Logo" }
    ]

    //produit les plus vendu
    const bestSelling = [
        { img: "/ressources/product&logo/prod5.png", name: "Logo", searchs: "Produits_les_plus_vendu" },
        { img: "/ressources/product&logo/prod3.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/prod5.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/prod8.png", name: "Logo" },
        { img: "/ressources/product&logo/prod5.png", name: "Logo" }
    ]

    //function qui fait la rechercher des produit
    const searchCategorie = (text, id) => {
        window.location.search = text

        sessionStorage.setItem("active_link", id)
    }

    //function qui affiche les contenu des catégories
    const showArctile = () => {
        var search = window.location.search.substring(1)
        console.log(search)
        if (search == "") {

            return (
                <>
                    <h2 id="title">
                        Choisissez de jolie design de
                        <span id="product_name"> Carte de visite </span>
                    </h2>
                    <p id="para" >
                        Leur efficacité vient de leur capacité à condenser une image saisissante
                        et du texte accrocheur dans un format compact cadre rectangle qui fait pour
                        visualisation facile et lecture facile.
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_logo[0].searchs) {

            return (
                <>
                    <h2 id="title">
                        Conception de Logo
                    </h2>
                    <p id="para" >
                        Leur efficacité vient de leur capacité à condenser une image saisissante
                        et du texte accrocheur dans un format compact cadre rectangle qui fait pour
                        visualisation facile et lecture facile.
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_logo[1].searchs) {
            return (
                <>
                    <h2 id="title">
                        Style de marque
                    </h2>
                    <p id="para" >
                        Leur efficacité vient de leur capacité à condenser une image saisissante
                        et du texte accrocheur dans un format compact cadre rectangle qui fait pour
                        visualisation facile et lecture facile.
                    </p>
                    <div className={F.block_child}>
                        {newItem.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_logo[2].searchs) {
            return (
                <>
                    <h2 id="title">
                        Police et Typographie
                    </h2>
                    <p id="para" >
                        Leur efficacité vient de leur capacité à condenser une image saisissante
                        et du texte accrocheur dans un format compact cadre rectangle qui fait pour
                        visualisation facile et lecture facile.
                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_logo[3].searchs) {
            return (
                <>
                    <h2 id="title">
                        Carte de visite et Papeterie
                    </h2>
                    <p id="para" >
                        Leur efficacité vient de leur capacité à condenser une image saisissante
                        et du texte accrocheur dans un format compact cadre rectangle qui fait pour
                        visualisation facile et lecture facile.
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_logo[4].searchs) {
            return (
                <>
                    <h2 id="title">
                        Affiche de Publicité
                    </h2>
                    <p id="para" >
                        Leur efficacité vient de leur capacité à condenser une image saisissante
                        et du texte accrocheur dans un format compact cadre rectangle qui fait pour
                        visualisation facile et lecture facile.
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_web[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception de site web
                    </h2>
                    <p id="para" >

                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_web[1].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception d'Application
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_web[2].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception UX
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_web[3].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception de pate de destination
                    </h2>
                    <p id="para" >

                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_web[4].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception d'icône
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_visual[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception photoshop
                    </h2>
                    <p id="para" >
                        Leur efficacité vient de leur capacité à condenser une image saisissante
                        et du texte accrocheur dans un format compact cadre rectangle qui fait pour
                        visualisation facile et lecture facile.
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_visual[1].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception des présentation
                    </h2>
                    <p id="para" >

                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_visual[2].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception infographique
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_visual[3].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception de CV
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_visual[4].searchs) {
            return (
                <>
                    <h2 id="title">
                        Traçage vectoriel
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_print[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception des dépliants
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {newItem.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_print[1].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception des brochures
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_print[2].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception des affiches publicitaire
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_print[3].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception des catalogues
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_print[4].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception des menus
                    </h2>
                    <p id="para" >

                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_print[5].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception des cartes de visite
                    </h2>
                    <p id="para" >

                    </p>
                    <div className={F.block_child}>
                        {newItem.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_market[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception des médias sociaux
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_market[1].searchs) {
            return (
                <>
                    <h2 id="title">
                        Art de filtre et de lentille
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_market[2].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception de courier électonique
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_market[3].searchs) {
            return (
                <>
                    <h2 id="title">
                        Barnière web
                    </h2>
                    <p id="para" >

                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_pers[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Industrielle et produit
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_pers[1].searchs) {
            return (
                <>
                    <h2 id="title">
                        Modélisation commercial
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {newItem.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_art[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Illustration
                    </h2>
                    <p id="para" >
                        Leur efficacité vient de leur capacité à condenser une image saisissante
                        et du texte accrocheur dans un format compact cadre rectangle qui fait pour
                        visualisation facile et lecture facile.
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_art[1].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception des motifs
                    </h2>
                    <p id="para" >

                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_art[2].searchs) {
            return (
                <>
                    <h2 id="title">
                        Portraire et Caricature
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_art[3].searchs) {
            return (
                <>
                    <h2 id="title">
                        Dessin animé et bande déssiné
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_art[4].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception de tatouage
                    </h2>
                    <p id="para" >
                        Leur efficacité vient de leur capacité à condenser une image saisissante
                        et du texte accrocheur dans un format compact cadre rectangle qui fait pour
                        visualisation facile et lecture facile.
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_pack[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Emballage et Pochette
                    </h2>
                    <p id="para" >

                    </p>
                    <div className={F.block_child}>
                        {chepeast.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_pack[1].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception de livre
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == s_link_pack[2].searchs) {
            return (
                <>
                    <h2 id="title">
                        Conception de pochette d'album
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == newItem[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Nos nouveau produits disponible
                    </h2>
                    <p id="para" >

                    </p>
                    <div className={F.block_child}>
                        {newItem.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == chepeast[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Nos produits moins cher
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {tab_product.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        } else if (search == bestSelling[0].searchs) {
            return (
                <>
                    <h2 id="title">
                        Nos produits les plus vendu
                    </h2>
                    <p id="para" >
                    </p>
                    <div className={F.block_child}>
                        {bestSelling.map((list, i) => {
                            return (
                                <a href="/productDetails" >
                                    <div className={F.product}>
                                        <img src={list.img} />
                                        <div className={F.foot_product}>
                                            <h4>
                                                Service automobile gratuit
                                                <span> {list.name} </span>
                                            </h4>
                                            {new Array(4).fill().map((_, i) => {
                                                return <span> <FaStar /> </span>
                                            })} <br />
                                            <b> 3000 FCFA</b>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </>
            )
        }

    }

    return (
        <div className={F.block_body}>
            
            <div className={F.split_block}>
                <div className={F.block_nav}>
                    <ul>
                        <li id="item" onClick={() => searchCategorie(newItem[0].searchs)} >
                            NOUVEAU ARTICLE
                        </li >
                        <li id="item" onClick={() => searchCategorie(chepeast[0].searchs)} >
                            MOINS CHER
                        </li>
                        <li id="item" onClick={() => searchCategorie(bestSelling[0].searchs)} >
                            PLUS VENDU
                        </li>
                    </ul>
                    <h3> FILTRER PAR </h3>
                    <ul>

                        <li>
                            <span id="li_link"
                                onClick={() => showMenu(0)} >
                                <span > <FaChevronDown /> </span>
                                Logo et identité de style
                            </span>
                            <ul id="ul_link">
                                {s_link_logo.map((list, i) => {
                                    return (
                                        <li id="items"
                                            onClick={() => searchCategorie(list.searchs, i)}>
                                            {list.link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>

                        <li>
                            <span id="li_link"
                                onClick={() => showMenu(1)} >
                                <span > <FaChevronDown /> </span>
                                Web et Application
                            </span>
                            <ul id="ul_link">
                                {s_link_web.map((list, i) => {
                                    return (
                                        <li id="items"
                                            onClick={() => searchCategorie(list.searchs, 5 + i)}>
                                            {list.link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>

                        <li>
                            <span id="li_link"
                                onClick={() => showMenu(2)} >
                                <span > <FaChevronDown /> </span>
                                Conception Visuel
                            </span>
                            <ul id="ul_link">
                                {s_link_visual.map((list, i) => {
                                    return (
                                        <li id="items"
                                            onClick={() => searchCategorie(list.searchs, 10 + i)}>
                                            {list.link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>

                        <li>
                            <span id="li_link"
                                onClick={() => showMenu(3)} >
                                <span > <FaChevronDown /> </span>
                                Conception d'impression
                            </span>
                            <ul id="ul_link">
                                {s_link_print.map((list, i) => {
                                    return (
                                        <li id="items"
                                            onClick={() => searchCategorie(list.searchs, 15 + i)}>
                                            {list.link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>

                        <li>
                            <span id="li_link"
                                onClick={() => showMenu(4)} >
                                <span > <FaChevronDown /> </span>
                                Conception de marketing
                            </span>
                            <ul id="ul_link">
                                {s_link_market.map((list, i) => {
                                    return (
                                        <li id="items"
                                            onClick={() => searchCategorie(list.searchs, 21 + i)}>
                                            {list.link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>

                        <li>
                            <span id="li_link"
                                onClick={() => showMenu(5)} >
                                <span > <FaChevronDown /> </span>
                                Conception de personnage
                            </span>
                            <ul id="ul_link">
                                {s_link_pers.map((list, i) => {
                                    return (
                                        <li id="items"
                                            onClick={() => searchCategorie(list.searchs, 25 + i)}>
                                            {list.link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>

                        <li>
                            <span id="li_link"
                                onClick={() => showMenu(6)} >
                                <span > <FaChevronDown /> </span>
                                Art et Illustration
                            </span>
                            <ul id="ul_link">
                                {s_link_art.map((list, i) => {
                                    return (
                                        <li id="items"
                                            onClick={() => searchCategorie(list.searchs, 28 + i)}>
                                            {list.link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>

                        <li>
                            <span id="li_link"
                                onClick={() => showMenu(7)} >
                                <span > <FaChevronDown /> </span>
                                Emballage et Pochette
                            </span>
                            <ul id="ul_link">
                                {s_link_pack.map((list, i) => {
                                    return (
                                        <li id="items"
                                            onClick={() => searchCategorie(list.searchs, 33 + i)}>
                                            {list.link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>

                        <h4>Rechercher</h4>
                        <div className={F.li_foot}>
                            <img src="/ressources/Vector.svg" alt="" />
                        </div>
                        <p className={F.para_foot}>
                            <b>Essayer avec :</b>
                            <a href=""> Logo facebook </a>
                            <a href=""> facebook cover </a>
                            <a href=""> Logo template </a>
                            <a href=""> carte de visite </a>
                        </p>
                    </ul>
                </div>

                <div className={F.block_product}>
                    {showArctile()}
                </div>
            </div>
            {c2()}
            {s()}
        </div>
    )
}

export default Product