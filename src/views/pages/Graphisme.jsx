import React from "react";
import G from "../../assets/styleSheets/Graphisme.module.css"
import Help from "./utilContent";

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

const Graphisme = () => {
 
    return (
        <Help title = "Graphisme & Design" />
    )
}

export default Graphisme;