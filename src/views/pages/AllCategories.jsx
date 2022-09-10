import React, { useEffect, useState } from "react"
import {} from "react-icons/fa"
import HeadImg from "views/partials/headImg"
import C from "../../assets/styleSheets/Categories.module.css"

export const s = () => {
    return (
        <section className = {C.section_eight}>
            <img src="/ressources/categorie/IMAGE (67).png" />
            <img src="/ressources/categorie/IMAGE (68).png" />
            <img src="/ressources/categorie/IMAGE (69).png" />
            <img src="/ressources/categorie/IMAGE (70).png" />
            <img src="/ressources/categorie/IMAGE (71).png" />
            <img src="/ressources/categorie/IMAGE (72).png" />
        </section>
    )
}

const Categories = () => {

    const [ product, setProduct ] = useState (6);

    let index = window.location.search.substring(1);

    //modification de l'indice d'affichage de chaque categorie
    useEffect ( () => {
        setProduct (index)
    }, [])

    const img_logo = [
        { img : "/ressources/categorie/IMAGE (3).png", name : "Logo" },
        { img : "/ressources/categorie/img2.png", name : "Carte de visite" },
        { img : "/ressources/categorie/IMAGE.png", name : "Papeterie" },
        { img : "/ressources/categorie/IMAGE (1).png", name : "Etiquette" },
        { img : "/ressources/categorie/IMAGE (2).png", name : "en-tête de lettre" },
        { img : "/ressources/categorie/IMAGE (3).png", name : "Logo et carte de visite" },
        { img : "/ressources/categorie/IMAGE (4).png", name : "Signalisation" },
        { img : "/ressources/categorie/IMAGE (5).png", name : "Paneau publicitaire" },
        { img : "/ressources/categorie/IMAGE (6).png", name : "stand de foire commerciale" },
        { img : "/ressources/categorie/IMAGE (7).png", name : "Emballage de carte" },
    ]


    const img_web = [
        { img : "/ressources/categorie/IMAGE (8).png", name : "Web" },
        { img : "/ressources/categorie/IMAGE (11).png", name : "Wordpress" },
        { img : "/ressources/categorie/IMAGE (12).png", name : "Application" },
        { img : "/ressources/categorie/IMAGE (13).png", name : "Bannière ajouté" },
        { img : "/ressources/categorie/IMAGE (14).png", name : "Icône" },
        { img : "/ressources/categorie/IMAGE (15).png", name : "Grand commerce" },
        { img : "/ressources/categorie/IMAGE (16).png", name : "Publicité par email" },
        { img : "/ressources/categorie/IMAGE (17).png", name : "Bulletin" },
        { img : "/ressources/categorie/IMAGE (18).png", name : "Acheter" },
        { img : "/ressources/categorie/IMAGE (19).png", name : "Espace carré" },
        { img : "/ressources/categorie/IMAGE (20).png", name : "Wix" },
        { img : "/ressources/categorie/IMAGE (21).png", name : "WooCommerce" },
        { img : "/ressources/categorie/IMAGE (22).png", name : "Page de destination" },
    ]


    const img_print = [
        { img : "/ressources/categorie/IMAGE (23).png", name : "Affiche" },
        { img : "/ressources/categorie/IMAGE (24).png", name : "Carte postale" },
        { img : "/ressources/categorie/IMAGE (25).png", name : "Brochure" },
        { img : "/ressources/categorie/IMAGE (26).png", name : "Affiche" },
        { img : "/ressources/categorie/IMAGE (27).png", name : "Publicité" },
        { img : "/ressources/categorie/IMAGE (28).png", name : "Catalogue" },
        { img : "/ressources/categorie/IMAGE (29).png", name : "Enveloppe" },
        { img : "/ressources/categorie/IMAGE (30).png", name : "Magasine" },
        { img : "/ressources/categorie/IMAGE (31).png", name : "Menu" },
        { img : "/ressources/categorie/IMAGE (32).png", name : "Publicité dans les journaux" },
        { img : "/ressources/categorie/IMAGE (33).png", name : "Impression" },
        { img : "/ressources/categorie/IMAGE (34).png", name : "Autocollant" },
        { img : "/ressources/categorie/IMAGE (35).png", name : "Résume" },
        { img : "/ressources/categorie/IMAGE (36).png", name : "Modèle de mot" },
    ]

    const img_graphic = [
        { img : "/ressources/categorie/IMAGE (37).png", name : "Graphique" },
        { img : "/ressources/categorie/IMAGE (38).png", name : "PowerPoint" },
        { img : "/ressources/categorie/IMAGE (39).png", name : "Vecteur" },
        { img : "/ressources/categorie/IMAGE (40).png", name : "3D" },
        { img : "/ressources/categorie/IMAGE (41).png", name : "Photoshop" },
        { img : "/ressources/categorie/IMAGE (42).png", name : "" },
        { img : "/ressources/categorie/IMAGE (43).png", name : "Infos graphique" },
        { img : "/ressources/categorie/IMAGE (44).png", name : "mascotte" },
    ]


    const img_prodm = [
        { img : "/ressources/categorie/IMAGE (45).png", name : "T-shirt" },
        { img : "/ressources/categorie/IMAGE (46).png", name : "Emballage" },
        { img : "/ressources/categorie/IMAGE (47).png", name : "Sac et cabas" },
        { img : "/ressources/categorie/IMAGE (48).png", name : "tasse" },
        { img : "/ressources/categorie/IMAGE (49).png", name : "Vêtement" },
        { img : "/ressources/categorie/IMAGE (50).png", name : "Marchandise" },
    ]

    const img_art = [
        { img : "/ressources/categorie/IMAGE (52).png", name : "Illustration" },
        { img : "/ressources/categorie/IMAGE (53).png", name : "Couverture de livre" },
        { img : "/ressources/categorie/IMAGE (54).png", name : "Art" },
        { img : "/ressources/categorie/IMAGE (55).png", name : "Carte" },
        { img : "/ressources/categorie/IMAGE (56).png", name : "Couverture de CD" },
        { img : "/ressources/categorie/IMAGE (57).png", name : "Carte de voeux" },
        { img : "/ressources/categorie/IMAGE (58).png", name : "Invitation" },
        { img : "/ressources/categorie/IMAGE (59).png", name : "Couvertur de livre électronique" },
        { img : "/ressources/categorie/IMAGE (61).png", name : "Tatouage" },
        { img : "/ressources/categorie/IMAGE (62).png", name : "Personnage" },
    ]


    const title_cat = [
        { title : "Logo et image de marque", s_title : "Besoin de faire une impression durable? La bonne combinaison de couleurs, de formes et de mots définira votre marque. Obtenez le logo parfait et assurez-vous que votre image de marque touche la cible grâce à ces services."},
        { title : "Services de conception Web", s_title :"Vous cherchez à faire une marque sur le World Wide Web ? Que vous ayez besoin d'une nouvelle conception pour un site Web personnalisé ou d'une conception pour une plate-forme CMS populaire, vous trouverez la conception Web parfaite avec ces services de conception."},
        { title : "Services de conception d'impression", s_title : "Envoyer quelque chose à imprimer peut être si définitif ! Ne commettez pas l'erreur d'avoir une erreur - obtenez le bon design du premier coup, qu'il s'agisse d'un dépliant, d'une affiche ou d'un autocollant. Découvrez tous nos services de conception d'impression."},
        { title : "Services de conception graphique", s_title : "Vous avez vraiment besoin d'inspiration pour votre design ? Quelqu'un qui peut utiliser ses compétences créatives pour créer un design qui va vraiment ressortir ? Ces services de conception graphique peuvent être exactement ce que vous recherchez"},
        { title : "Services de conception de produits et de marchandises", s_title : "Besoin d'une publicité ambulante ? Un petit matériel promotionnel pour l'équipe qui tient le stand du salon ? Obtenez des vêtements, des tasses ou des casquettes personnalisés de nos designers professionnels."},
        { title : "Art & Illustrations", s_title : "Tout le monde n'est pas un artiste - mais les designers de Services Rapide le sont assurément. Que vous ayez besoin d'une mascotte conçue pour votre équipe sportive ou d'une œuvre d'art murale personnalisée, vous trouverez ce dont vous avez besoin avec ces services de conception."},
         { title : "Art & Illustrations", s_title : "Tout le monde n'est pas un artiste - mais les designers de Services Rapide le sont assurément. Que vous ayez besoin d'une mascotte conçue pour votre équipe sportive ou d'une œuvre d'art murale personnalisée, vous trouverez ce dont vous avez besoin avec ces services de conception."},
    ]


    //function qui permet les product d'un ou plusieurs categorie
    const showProductCat = (e) => {

        if ( product == 6 ) {
            return (
                <>
                    <section className = {C.section_one}>
                        <h2> {title_cat[0].title} </h2>
                        <p> {title_cat[0].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_logo.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>

                    <section className = {C.section_two}>
                        <h2> {title_cat[1].title} </h2>
                        <p> {title_cat[1].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_web.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>

                    <section className = {C.section_three}>
                        <h2> {title_cat[2].title} </h2>
                        <p> {title_cat[2].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_print.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>

                    <section className = {C.section_four}>
                        <h2> {title_cat[3].title} </h2>
                        <p> {title_cat[3].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_graphic.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>

                    <section className = {C.section_five}>
                        <h2> {title_cat[4].title} </h2>
                        <p> {title_cat[4].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_prodm.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>

                    <section className = {C.section_six}>
                        <h2> {title_cat[5].title} </h2>
                        <p> {title_cat[5].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_art.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>

                </>
            )
        } else if ( product == 0 ) {
            return (
                    <section className = {C.section_one}>
                        <h2> {title_cat[0].title} </h2>
                        <p> {title_cat[0].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_logo.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>

            )
        } else if ( product == 1 ) {
            return (
                    <section className = {C.section_two}>
                        <h2> {title_cat[1].title} </h2>
                        <p> {title_cat[1].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_web.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>
            )
        } else if ( product == 2 ) {
            return (
                    <section className = {C.section_three}>
                        <h2> {title_cat[2].title} </h2>
                        <p> {title_cat[2].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_print.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>

            )
        } else if ( product == 3 ) {
            return (
                    <section className = {C.section_four}>
                        <h2> {title_cat[3].title} </h2>
                        <p> {title_cat[3].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_prodm.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>

            )
        } else if ( product == 4 ) {
            return (
                    <section className = {C.section_five}>
                        <h2> {title_cat[4].title} </h2>
                        <p> {title_cat[4].s_title} </p>
                        <div className = {C.content_logo}>
                            { img_art.map ( ( obj, i ) => {
                                return (
                                    <a href="">
                                        <div className = {C.logo}>
                                            <img src= {obj.img} />
                                            <h3> {obj.name} </h3>
                                        </div>
                                    </a>
                                )
                            }) }
                        </div>
                    </section>
            )
        }
    }

    return (
        <div className = {C.block_body}>
            <HeadImg />
            {showProductCat ()}
            <section className = {C.section_seven}>
                <h2>
                    Obtenez un meilleur design pour moins cher
                </h2>
                <p>
                    Utilisez la communauté créative de Services Rapide pour obtenir votre design parfait à un prix qui correspond à votre budget.
                </p>

                <div className = {C.section_div}>
                    <div>
                        <img src="/ressources/categorie/IMAGE (63).png" />
                        <h3> Lancer votre projet </h3>
                        <p>
                            Dites-nous ce dont vous avez besoin, 
                            complétez votre brief créatif en quelques minutes.
                        </p>
                    </div>

                    <div>
                        <img src="/ressources/categorie/IMAGE (64).png" />
                        <h3> Obtenez des conceptions personnalisées </h3>
                        <p>
                        Recevez des designs uniques du monde entier en quelques heures.
                        </p>
                    </div>

                    <div>
                        <img src="/ressources/categorie/IMAGE (65).png" />
                        <h3> Choisissez le meilleur design </h3>
                        <p>
                        Sélectionnez et approuvez votre design préféré et téléchargez les fichiers.
                        </p>
                    </div>
                </div>
                <button>
                    <img src="/ressources/categorie/IMAGE (66).png" />
                    regarde comment ça marche
                </button>
                <button>
                    Commencer maintenant
                </button>
            </section>

            {s()}
        </div>
    )
}

export default Categories;
