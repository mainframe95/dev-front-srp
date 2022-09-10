import React, { useEffect } from "react"
import { FaStar } from "react-icons/fa"

import H from "../../assets/styleSheets/Home.module.css"
import "../../assets/styleSheets/carousels.css"
import "react-multi-carousel/lib/styles.css";
import HeadImg from "views/partials/headImg";


export const tab_prod = [
    { img: "/ressources/product&logo/prod1.png", name: "Web" },
    { img: "/ressources/product&logo/prod2.png", name: "Logo" },
    { img: "/ressources/product&logo/prod3.png", name: "Carte de visite" },
    { img: "/ressources/product&logo/prod4.png", name: "T-shirt" },
    { img: "/ressources/product&logo/prod5.png", name: "Label" },
    { img: "/ressources/product&logo/prod6.png", name: "Affiche" },
    { img: "/ressources/product&logo/prod7.png", name: "Couverture de livre" },
    { img: "/ressources/product&logo/prod8.png", name: "Logo" },
]


    //tableau des logo de conception
export const tab_logo = [
        { img: "/ressources/product&logo/img1.png", name: "Logo" },
        { img: "/ressources/product&logo/img2.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/img3.png", name: "Web" },
        { img: "/ressources/product&logo/img4.png", name: "Affiche" },
        { img: "/ressources/product&logo/img5.png", name: "Graphique" },
        { img: "/ressources/product&logo/img6.png", name: "T-shirt" },
    ]


const Home = () => {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
    };



    return (
        <div className={H.block_body}>
            <HeadImg />
            <section className={H.section_one}>
                <h2> Nos services de conception</h2>
                <div className={H.content_logo}>
                    {tab_logo.map((obj, i) => {
                        return (
                            <a href={"/categories?" + i}>
                                <div className={H.logo}>
                                    <img src={obj.img} />
                                    <h3> {obj.name} </h3>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <li className={H.see_more}>
                    <a href="/categories?6">
                        Voir tous les catégories
                    </a>
                </li>
            </section>

            <section className={H.section_two}>
                <h2>
                    Inspirez-vous des projets réaliser par
                    nos freelance
                </h2>

                <div className={H.products_block}>
                    {tab_prod.map((prod, i) => {
                        return (
                            <div className={H.product}>
                                <a href="/produits">
                                    <img src={prod.img} />
                                </a>
                                <div className={H.prod_foot}>
                                    <p>
                                        <b>5</b>
                                        <h4> {prod.name} </h4>
                                    </p>
                                    <p>
                                        <b>5</b>
                                        <h4>Voir plus</h4>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <ul className={H.btn_group}>
                    <li>
                        <a href="">
                            Voir plus de Conception
                        </a>
                    </li>
                    ou
                    <li>
                        <a href="">
                            Commencer maintenant
                        </a>
                    </li>
                </ul>
            </section>

            <section className={H.section_three}>
                <h2>
                    Seul le meilleur service indépendant
                </h2>
                <p>
                    Voici pourquoi plus de 100 000 entreprises
                    ont choisi Services Rapide :
                </p>

                <div className={H.block_section}>
                    <div className={H.para}>
                        <h4> Économisez de l'argent et du temps </h4>
                        <p>
                            Notre conception personnalisée commence à bas
                            prix avec des options pour répondre à tous les budgets. Pas de tarifs horaires,
                            mais une tarification en fonction des projets.
                        </p>

                        <h4> Plus de créativité </h4>
                        <p>
                            Avec des designers indépendants du monde entier en
                            compétition sur votre projet, vous recevrez des
                            tas d'idées de conception - il vous suffit de choisir la meilleure.
                        </p>

                        <h4> Un monde de conception </h4>
                        <p>
                            Des designers professionnels indépendants
                            du monde entier prêts à créer pour vous le logo,
                            le site web, la carte de visite parfaits, etc. !
                        </p>

                        <h4> Garantie de remboursement </h4>
                        <p>
                            Si vous n'êtes pas satisfait des designs
                            et que vous n'obtenez pas le design parfait
                            pour votre entreprise, récupérez votre argent.
                        </p>
                    </div>

                    <div id = {H.carousel} class="carousel" aria-label="Gallery">
                        <ol class="carousel__viewport">
                            <li id="carousel__slide1"
                                tabindex="0"
                                class="carousel__slide"
                                style={{
                                    backgroundImage: "url(/ressources/imgA.png)",
                                    backgroundSize: "105%",
                                }}>
                                <div class="carousel__snapper">

                                </div>
                            </li>
                            <li id="carousel__slide2"
                                tabindex="0"
                                class="carousel__slide"
                                style={{
                                    backgroundImage: "url(/ressources/imgA.png)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "105%",

                                }}>
                                <div class="carousel__snapper"></div>
                            </li>
                            <li id="carousel__slide3"
                                tabindex="0"
                                class="carousel__slide"
                                style={{
                                    backgroundImage: "url(/ressources/imgA.png)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "105%",
                                }}
                            >
                                <div class="carousel__snapper"></div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className={H.section_four}>
                <h2> Commencer </h2>
                <div className={H.block_sect}>
                    <div>
                        <img src="/ressources/person1.png" />
                        <h4> J'ai besoin d'un design créé </h4>
                        <p>
                            Obtenez le design parfait pour votre
                            budget auprès de notre communauté créative.
                        </p>
                        <li>
                            <a href="/projetDetails?8"> commnencer maintenant</a>
                        </li>
                    </div>
                    <div>
                        <img src="/ressources/person2.png" />
                        <h4> Je veux travailler </h4>
                        <p>
                            Voulez-vous gagner de l'argent,
                            trouver des clients illimités et construire votre carrière de freelance ?
                        </p>
                        <li>
                            <a href=""> adhéré maintenant</a>
                        </li>
                    </div>
                </div>
            </section>

            <section className={H.section_five}>
                {new Array(5).fill().map((_, i) => {
                    return <span> <FaStar /> </span>
                })}
                <p>
                    Découvrez pourquoi les clients
                    aiment Services Rapide - Moyenne de 4,9
                    <span> 3,060 ratings </span>
                </p>
                <div>
                    <img src="/ressources/logo1.png" />
                    <img src="/ressources/logo2.png" />
                    <img src="/ressources/logo3.png" />
                    <img src="/ressources/logo4.png" />
                    <img src="/ressources/logo5.png" />

                </div>
            </section>
        </div>
    )
}

export default Home;