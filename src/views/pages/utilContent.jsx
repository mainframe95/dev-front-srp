import React from "react";

import G from "../../assets/styleSheets/Graphisme.module.css"
import H from "../../assets/styleSheets/Home.module.css"
import C from "../../assets/styleSheets/Categories.module.css"
import "../../assets/styleSheets/carousels.css"
import {tab_prod} from "./Home"
import HeadImg from "views/partials/headImg";

export const c = () => {
    return (
        
        <section className = {G.section_five}>
        <h2> Derniers articles de blog </h2>

        <div className = {G.div_section_five}>
            <div>
                <img src="/ressources/IMAGE (1).png" />
                <b> 18 juillet 2022</b>
                <h3>
                Tendances de conception de produits 
                UX pour les petites entreprises
                </h3>
                <p>
                Développez votre petite entreprise en tenant 
                compte de trois tendances clés en matière de conception de 
                produits UX pour les petites entreprises : 
                la réalité augmentée, la micro-interactio… 
                    <a href=""> Lire tout </a>
                </p>
            </div>

            <div>
                <img src="/ressources/IMAGE (2).png" />
                <b> 18 juillet 2022</b>
                <h3>
                7 raisons pour lesquelles l'externalisation 
                de votre conception Web est votre meilleure option
                </h3>
                <p>
                L'externalisation de la conception de votre 
                site Web peut faire gagner du temps et de l'argent 
                à votre entreprise, tout en introduisant de nouvelles
                 perspectives sur l'ensemble de votre site Web…
                    <a href=""> Lire tout </a>
                </p>
            </div>

            <div>
                <img src="/ressources/IMAGE (3).png" />
                <b> 18 juillet 2022</b>
                <h3>
                    UX Product design trend for small Business
                </h3>
                <p>
                    dkzkdjzkjdkjzkdjozhaijhijdbijbiebfzibvifjbza
                    hiezfgiuezgfugivuzvduvuydvyevuezviyfvezive
                    hzudbiuezibfbi 
                    <a href=""> Lire tout </a>
                </p>
            </div>
        </div>
    </section>
    )
}

export const c2 = () => {
    return (
        <section className = {G.section_six}>
                <h2> Questions et Réponse sur le <span> Graphisme & Design </span> </h2>
                <div className = {G.div_section_six}>
                    <div>
                        <h4> 
                        Qu'est-ce que la conception Web personnalisée et qu'est-ce que j'obtiendrai ?
                        </h4>
                        <p>
                        L'expérience créée sur le Web est une réflexion sur l'expérience que les 
                        gens peuvent attendre lorsqu'ils traitent avec vous hors ligne.
                         Il est crucial que vous fournissiez des normes exceptionnelles dans les deux domaines.
                        </p>
                        <p>
                        Chaque site Web créé par des designers sur Services rapide est conçu de
                         manière unique pour transmettre le message de votre marque 
                         et présenter votre entreprise sous un jour positif. Si vous recherchez un
                          site Web de commerce électronique ou une manière élégante d'afficher vos 
                          services, un site Web personnalisé de Services rapide vous assure d'avoir
                           le design parfait pour séduire les clients.
                        </p>
                        <p>
                        Une fois votre conception Web terminée, vous recevrez tous les 
                        fichiers dont vous avez besoin pour coder et héberger votre site Web.
                         Cela inclut les fichiers vectoriels PSD et un fichier d'aperçu Web avec 
                         lequel un développeur Web peut travailler. Bien sûr, vous bénéficiez 
                         également du droit d'auteur légal complet du design.
                        </p>
                        <h4> Comment puis-je obtenir une conception de site Web de Services Rapide ?</h4>
                        <p>
                        C'est la partie facile ! Lancez un projet de conception Web 
                        sur Services Rapide, choisissez votre budget et dites un peu
                         à nos designers ce que vous aimeriez en remplissant votre brief
                          de conception Web.
                        </p>
                        <p>
                        Travaillez avec la communauté de designers talentueux
                         de Services Rapide à travers le monde pour dénicher de
                          belles idées pour votre site Web qui feront sa marque sur le Web.
                        </p>
                        
                    </div>
                    <div>
                        <h4> Mon entreprise a-t-elle besoin d'un site Web personnalisé?</h4>
                        <p>
                        Si vous voulez avoir l'air professionnel et être trouvé en ligne, 
                        alors la réponse est un oui catégorique ! Avoir un site Web 
                        sur mesure pour votre entreprise signifie que les clients 
                        savent exactement qui vous êtes et renforce la confiance dans
                         votre entreprise et l'expérience qu'elle détient.
                        </p>
                        <p>
                        Un site Web époustouflant et élégant offre une passerelle 
                        professionnelle à vos clients et vous permet de communiquer 
                        votre marque, vos messages et vos informations aux clients 
                        via plusieurs points de contact, y compris les mobiles, 
                        les ordinateurs et les tablettes.
                        </p>

                        <h4> Que dois-je faire pour obtenir la conception de mon site Web de rêve ? </h4>
                        <p>
                        Comme pour toute conception, la conception Web est un art.
                         Pour obtenir une conception de site Web que vous adorerez, 
                         soyez clair et détaillé dans votre dossier de conception.
                          N'oubliez pas de fournir tous les éléments requis 
                          (tels qu'un logo, les couleurs de l'entreprise, etc.)
                           pendant le processus de création, fournissez des commentaires 
                           constructifs sur les conceptions Web aux concepteurs pour vous assurer
                            d'obtenir ce que vous voulez.
                        </p>
                        <p>
                        Plus vous donnez de commentaires et de détails dans votre brief
                         de conception Web, meilleurs sont les résultats !
                        </p>
                    </div>
                </div>
            </section>
    )
}

const Help = ( {title} ) => {
 
    return (
        <div className = {H.block_body}>
            <HeadImg />
            <section className = {G.section_one}>
                <h2> 
                    Inspirez-vous des projets réaliser par
                    nos freelance
                </h2>

                <div className = {H.products_block}>
                    { tab_prod.map ( ( prod, i ) => {
                        return (
                            <div className = {H.product}>
                                <a href="">
                                    <img src= {prod.img} />
                                </a>
                                <div className = {G.prod_foot}>
                                    <p>
                                        <h4> {prod.name} </h4>
                                    </p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <ul className = {H.btn_group}>
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

            <section className = {G.section_two}>
                <h2>
                    Seulement le meilleur <b> {title} </b>
                </h2>
                <p>
                    Voici pourquoi plus de 100 000 entreprises
                    ont choisi Services Rapide :
                </p>

                <div className = {H.block_section}>
                    <div className = {H.para}>
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
                    <div class="carousel" aria-label="Gallery">
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

            <section className = {G.section_three}>
           
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
            </section>

            <section className = {G.section_four}>
                <h2> 6 341 projets de sites Web réussis </h2>
                <div className = {G.div_section}>
                    <img src="/ressources/image1.png" />
                    <div className = {G.text_block}>
                        <h3> 
                            Site Web de Norwood Aviation
                            <span> Concepteur de site Web gagnant <b>skier</b> </span>
                        </h3>
                        <p>
                            Nous sommes une compagnie aérienne basée à Miramar,
                            FL mais avec une couverture mondiale. Nous sommes impliqués
                             dans le négoce d'avions commerciaux (principalement des cargos), la sal…
                        </p>
                        <h4> Voir plus de sites comme celui-ci </h4>
                        <div className = {G.btn_group}>
                            <button> Sites financiers </button>
                            <button> Sites de vente </button>
                            <button> Sites marchands </button>
                            <button> Sites Web d'avions </button>
                        </div>
                        <div className = {G.foot_block}>
                            <div className = {G.stats}>
                                <span>
                                    <img src="/ressources/image9.png"/>
                                    27 Concepteurs
                                </span>
                                <span>
                                    <img src="/ressources/image8.png"/>
                                    110 Conception
                                </span>
                                <span>
                                    <img src="/ressources/image7.png"/>
                                    735
                                </span>
                            </div>
                            <button>
                                démarrez votre projet
                            </button>
                        </div>
                    </div>
                </div>

                <div className = {G.div_section}>
                    <img src="/ressources/image2.png" />
                    <div className = {G.text_block}>
                        <h3> 
                            Site Web de psychothérapie - Basé à Londres
                            <span> Winning Website Designer <b>skiss</b> </span>
                        </h3>
                        <p>
                        Je suis un psychothérapeute nouvellement 
                        formé et j'ai besoin d'un nouveau site Web pour 
                        www.juanitamurphy.co.uk. Je propose une thérapie pour la dépendance, 
                        les relations, les traumatismes et les m…
                        </p>
                        <h4> Voir plus de sites comme celui-ci </h4>
                        <div className = {G.btn_group}>
                            <button> Sites Web créatifs </button>
                            <button> Sites Web de conception graphique </button>
                            <button> Sites web de commerce </button>
                            <button> Sites Web d'avions </button>
                        </div>
                        <div className = {G.foot_block}>
                            <div className = {G.stats}>
                                <span>
                                    <img src="/ressources/image9.png"/>
                                    27 Designers
                                </span>
                                <span>
                                    <img src="/ressources/image8.png"/>
                                    110 Design
                                </span>
                                <span>
                                    <img src="/ressources/image7.png"/>
                                    735
                                </span>
                            </div>
                            <button>
                                démarrez votre projet
                            </button>
                        </div>
                    </div>
                </div>

                <div className = {G.div_section}>
                    <img src="/ressources/image3.png" />
                    <div className = {G.text_block}>
                        <h3> 
                            Honey Company de Floride a besoin d'un site doux et digne de buzz
                            <span> Winning Website Designer <b>skiss</b> </span>
                        </h3>
                        <p>
                        Demandes de site Web : -Site Web de luxe de 5 pages avec SSL-Secure Online
                         Store (Shopify) -Images haut de gamme pour plaire à un consommateur averti -Verbi…
                        </p>
                        <h4> Voir plus de sites comme celui-ci </h4>
                        <div className = {G.btn_group}>
                            <button> FSites Web sur les abeilles </button>
                            <button> SSites Web sur le miel </button>
                            <button> Sites Web professionnels </button>
                            <button> Sites Web sur les abeilles </button>
                        </div>
                        <div className = {G.foot_block}>
                            <div className = {G.stats}>
                                <span>
                                    <img src="/ressources/image9.png"/>
                                    27 Designers
                                </span>
                                <span>
                                    <img src="/ressources/image8.png"/>
                                    110 Design
                                </span>
                                <span>
                                    <img src="/ressources/image7.png"/>
                                    735
                                </span>
                            </div>
                            <button>
                                démarrez votre projet
                            </button>
                        </div>
                    </div>
                </div>

                <div className = {G.div_section}>
                    <img src="/ressources/image4.png" />
                    <div className = {G.text_block}>
                        <h3> 
                        Une entreprise de suppression de courrier indésirable avec
                         un site Web WordPress existant a besoin d'un nouveau site Web amélioré pour mobile 
                            <span> Winning Website Designer <b>skiss</b> </span>
                        </h3>
                        <p>
                        Je cherche à ce que quelqu'un prenne mon site Web existant et soit
                         le mette à jour avec un nouveau design et un menu plus mobile (70% de mon trafic ...
                        </p>
                        <h4> Voir plus de sites comme celui-ci </h4>
                        <div className = {G.btn_group}>
                            <button> Sites Web de suppression de courrier indésirable </button>
                            <button> SSites Web professionnels </button>
                            <button> Concevoir des sites Web </button>
                            <button> Sites Internet </button>
                        </div>
                        <div className = {G.foot_block}>
                            <div className = {G.stats}>
                                <span>
                                    <img src="/ressources/image9.png"/>
                                    27 Designers
                                </span>
                                <span>
                                    <img src="/ressources/image8.png"/>
                                    110 Design
                                </span>
                                <span>
                                    <img src="/ressources/image7.png"/>
                                    735
                                </span>
                            </div>
                            <button>
                                démarrez votre projet
                            </button>
                        </div>
                    </div>
                </div>

                <div className = {G.div_section}>
                    <img src="/ressources/image5.png" />
                    <div className = {G.text_block}>
                        <h3> 
                        Page de blog de mot de passe (loin de dire aux 
                        gens dans notre vie comment vous avez été une fontaine ou un drain) 
                            <span> Winning Website Designer <b>skiss</b> </span>
                        </h3>
                        <p>
                        Je suis à la recherche d'un site de blog personnalisé.
                         Je veux avoir essentiellement un administrateur et un 
                         utilisateur de registre. L'administrateur pourra s'abonner à la page du blog et…
                        </p>
                        <h4> Voir plus de sites comme celui-ci </h4>
                        <div className = {G.btn_group}>
                            <button> Financial websites </button>
                            <button> Sales websites </button>
                            <button> Trading websites </button>
                            <button> Aircraft websites </button>
                        </div>
                        <div className = {G.foot_block}>
                            <div className = {G.stats}>
                                <span>
                                    <img src="/ressources/image9.png"/>
                                    27 Designers
                                </span>
                                <span>
                                    <img src="/ressources/image8.png"/>
                                    110 Design
                                </span>
                                <span>
                                    <img src="/ressources/image7.png"/>
                                    735
                                </span>
                            </div>
                            <button>
                                démarrez votre projet
                            </button>
                        </div>
                    </div>
                </div>

                <div className = {G.div_section}>
                    <img src="/ressources/image6.png" />
                    <div className = {G.text_block}>
                        <h3> 
                        Conception de site Web de bande 
                            <span> Winning Website Designer <b>skiss</b> </span>
                        </h3>
                        <p>
                        Groupe de reprises à venir jouant dans le sud-est du Queensland (Australie).
                         Le nom du groupe est "Fourshore". Formé de 4 potes qui ont grandi
                          sur les estrans de l'Or…
                        </p>
                        <h4> Voir plus de sites comme celui-ci </h4>
                        <div className = {G.btn_group}>
                            <button> Financial websites </button>
                            <button> Sales websites </button>
                            <button> Trading websites </button>
                            <button> Aircraft websites </button>
                        </div>
                        <div className = {G.foot_block}>
                            <div className = {G.stats}>
                                <span>
                                    <img src="/ressources/image9.png"/>
                                    27 Designers
                                </span>
                                <span>
                                    <img src="/ressources/image8.png"/>
                                    110 Design
                                </span>
                                <span>
                                    <img src="/ressources/image7.png"/>
                                    735
                                </span>
                            </div>
                            <button>
                                démarrez votre projet
                            </button>
                        </div>
                    </div>
                </div>

            </section>

            {c()}
            {c2()}

            <section className = {C.section_eight}>
                    <img src="/ressources/categorie/IMAGE (67).png" />
                    <img src="/ressources/categorie/IMAGE (68).png" />
                    <img src="/ressources/categorie/IMAGE (69).png" />
                    <img src="/ressources/categorie/IMAGE (70).png" />
                    <img src="/ressources/categorie/IMAGE (71).png" />
                    <img src="/ressources/categorie/IMAGE (72).png" />
            </section>
            
        </div>
    )
}

export default Help;