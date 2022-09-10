import React, { useState, useEffect } from "react"
import { FaStar, FaChevronDown, FaChevronUp, FaCloudDownload, FaCloudDownloadAlt } from "react-icons/fa"
import { Carousel } from "react-carousel-minimal"

import P from "../../assets/styleSheets/productDetails.module.css"
import F from "../../assets/styleSheets/Product.module.css"


const DetailsProduct = () => {

    //tableau de prpduct
    const tab_product = [
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
        { img: "/ressources/product&logo/carte.png", name: "Carte de visite" },
    ]

    //function qui affiche le contenu es onglet
    const showTabs = (index) => {
        var allBtn = document.querySelectorAll("#btn_tab button");
        var allTabs = document.querySelectorAll("#tabs");

        for (var i = 0; i < allTabs.length; i++) {
            allTabs[i].style.display = "none"
            allBtn[i].classList.remove(P.active)
            allBtn[i].classList.add(P.no_active);
        }

        allTabs[index].style.display = "block";
        allBtn[index].classList.remove(P.no_active)
        allBtn[index].classList.add(P.active)
    }



    //function qui permet de defilement 
    const handleSlide = (e, index) => {
        var allDiv = document.querySelectorAll("slide_prod")

        allDiv[index].style.marginTop = "100%"
    }

    //tableau des produit à afficher lors di slide
    const data = [
        {
            image: "/ressources/prod.png",
            caption: "produit"
        },
        {
            image: "/ressources/prod.png",
            caption: "produit1"
        },
        {
            image: "/ressources/prod.png",
            caption: "produit2"
        },
        {
            image: "/ressources/prod.png",
            caption: "produit3"
        },
        {
            image: "/ressources/prod.png",
            caption: "produit4"
        }
    ]

    //style pour le carousel
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }


    useEffect(() => {
        showTabs(4)
    }, [])


    return (
        <div className={P.block_body}>
            <section className={P.section_one}>
                <div className={P.bloc_sect1}>

                    <Carousel id = {P.carou}
                        data={data}
                        time={2000}
                        width="40vw"
                        height=""
                        captionStyle={captionStyle}
                        radius="4px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={false}
                        dots={false}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        slideBorder="1px solid red"
                        thumbnails={true}
                        showNavBtn={true}
                        thumbnailWidth="90vw"
                        thumbnailsBorder="1px solid grey"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                            border: "1px solid grey"
                        }}
                    />

                    <div className={P.foot_bloc}>
                        <div>
                            <img src="/ressources/product&logo/1.png" alt="" />
                            <p>
                                <b>La promesse MOO</b>
                                Nous remuons ciel et terre pour
                                que vous soyez satisfait de votre commande.
                            </p>
                        </div>
                        <div>
                            <img src="/ressources/Frame6.png" alt="" />
                            <p>
                                <b>Impression couleur gratuite</b>
                                Imprimez en couleur sur les deux faces de vos cartes de visite.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={P.bloc_sect2}>
                    <div className={P.scroll}>
                        <div className={P.b1}>
                            <h2>Cartes de visite en coton</h2>
                            <p>
                                18pt, papier 100% recyclé
                                <span> 50 cards from </span>
                                <span> 398 revues</span>
                            </p>

                        </div>
                        <div className={P.b2}>
                            <h3>
                                Un nouveau type de papier.
                                Fabriqué à partir <br /> de vieux T-shirts
                            </h3>
                            <p>
                                Une collaboration avec Mohawk, les cartes de visite en coton sont fabriquées à
                                partir de chutes de t-shirts 100 % recyclées -
                                des choses qui sont normalement jetées.
                                En plus d'être sans arbre, nos cartes de
                                visite en coton recyclé sont également d'un
                                blanc éclatant, subtilement texturées et
                                agréables au toucher. Ainsi, vous pouvez faire
                                du bien ET bien paraître.
                            </p>
                            <div>
                                <p>
                                    Poids de 110 lb, épaisseur de 18 pt <br />
                                    Une finition non couchée sur laquelle vous pouvez écrire <br />
                                    Cartes de visite naturellement texturées qui se sentent bien <br />
                                    Blanc brillant, pour que les couleurs s'impriment avec vivacité
                                </p>
                            </div>

                            <div className={P.bloc_size}>
                                <h3> Choisissez votre taille </h3>
                                <div className={P.choose_size}>
                                    {new Array(3).fill().map((_, i) => {
                                        return (
                                            <div className={P.size}>
                                                <div className={P.size_content}>
                                                    <h3>
                                                        Julian Halverson <br />
                                                        <span> Creative design </span>
                                                    </h3>

                                                    <div className={P.c}>
                                                        <h4> Halvern <br /> Studio </h4>
                                                        <div></div>
                                                    </div>

                                                </div>
                                                <h2>
                                                    Standard
                                                    <span>2.0" x 3.0"</span>
                                                </h2>
                                            </div>

                                        )
                                    })}

                                </div>
                            </div>

                            <div className={P.square}>
                                <div className={P.cardre}>

                                </div><br />
                                <div className={P.divs_sq}>
                                    <div>
                                        <h2>
                                            Square
                                            <span>Sharp and style</span>
                                        </h2>
                                        <img src="/ressources/Frame4.png" />
                                    </div>
                                    <div>
                                        <h2>
                                            Rounded
                                            <span>Sharp and style</span>
                                        </h2>
                                        <img src="/ressources/Frame5.png" />
                                    </div>
                                </div>
                            </div>


                            <div className={P.quantity}>
                                <h2> Choisissez la quantité</h2>
                                <table border="1">
                                    <thead>
                                        <th>Quantité</th>
                                        <th>Prix</th>
                                        <th>Prix parc</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>50</td>
                                            <td>3$</td>
                                            <td>20$</td>
                                        </tr>
                                        <tr>
                                            <td>50</td>
                                            <td>3$</td>
                                            <td>20$</td>
                                        </tr>
                                        <tr>
                                            <td>50</td>
                                            <td>3$</td>
                                            <td>20$</td>
                                        </tr>
                                        <tr id={P.last_line}>
                                            <button>
                                                Voir plus de quantité
                                            </button>
                                        </tr>
                                        <tr id={P.end_line}>
                                            <span>Personnaliser ma quantité :</span>

                                            <input type="number" name="quantity"
                                                id="quantity" />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={P.summary}>
                                <h2>Sommaire</h2>
                                <table className={P.table}>
                                    <p>
                                        <span>Size</span>

                                        <span> - </span>
                                    </p>
                                    <p>

                                        <span>Papier</span>
                                        <span> Personnalier</span>
                                    </p>
                                    <p>
                                        <span>Coating</span>
                                        <span> - </span>
                                    </p>

                                    <p>
                                        <span>Corner</span>
                                        <span> Personnaliser</span>
                                    </p>
                                    <p>
                                        <span>Quantité</span>
                                        <span> 20 </span>
                                    </p>
                                    <p>
                                        <span>Prix</span>
                                        <span> 200$</span>
                                    </p>
                                </table>
                            </div>

                            <div className={P.end}>
                                <h2>
                                    Comment souhaitez-vous concevoir vos cartes ?
                                </h2>
                                <table>
                                    <div>
                                        <img src="/ressources/Frame.png" alt="" />
                                        <h3>Utilisez nos modèles</h3>
                                        <p>
                                            À la recherche d'inspiration
                                            Want simple customization
                                        </p>
                                    </div>
                                    <div>
                                        <img src="/ressources/Frame2.png" alt="" />
                                        <h3>Concevez ici en ligne</h3>
                                        <p>
                                            Vous avez déjà votre logo
                                            Personnalisez chaque détail
                                        </p>
                                    </div>
                                    <div>
                                        <img src="/ressources/Frame3.png" alt="" />
                                        <h3>Télécharger un design complet</h3>
                                        <p>
                                            Avoir une conception complète
                                            Ayez votre propre designer
                                        </p>
                                    </div>

                                </table>
                            </div>
                        </div>


                    </div>
                    <div className={P.btns}>
                        <button>Acheter</button>
                        <button>Commencer à faire</button>
                    </div>
                </div >
            </section >

            <section className={P.section_two}>
                <div className={P.content_tabs}>
                    <div className={P.btn_group} id="btn_tab">
                        <button
                            onClick={() => showTabs(0)}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => showTabs(1)}>
                            Détails technique
                        </button>
                        <button
                            onClick={() => showTabs(2)}>
                            Attachment
                        </button>
                        <button
                            onClick={() => showTabs(3)}>
                            Payement et achat
                        </button>
                        <button onClick={() => showTabs(4)}>
                            Commentaires
                        </button>
                        <button
                            onClick={() => showTabs(5)}>
                            Question à propos
                        </button>
                    </div>
                    <div className={P.tabs_container}>

                        <div className={P.tabs} id="tabs">
                            <h1>1</h1>
                        </div>
                        <div className={P.tabs} id="tabs">
                            <h1>2</h1>
                        </div>
                        <div className={P.tabs} id="tabs">
                            <h1>3</h1>
                        </div>
                        <div className={P.tabs} id="tabs">
                            <h1>4</h1>
                        </div>
                        <div className={P.tabs} id="tabs">
                            <div id="commentaires" className={P.split}>
                                <div className={P.part_comments}>
                                    <h3> Opinions (3) </h3>
                                    <p>
                                        Overell rating <br />
                                        {new Array(5).fill().map((_, i) => {
                                            return <span><FaStar /> </span>
                                        })}
                                        <span>5.0</span>
                                    </p>
                                    <div className={P.div_scroll}>
                                        {new Array(3).fill().map((_, i) => {
                                            return (
                                                <div className={P.content_msg}>
                                                    <div className={P.bloc_msg}>
                                                        <p>
                                                            <b>User</b>
                                                            <span>
                                                                {new Array(5).fill().map((_, i) => {
                                                                    return <span><FaStar /> </span>
                                                                })}
                                                                <span>5.0</span>
                                                            </span>
                                                        </p>
                                                        <p className={P.date_msg}>3 janvier 2023</p>
                                                        <p className={P.msg}>
                                                            Produkt jest świetny. Ze sklepu postanowiłem
                                                            skorzystać ze względu na bardzo atrakcyjną
                                                            cenę i duży wybór produktów. To był mój pierwszy i na pewno nie ostatni zakup u Was.
                                                        </p>
                                                        <p>
                                                            <FaStar />
                                                            1 fichier joindre
                                                        </p>
                                                        <div className={P.foot_msg}>
                                                            <button>
                                                                Ajouter un commentaire
                                                            </button>
                                                            <p>
                                                                <span>
                                                                    <button>
                                                                        <FaStar />
                                                                    </button>
                                                                    25
                                                                </span>
                                                                <span>
                                                                    <button>
                                                                        <FaStar />
                                                                    </button>
                                                                    25
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                                <div className={P.part_form}>
                                    <h3> Rate us</h3>
                                    <p>
                                        {new Array(5).fill().map((_, i) => {
                                            return <span><FaStar /> </span>
                                        })}
                                    </p>

                                    <form>
                                        <div>
                                            <label> Nom </label>
                                            <input type="text" name="name" id="name" />
                                            <span id="error_name"></span>
                                        </div>
                                        <div>
                                            <label> Tell about </label>
                                            <textarea name="about"
                                                id="about" cols="30" rows="5"></textarea>
                                            <span id="error_about"></span>
                                        </div>
                                        <div>
                                            <label> Ajouter un fichier </label>
                                            <div id={P.files}>
                                                <FaCloudDownloadAlt />
                                                <span>Choisissez un fichier</span>
                                                <input type="file" name="file" id="name" />
                                            </div>
                                            <span id="error_file"></span>
                                        </div>

                                        <button>
                                            Enrégistrer votre opinion
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className={P.tabs} id="tabs" >
                            <h1>6</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={P.section_three}>
                <h3> Produits similaire</h3>
                <div className={P.block_child}>
                    {tab_product.map((list, i) => {
                        return (
                            <a href="/productDetails" >
                                <div className={P.product}>
                                    <img src={list.img} />
                                    <div className={P.foot_product}>
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
            </section>
        </div >
    )
}

export default DetailsProduct;                            