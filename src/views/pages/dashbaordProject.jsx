import React, { useState } from "react"
import { FaChevronRight, FaInfoCircle, FaUser, FaRegWindowMaximize, FaUsers, FaRegClone, FaMoneyBill, FaFolder, FaDirections, FaFileArchive, FaEnvelope, FaPlusCircle, FaStar, FaUserFriends, FaPrint } from "react-icons/fa"
import { GoFileDirectory, GoInfo } from "react-icons/go"
import D from "../../assets/styleSheets/DashboardProject.module.css"
import { BsCash } from "react-icons/bs"

const DashboardProject = () => {


    const showMenu_s = (e) => {
        var ul = document.getElementById ("ul_hide")
        var li = document.querySelector ("#menu #li");

        if ( ul.style.display == "none" ) {
            ul.style.display = "block";
            li.style.paddingBottom = "0%"
        } else {
            ul.style.display = "none"
            li.style.paddingBottom = "5%"
        }
    }


    return (
        <div className={D.project}>
            <div className={D.head}>
                <FaInfoCircle />
                <p>
                    Il manque à votre compte un prénom et
                    nom de famille nécéssaire pour vous identifier
                    le compte.
                    <a href="">Cliquer ici pour mettre à jour ces détails</a>
                </p>
            </div>

            <div className={D.split_block}>
                <div className={D.nav_menu} id = "menu">
                    <div className={D.head_menu}>
                        <FaUser />
                        <p>
                            Référez-vous et obtenez jusqu'à
                            100$ de rabais
                        </p>
                    </div>
                    <ul>
                        <li className={D.first_li} id = "li">

                            <span className = {D.span}
                            onClick = { (e) => showMenu_s (e)} >
                                <FaFolder />
                                Mes projets
                                <span> 1 </span>
                            </span>

                            <ul id = "ul_hide">
                                <li> Projets ouverts <span> 1 </span> </li>
                                <li> Projets fermés <span> 1 </span> </li>
                                <li> Ebauches de projets <span> 1 </span> </li>
                            </ul>
                        </li>
                        <li>
                            <FaRegClone />
                            <span>
                                Mes commandes d'Impression
                            </span>

                        </li>
                        <li>
                            <FaRegWindowMaximize />
                            <span>
                                Mes commandes sur le site
                            </span>

                        </li>
                        <li>
                            <FaEnvelope />

                            <span>
                                Mes messages
                                <span> 0 </span>
                            </span>
                        </li>
                        <li>
                            <FaUsers />
                            <span>
                                Créateurs préféré
                                <span> 0 </span>
                            </span>
                        </li>
                        <li>
                            <FaPlusCircle />
                            <span>
                                Programmes d'Affiliation
                            </span>

                        </li>
                        <li>
                            <FaStar />
                            <span>
                                Paramètre du compte
                            </span>

                        </li>
                        <li>
                            <FaMoneyBill />
                            <span>
                                Gérér les abonnements
                            </span>

                        </li>
                    </ul>
                </div>
                <div className={D.block_content}>
                    <div className={D.block}>
                        <h1>
                            Project de conception web (Concours)
                            <span> Pas encore lancé </span>
                        </h1>
                        <div className={D.content}>
                            <div className={D.b1}>
                                <div className={D.bar}></div>

                                <div className={D.cont}>
                                    <div className={D.ct}>
                                        <div className={D.circle}>
                                            <div></div>
                                        </div>
                                        <span> Ebauche</span>
                                    </div>
                                    <div className={D.ct}>
                                        <div className={D.circle}>
                                            <div></div>
                                        </div>
                                        <span> Ouvrir</span>
                                    </div>
                                    <div className={D.ct}>
                                        <div className={D.circle}>
                                            <div></div>
                                        </div>
                                        <span> Complet</span>
                                    </div>
                                </div>

                            </div>
                            <div className={D.b2}>
                                <div className={D.steps_group}>
                                    <div className={D.b2_child}>
                                        <h4> Etape 1</h4>
                                        <img src="/ressources/" />
                                        <h3> Détails du projets </h3>
                                        <FaChevronRight />
                                    </div>
                                    <div className={D.b2_child}>
                                        <h4> Etape 2 </h4>
                                        <img src="/ressources/" />
                                        <h3> Dossier créatifs </h3>
                                        <FaChevronRight />
                                    </div>
                                    <div className={D.b2_child}>
                                        <h4> Etape 3</h4>
                                        <img src="/ressources/" />
                                        <h3> Options de conception </h3>
                                        <FaChevronRight />
                                    </div>
                                    <div className={D.b2_child}>
                                        <h4> Etape 4 </h4>
                                        <img src="/ressources/" />
                                        <h3> Options de paiement </h3>
                                    </div>
                                </div>
                                <div className={D.foot_c}>
                                    <button>
                                        Reprendre la commande
                                    </button>
                                    <button>
                                        Supprimer le brouillon
                                    </button>
                                    <p>
                                        Date de création :
                                        <span> 01 mai 2022 </span>
                                    </p>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardProject