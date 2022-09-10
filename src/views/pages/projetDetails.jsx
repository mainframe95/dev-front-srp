import React, { useState } from "react"
import { BsCheck2Circle, BsCheckCircle } from "react-icons/bs"
import { FaCheckCircle, FaCheckSquare, FaChevronRight, FaCircle } from "react-icons/fa"

import P from "../../assets/styleSheets/projetDetails.module.css"

const Project = () => {

    const [cp, setCP] = useState(0);
    const [index, setIndex] = useState(0)

    const listImg = [
        { img: "/ressources/logos.png", text: "Création de logo" },
        { img: "/ressources/web.png", text: "Création de site web" },
        { img: "/ressources/shirt.png", text: "Création de T-shirt" },
        { img: "/ressources/flyers.png", text: "Création d'Affiche" },
        { img: "/ressources/card.png", text: "Création de carte de visite" },
        { img: "/ressources/stat.png", text: "Création de papeteri" },
        { img: "/ressources/graph.png", text: "Création graphique" },
        { img: "/ressources/quiz.png", text: "Autre chose ?" },
    ]

    //fcuntion qui permet de charger l'index du composant à afficher
    const changeIndexCP = (e, index) => {
        setCP(index)
    }


    //function qui permet de choisir le type de conception voulu
    const setChoice = (e, index) => {
        var all = document.querySelectorAll("#choice svg");

        for (var i = 0; i < all.length; i++) {
            all[i].style.display = "none"
        }

        all[index].style.display = "block"
    }

    //function qui retourne les composant en fonction de index
    const stepsContent = () => {

        if (cp == 0) {
            return (
                <section className={P.section_two}>
                    <h2>
                        De quelle conception avez-vous besoin ?
                        <span> Sélectionnez le type de design dont vous avez besoin </span>
                    </h2>

                    <div className={P.bl1}>
                        {listImg.map((list, i) => {
                            return (
                                <div id="choice" onClick={(e) => setChoice(e, i)}>
                                    <img src={list.img} />
                                    <p>
                                        <h4> {list.text} </h4>
                                        <span>$10 de rabais</span>
                                    </p>
                                    <FaCheckCircle />
                                </div>
                            )
                        })}

                    </div>

                    <div className={P.bl2}>
                        <div>
                            <img src="/ressources/cat1.png" alt="" />
                            <p>
                                <h3>
                                    Conception de logo et de carte de visite personnalisée
                                </h3>
                                <span>Economisez 10$ </span>

                                <p>
                                    Un design de logo et de carte de visite
                                    qui se marie parfaitement
                                </p>
                                <p>
                                    <span> <FaCheckCircle /> Création de logo </span>
                                    <span> <FaCheckCircle /> Conception de carte de viste </span>
                                </p>

                            </p>
                        </div>
                        <div>
                            <img src="/ressources/cat2.png" alt="" />
                            <p>
                                <h3>
                                    Impression de logos et de cartes de visite
                                </h3>
                                <span>Economisez 10$ </span>

                                <p>
                                    Un logo et des cartes de visite imprimées
                                </p>
                                <p>
                                    <span> <FaCheckCircle /> Création de logos  </span>
                                    <span> <FaCheckCircle /> Livraison gratuite  </span>
                                </p>

                            </p>
                        </div>
                    </div>

                    <div className={P.bl2}>
                        <div>
                            <img src="/ressources/cat3.png" alt="" />
                            <p>
                                <h3>
                                    Logo et site Web
                                </h3>
                                <span>Economisez 10$ </span>

                                <p>
                                    Un logo et un site web correspondant conçus et hébergés
                                </p>
                                <p>
                                    <span> <FaCheckCircle /> Création de logo </span>
                                    <span> <FaCheckCircle /> Conception et configuration du site Web  </span>
                                    <span> <FaCheckCircle /> 1 an d'hébergement  </span>
                                    <span> <FaCheckCircle /> Nom de domaine gratuit  </span>
                                </p>

                            </p>
                        </div>
                        <div>
                            <img src="/ressources/cat4.png" alt="" />
                            <p>
                                <h3>
                                    Couvertures de logo et de médias sociaux
                                </h3>
                                <span>Economisez 10$ </span>

                                <p>
                                    Un logo et des cartes de visite imprimées
                                </p>
                                <p>
                                    <span> <FaCheckCircle /> Création de logos  </span>
                                    <span> <FaCheckCircle /> photo Facebook de couverture   </span>
                                    <span> <FaCheckCircle /> Couverture Instagram  </span>
                                    <span> <FaCheckCircle /> Couverture Linkedin   </span>
                                </p>

                            </p>
                        </div>
                    </div>
                    <button className={P.btn_continue}
                        onClick={(e) => changeIndexCP(e, 1)}>
                        continuer
                        <FaChevronRight />
                    </button>
                </section>
            )
        }
        else if (cp == 1) {
            return (

                <section className={P.section_two}>
                    <h2>
                        Décrivez le design de t-shirt dont vous avez besoin
                        <span> Commençons par quelques informations de base sur votre projet </span>
                    </h2>
                    <form>
                        <div className={P.inputs}>
                            <div className={P.bull} id="bull">
                                <p>

                                    <h3> Nommez votre projet </h3>
                                    Le nom de votre projet doit décrire votre entreprise et ce dont vous avez besoin Essayz d'inclure l'industrie et la rendre aussi intéressante et excitante que possible
                                    <span> Exemple: </span>
                                    "Le commerce international du sport a besoin d'un logo
                                </p>
                            </div>
                            <div>
                                <label> Nommez votre projet </label>
                                <input type="text" name="name_proj"
                                    id="name_pro"
                                    onMouseOver={(e) => showInfos(e, 0)}
                                    onMouseOut={(e) => hideInfos(e, 0)}
                                    placeholder="Entrez un titre  pour votre projet de conception de logo" />
                            </div>
                            <span id="error_name"></span>
                        </div>
                        <div className={P.inputs}>
                            <div className={P.bull2} id="bull">
                                <p>
                                    <h3> Description de la tâche </h3>
                                    Décrivez le design dont vous avez besoin et à quoi il sert Envisagez de fournir des informations générales sur votre entrepris/ produit/Service.
                                    <span> Exemple: </span>
                                    Nous avons besoin d'un design de logo pour une nouvelle société basée à Bamako appelée AnaizanSoft. Nous développons des applications iphone innovantes pour les consommateurs .
                                    Notre produit initial est budgetCalc- une application
                                    qui aide les gens à gérer leur budget
                                    et à économiser de l'argent .
                                    Nous aimerions voir des designs qui
                                    utilisent la couleur verte. La conception finale devrait communiquer la sécurité financière et la croissance.

                                </p>
                            </div>
                            <div>
                                <label> Description de la tâche </label>
                                <textarea name="desc"
                                    id="desc"
                                    cols="30"
                                    rows="10"
                                    onMouseOver={(e) => showInfos(e, 1)}
                                    onMouseOut={(e) => hideInfos(e, 1)}
                                >
                                </textarea>
                            </div>
                            <span id="error_desc"></span>
                        </div>
                        <div className={P.inputs}>
                            <div className={P.bull3} id="bull">
                                <p>
                                    <h3> Texte du logo </h3>
                                    Le texte doit être soit le nom de l'entreprise
                                    , soit  celui du produit, ou encore l'évènement à afficher
                                    sur le logo
                                    <span> Exemple: </span>
                                    Anaizan Tech
                                </p>
                            </div>
                            <div>
                                <label> Texte du Logo </label>
                                <input type="text" name="title"
                                    id="title"
                                    placeholder="Que voulez-vous que votre logo indique dessus?"
                                    onMouseOver={(e) => showInfos(e, 2)}
                                    onMouseOut={(e) => hideInfos(e, 2)}
                                />
                            </div>
                            <span id="error_title"></span>
                        </div>
                        <div className={P.inputs}>
                            <div>
                                <label> Upload files (optional) </label>
                                <input type="file" name="file"
                                    id="file" />
                            </div>
                            <span id="error_file"></span>
                        </div>
                        <p>
                            <button>
                                enrégistrer la progression
                            </button>
                            <button className={P.btn_continues}
                                onClick={(e) => changeIndexCP(e, 2)}>
                                continuer
                                <FaChevronRight />
                            </button>
                        </p>
                    </form>

                </section>
            )
        }
        else if (cp == 2) {
            return (
                <section className={P.section_two}>
                    <h2>
                        Quel pack de t-shirts préférez-vous ?
                        <span> Choisissez un forfait qui obtiendra les résultats que vous désirez </span>
                    </h2>

                    <div className={P.packet_group}>
                        <div className={P.packet}>
                            <div>
                                <img src="/ressources/Group.png" />
                                <h3> 1-6 <br /> Designs</h3>
                            </div>
                            <div>
                                <p>

                                    <p>1 Conception</p>
                                    <p>1 à 3 concepteurs</p>
                                    <p>Jusqu'à 3 révisions</p>
                                    <p>Garantie de remboursement</p>
                                    <p>Droits d'auteur sur un design</p>
                                    <p>Fichiers standard de l'industrie</p>

                                </p>

                                <p id={P.ps}>Economiser au moins</p>
                                <h4>US$19</h4>
                                <button>sélectionner</button>
                            </div>

                        </div>
                        <div className={P.packet}>
                            <div>
                                <img src="/ressources/Group2.png" />
                                <h3> 6+ <br /> Designs</h3>
                            </div>
                            <div>
                                <p>

                                    <p>1 Conception</p>
                                    <p>1 à 3 concepteurs</p>
                                    <p>Jusqu'à 3 révisions</p>
                                    <p>Garantie de remboursement</p>
                                    <p>Droits d'auteur sur un design</p>
                                    <p>Fichiers standard de l'industrie</p>

                                </p>
                                <p id={P.ps}>Economiser au moins</p>
                                <h4>US$19</h4>
                                <button>sélectionner</button>
                            </div>
                        </div>
                        <div className={P.packet}>
                            <div>
                                <img src="/ressources/Group3.png" />
                                <h3> 20+ <br /> Designs</h3>
                            </div>
                            <div>
                                <p>

                                    <p>1 Conception</p>
                                    <p>1 à 3 concepteurs</p>
                                    <p>Jusqu'à 3 révisions</p>
                                    <p>Garantie de remboursement</p>
                                    <p>Droits d'auteur sur un design</p>
                                    <p>Fichiers standard de l'industrie</p>

                                </p>
                                <p id={P.ps}>Economiser au moins</p>
                                <h4>US$19</h4>
                                <button>sélectionner</button>
                            </div>
                        </div>
                        <div className={P.packet}>

                            <div>
                                <img src="/ressources/Group4.png" />
                                <h3> 40+ <br /> Designs</h3>
                            </div>
                            <div>
                                <p>

                                    <p>1 Conception</p>
                                    <p>1 à 3 concepteurs</p>
                                    <p>Jusqu'à 3 révisions</p>
                                    <p>Garantie de remboursement</p>
                                    <p>Droits d'auteur sur un design</p>
                                    <p>Fichiers standard de l'industrie</p>

                                </p>
                                <p id={P.ps}>Economiser au moins</p>
                                <h4>US$19</h4>
                                <button>sélectionner</button>
                            </div>
                            <h5> Packet le plus populaire </h5>
                        </div>
                        <div className={P.packet}>
                            <div>
                                <img src="/ressources/Group5.png" />
                                <h3> 60+ <br /> Designs</h3>
                            </div>
                            <div>
                                <p>

                                    <p>1 Conception</p>
                                    <p>1 à 3 concepteurs</p>
                                    <p>Jusqu'à 3 révisions</p>
                                    <p>Garantie de remboursement</p>
                                    <p>Droits d'auteur sur un design</p>
                                    <p>Fichiers standard de l'industrie</p>

                                </p>
                                <p id={P.ps}>Economiser au moins</p>
                                <h4>US$19</h4>
                                <button>sélectionner</button>
                            </div>
                        </div>

                    </div>

                    <li><a href="">Personnaliser le projet</a></li>
                    <div className={P.bloc_div}>
                        <h2>
                            Mises à niveau du projet
                            <span>
                                Choisissez de mettre à niveau et d'améliorer votre projet ci-dessous
                            </span>
                        </h2>
                        <div className={P.split_div}>
                            <div className={P.card_group}>
                                <div>
                                    <img src="" id="new_logo" />
                                    <img src="/ressources/l1.png" />
                                    <p>
                                        <h3>Délai express </h3>

                                        <p>Délai express Plus d'information </p>
                                        <p>Besoin de votre projet plus rapidement que 7 jours ? </p>
                                        <p>Sélectionnez cette mise à niveau de projet de délai </p>
                                        <p>d'exécution express pour obtenir votre conception dans </p>
                                        <p>les 3 jours ou même 24 heures ! </p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>

                                <div>
                                    <img src="" id="new_logo" />
                                    <img src="/ressources/l2.png" />
                                    <p>
                                        <h3>Projet privé </h3>
                                        <p>Cachez votre projet des moteurs de recherche,</p>
                                        <p> des concurrents et des clients.</p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>
                                <div>
                                    <img src="" id="new_logo" />
                                    <img src="/ressources/l3.png" />
                                    <p>
                                        <h3>  Les meilleurs designer </h3>

                                        <p> Assurez-vous que 3 de nos designers les plus performants </p>
                                        <p>travaillent sur votre projet. </p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>
                                <div>
                                    <img src="" id="new_logo" />
                                    <img src="/ressources/l4.png" />
                                    <p>
                                        <h3> Projet en vedette </h3>

                                        <p> Mettez votre projet en haut de la liste. </p>
                                        <p>Recevez 50% de designs en plus. </p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>
                                <div>
                                    <img src="" id="new_logo" />
                                    <img src="/ressources/l5.png" />
                                    <p>
                                        <h3> Accord de non-divulgation et projet privé </h3>

                                        <p> demandez aux concepteurs de signer un accord de  </p>
                                        <p>Besoin de votre projet plus rapidement que 7 jours ? </p>
                                        <p>confidentialité (NDA). </p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>
                                <div>
                                    <img src="" id="new_logo" />
                                    <img src="/ressources/l6.png" />
                                    <p>
                                        <h3> Ajouter un log </h3>
                                        <p>   Besoin d'un nouveau logo conçu ?   </p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>
                                <div>
                                    <img src="" id="new_logo" />
                                    <img src="/ressources/l7.png" />
                                    <p>
                                        <h3>  Ajouter un design de carte de visite </h3>
                                        <p> Obtenez un design professionnel de carte de visite  </p>
                                        <p> simple ou double face avec votre nouveau logo. </p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>
                                <div>
                                    <img src="" id="new_logo" />
                                    <img src="/ressources/l8.png" />
                                    <p>
                                        <h3>  Ajouter un design de papeterie </h3>
                                        <p> en-tête et d'enveloppe.  </p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>
                                <div>
                                    <img src="/ressources/NEW.png" id="new_logo" />
                                    <img src="/ressources/l9.png" />
                                    <p>
                                        <h3> Ajouter un site Web avec domaine et hébergement </h3>

                                        <p> Obtenez un site web personnalisé par un designer </p>
                                        <p> professionnel. Comprend 12 mois d'hébergement, </p>
                                        <p> un nom de domaine et un CMS pour gérer le site. </p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>
                                <div>
                                    <img src="/ressources/NEW.png" id="new_logo" />
                                    <img src="/ressources/l10.png" />
                                    <p>
                                        <h3> Assistance client VIP </h3>
                                        <p> Bénéficiez d'une assistance premium avec des  </p>
                                        <p>appels téléphoniques et de partage d'écran VIP </p>
                                        <p> dédiés 24h/24 et 7j/7. Notre équipe peut vous  </p>
                                        <p>aider à communiquer avec les designers de vos  </p>
                                        <p> projets pour vous aider à obtenir le design parfait. </p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>
                                </div>
                                <div>
                                    <img src="/ressources/NEW.png" id="new_logo" />
                                    <img src="/ressources/l11.png" />
                                    <p>
                                        <h3> Ajouter l'impression de t-shirts (livraison GRATUITE) </h3>

                                        <p> Faites imprimer le design de votre t-shirt. Choisissez  </p>
                                        <p> des t-shirts noirs, blancs ou gris une fois votre design</p>
                                        <p>finalisé sans frais supplémentaires.</p>
                                    </p>
                                    <p className={P.pl}>
                                        <p >
                                            A partir de <br />
                                            <h4> +$29</h4>
                                        </p>
                                        <button> Ajouter </button>
                                    </p>

                                </div>

                                <div id={P.last_divs}>
                                    <form>
                                        <label> Code de réduction </label>
                                        <input type="text" name="code" id="code"
                                            placeholder="12XXXXXXXX" />
                                        <button>eliminer</button>
                                    </form>
                                    <p>
                                        <span>
                                            REMISE NOUVEL UTILISATEUR -
                                        </span>
                                        Économisez lorsque vous lancez votre projet aujourd'hui !
                                    </p>
                                </div>
                            </div>

                            <div className={P.devis}>
                                <h3> Résumé </h3>
                                <p id={P.pd}>
                                    Forfait sélectionner
                                    <span> 00,US </span>
                                </p>
                                <p id={P.pd}>
                                    Délais express 3 jours
                                    <span> 00,US </span>
                                </p>
                                <p id={P.pd}>
                                    Ajouter un logo
                                    <span> 00,US </span>
                                </p>
                                <p id={P.pd}>
                                    Ajouter un design de carte de visite
                                    <span> 00,US </span>
                                </p>
                                <p id={P.pd}>
                                    Ajouter un design de papeterie
                                    <span> 00,US </span>
                                </p>
                                <p id={P.pd}>
                                    Assistance client VIP
                                    <span> 00,US </span>
                                </p>
                                <p id={P.pd}> Projet mise en avant
                                    <span> 00,US </span>
                                </p>
                                <p id={P.pd}>
                                    Frais de transaction
                                    <span> 00,US </span>
                                </p>
                                <br />
                                <p className={P.total} id={P.pd} >
                                    <h3> Total </h3>
                                    <h3> 00,US </h3>
                                </p>
                                <p className={P.econ}>
                                    Vous économiser US$0
                                </p>
                                <p id={P.code}>
                                    Avez-vous un coupon ?
                                    <button> Ajouter votre code promo </button>
                                </p>
                                <div>
                                    <p> Mode de paiement accepté </p>
                                    <div className={P.modePaie}>
                                        <img src="/ressources/visa.png" />
                                        <img src="/ressources/masterCard.png" />
                                        <img src="/ressources/amex.png" />
                                        <img src="/ressources/payp.png" />
                                    </div>
                                </div>
                                <div id={P.war}>
                                    <img src="/ressources/warranty.png" />
                                    <h4> Money back guarantie</h4>
                                    <p>
                                        Get the design you want or your money back.
                                    </p>
                                    <p>
                                        Conditions apply - <a href="">see our refund policy</a>
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                    <p className={P.btnss}>
                        <button>
                            enrégistrer la progression
                        </button>
                        <button className={P.btn_continues}
                            onClick={(e) => changeIndexCP(e, 3)}>
                            continuer
                            <FaChevronRight />
                        </button>
                    </p>
                </section>

            )
        } else if (cp == 3) {
            return (
                <section className={P.section_two}>
                    <h2>
                        Confirmer les détails du projet
                        <span>
                            Passez en revue les détails de votre projet ci-dessous
                        </span>
                    </h2>

                    <div className={P.confirm_projet}>
                        <div>
                            <h4> Nom du projet</h4>
                            <span> Nouveau projet de conception de t-shirts </span>
                        </div>
                        <div>
                            <h4> Conception requise</h4>
                            <span> Logo </span>
                        </div>
                        <div>
                            <h4> Coût total du projet</h4>
                            <span>
                                <span className={P.red}>
                                    Remise appliquée ! Vous économisez 19,76 USD !
                                </span>
                                <span className={P.red} > 444,08 USD </span>
                                <span>
                                    424,32 USD
                                </span>
                                <span>
                                    comprend des frais de transaction de 4,0 %
                                </span>
                            </span>
                        </div>
                        <div>
                            <a>
                                Pourquoi vous devez payer d'avance ?
                            </a>
                        </div>
                    </div>

                    <div className={P.paiement}>
                        <h2>
                            Mode de paiement
                            <span>
                                Sélectionner une option de paiement avant de poursuivre
                            </span>
                        </h2>

                        <div className={P.mode_p}>
                            <div id={P.block_p}>
                                <div className={P.input}>
                                    <input type="radio" name="mode"
                                        id="mode"
                                        onClick={(e) => handleSelect(e, 1)} />
                                    <span> Cartes  de crédit </span>
                                </div>
                                <div className={P.mp}>
                                    <img src="/ressources/visa.png" />
                                    <img src="/ressources/masterCard.png" />
                                    <img src="/ressources/amex.png" />
                                    <img src="/ressources/payp.png" />
                                </div>
                            </div>

                            <div id={P.block_p}>
                                <div className={P.input}>
                                    <input type="radio" name="mode"
                                        id="mode"
                                        onClick={(e) => handleSelect(e, 2)} />
                                    <span> Paiement mobile </span>
                                </div>
                                <div className={P.mp}>
                                    <img src="/ressources/rect.png" />
                                </div>
                            </div>

                            <div id={P.block_p}>
                                <div className={P.input}>
                                    <input type="radio" name="mode"
                                        id="mode"
                                        onClick={(e) => handleSelect(e, 3)} />
                                    <span> Paypal </span>
                                </div>
                                <div className={P.mp}>
                                    <img src="/ressources/payp.png" />
                                </div>
                            </div>

                            <div id={P.block_p}>
                                {/*    <div className = {P.input}>
                                    <input type="radio" name="mode" id="mode" />
                                    <span> Cartes  de crédit </span>
                                </div> */}
                                <div className={P.mp}>
                                    <img src="/ressources/stripe.png" />
                                    <p>
                                        Il s'agit d'un paiement crypté SSL <br />
                                        128 bits sécurisé
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={P.form_paie} >
                            {showMode_paie()}
                            <div className={P.form_p2}>
                                <img src="/ressources/warranty.png" />
                                <h4> Garantie de remboursement </h4>
                                <p>
                                    Obtenez le design que vous voulez
                                    ou remboursé. Des conditions
                                    s'appliquent - <a href=""> voir notre politique de
                                        remboursement </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }

    }

    //function qui permet de charger l'index du formulaire du mode
    // de paiement sélectionner
    const handleSelect = (e, index) => {
        var allSelect = document.querySelectorAll("#mode");

        if (allSelect[0].checked) {
            setIndex(index)
        } else if (allSelect[1].checked) {
            setIndex(index)
        } else if (allSelect[2].checked) {
            setIndex(index)
        }
    }

    //function qui permet d'afficher le formualire des mode de paiement
    // lors d'une selection
    const showMode_paie = () => {
        if (index == 1) {
            return (
                <form>
                    <div>
                        <p>
                            <label> Numéro de carte</label>
                            <input type="text" name="num_carte"
                                id="num_carte"
                                placeholder="Numéro de votre carte" />
                        </p>
                        <span id="error_num"></span>
                    </div>
                    <div>
                        <p>
                            <label> Date expiration </label>
                            <input type="text" name="date_exp"
                                id="date_exp"
                                placeholder="jj/mm/aaaa" />
                        </p>
                        <span id="error_date"></span>
                    </div>
                    <div>
                        <p>
                            <label> CVV </label>
                            <input type="text" name="cvv"
                                id="cvv"
                                placeholder="CVV" />
                        </p>
                        <span id="error_cvv"></span>
                    </div>

                    <button>
                        Soumettre
                    </button>
                </form>
            )
        } if (index == 2) {
            return (
                <div className={P.mobile}>
                    <h3> Confirmation de paiement </h3>
                    <form>
                        <div className={P.input_form2}>
                            <label> Numéro mobile </label>
                            <div>
                                <select name="indicatif"
                                    id="indicatif">
                                    <option value="+229">229</option>
                                </select>
                                <input type="text" name="tel"
                                    id="tel"
                                    placeholder=" Numéro de téléphone" />
                            </div>
                            <span id="error_num"></span>
                        </div>
                        <div className={P.input_form2}>
                            <label> Code de paiement ( 6 chiffres )</label>
                            <div>
                                <p>
                                    obtenez votre code de paiement depuis votre
                                    menu USSD Orange money *144*2#
                                </p>
                                <input type="text" name="code"
                                    id="code" />
                            </div>
                            <span id="error_code"></span>
                        </div>
                        <button>Confirmer</button>
                    </form>
                </div>
            )
        } else if (index == 3) {
            return (
                <div className={P.payp_block}>
                    <button>
                        <img src="/ressources/pay_logo.png" />
                    </button>
                    <p> Votre réflexe sécurité pour payer en ligne </p>
                </div>
            )
        }
    }

    //funxtion qui affiche et de les bulle d'information à gauche
    const showInfos = (e, index) => {
        var all = document.querySelectorAll("#bull");
        all[index].style.display = "block"
    }

    const hideInfos = (e, index) => {
        var all = document.querySelectorAll("#bull");
        all[index].style.display = "none"
    }

    return (
        <div className={P.block_bodys}>
            <div className={P.block_content}>
                <section className={P.section_one}>
                    <div className={P.head}>
                        <h3>
                            <BsCheck2Circle />
                            Remise appliquée
                        </h3>
                        <p>
                            <span>
                                REMISE NOUVEL UTILISATEUR -
                            </span>
                            Économisez lorsque vous lancez votre projet aujourd'hui !
                        </p>
                    </div>

                    <div className={P.progress_anim}>
                        <div className={P.bar_progress}>
                        </div>
                        <div className={P.svgs}>
                            <FaCircle />
                            <FaCheckCircle />
                            <span className={P.s1}>1</span>
                            <h3 className={P.step_text1}> Detail du projet </h3>
                        </div>

                        <div className={P.svgs}>
                            <FaCircle />
                            <span className={P.s2}>2</span>
                            <h3 className={P.step_text2}>Dossier créatif </h3>
                        </div>

                        <div className={P.svgs}>
                            <FaCircle />
                            <span className={P.s3}>3</span>
                            <h3 className={P.step_text3}> Options de conception  </h3>
                        </div>

                        <div className={P.svgs}>
                            <FaCircle />
                            <span className={P.s4}>4</span>
                            <h3 className={P.step_text4}> Options de conception  </h3>
                        </div>
                    </div>
                </section>
                {stepsContent()}
                <section className={P.section_three}>
                    <div className={P.warranty}>
                        <img src="/ressources/warranty.png" alt="" />
                        <div>
                            <h3>Garantie de remboursement</h3>
                            <p>
                                Obtenez le design que vous voulez ou remboursé.
                                Des conditions s'appliquent -
                                <a href="">voir notre politique de remboursement</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            {/* <section className={P.section_foot}>
                <p>
                    Copyright © 2022 Services Rapide. L'utilisation de ce site Web
                    implique l'acceptation de notre <a href="">accord d'utilisation</a>
                    &nbsp;  et de <a href="">notre politique de confidentialité .</a>
                </p>
                <p>
                    Des conditions s'appliquent, veuillez consulter <a href="">notre politique de remboursement</a> .
                </p>
            </section> */}
        </div>
    )
}

export default Project