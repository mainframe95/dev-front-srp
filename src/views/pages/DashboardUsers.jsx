import React, { useState } from "react"
import { FaEye, FaBox, FaList, FaFontAwesomeFlag, FaChevronLeft, FaChevronRight, FaInfoCircle, FaUser, FaRegWindowMaximize, FaUsers, FaRegClone, FaMoneyBill, FaFolder, FaDirections, FaFileArchive, FaEnvelope, FaPlusCircle, FaStar, FaUserFriends, FaPrint } from "react-icons/fa"
import { GoFileDirectory, GoInfo } from "react-icons/go"
import D from "../../assets/styleSheets/DashboardProject.module.css"
import { BsCash } from "react-icons/bs"

import { tab_logo } from "./Home"
import { list } from "postcss"

const DashboardUser = () => {


    const showMenu_s = (e) => {
        var ul = document.getElementById("ul_hide")
        var li = document.querySelector("#menu #li");

        if (ul.style.display == "none") {
            ul.style.display = "block";
            li.style.paddingBottom = "0%"
        } else {
            ul.style.display = "none"
            li.style.paddingBottom = "5%"
        }
    }


    return (
        <div className={D.project}>
            <div className={D.heads}>

                <p>
                    <h3> <FaInfoCircle /> Vérification d'email </h3>
                    <span>
                        Merci de Cliquer sur votre email de Vérification afin
                        de confimer votre email et completé votre profil.
                    </span>
                    <span>
                        Assurez-vous de vérifier les dossiers spams et marquer le courrier
                        électronique comme sûr?
                    </span>
                    <span>
                        Si vous ne pouvez toujour pas localiser le message,
                        merci de ciquer sur
                        <a href=""> Renvoyer mon email </a>
                    </span>
                </p>
            </div>
            <div className={D.head}>
                <FaInfoCircle />
                <p>
                    Merci ! vos compétence de conception ont été Enrégistrées.
                    <a href="">Cliquer ici pour mettre à jour ces détails</a>
                </p>
            </div>

            <div className={D.split_block}>
                <div className={D.nav_menu} id="menu">
                    <button className={D.head_btn}>
                        Parcourir les emplois
                        <FaChevronRight />
                    </button>
                    <div className={D.head_menus}>
                        <div className={D.except}>
                            <h3> Force de profil <b>14%</b> </h3>
                            <div className={D.bar}>
                                <div></div>
                            </div>
                            <p className={D.ps}>
                                <a href=""> Cliquer ici </a>
                                pour completé votre profile
                            </p>
                        </div>

                    </div>
                    <ul>
                        <li className={D.first}>
                            <FaList />
                            <span>
                                Générale
                                <span> 1 </span>
                            </span>
                        </li>
                        <li>
                            <FaFontAwesomeFlag />

                            <span>
                                Notifications
                                <span> 0 </span>
                            </span>
                        </li>
                        <li>
                            <FaBox />

                            <span>
                                Invités
                                <span> 0 </span>
                            </span>
                        </li>
                        <li>
                            <FaStar />

                            <span>
                                Soumission
                                <span> 0 </span>
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
                            <FaEye />

                            <span>
                                Surveillance
                                <span> 0 </span>
                            </span>
                        </li>
                        <li>
                            <FaUsers />
                            <span>
                                Paiements
                            </span>
                        </li>
                        <li>
                            <FaPlusCircle />
                            <span>
                                Widgets
                            </span>
                        </li>
                        <li>
                            <FaUser />
                            <span>
                                Mon service de design
                            </span>
                        </li>
                        <li>
                            <FaMoneyBill />
                            <span>
                                Mon profil
                            </span>
                        </li>
                        <li>
                            <FaUsers />
                            <span>
                                Communautés
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={D.block_content} id={D.content}>
                    <div className={D.block}>
                        <h2 className={D.h1}>
                            <span>
                                Bienvenu à <b> Service Rapide </b>
                            </span>
                            <p>
                                Vois faites maintenant partie d'une Communautés mondial de plus de 1000.
                                Nous somme heureux de vous avoir à bord.
                            </p>
                        </h2>
                        <div className={D.content_block}>
                            <div className={D.content} id={D.conts}>

                                <div className={D.user_profile}>
                                    <div className={D.splits_div}>
                                        <img src="/ressources/" />
                                    </div>
                                    <div className={D.splits_div} id={D.ss}>
                                        <div>
                                            <b> Classement </b>
                                            <h3> non classé </h3>
                                            <span> pour 1222 concepteur </span>
                                        </div>
                                        <div>
                                            <b> Positif </b>
                                            <h3> 0% </h3>
                                            <span>
                                                {
                                                    new Array(4).fill().map((_, i) => {
                                                        return <span> <FaStar /> </span>
                                                    })
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    <div className={D.splits_div}>
                                        <b> Soumissions </b>
                                        <h3> 0 </h3>
                                        <span> size range : 13</span>
                                    </div>
                                    <div className={D.splits_div}>
                                        <b> Revenus </b>
                                        <h3> $0 </h3>
                                        <span> size average $123</span>
                                    </div>
                                </div>
                            </div>
                            <div className={D.d_block}>
                                <div className={D.db1}>
                                    <h1> Recommandation </h1>
                                    <div>
                                        <p>
                                            Il y en a plus de 12222 qui vous attendent
                                            sur ces emplois qui n'ont pas encore de
                                            soumissions
                                        </p>
                                    </div>
                                    <div className={D.p2}>
                                        <img src="/ressources/" />
                                        <p>
                                            <h3>Blue Gurth</h3>
                                            <span>
                                                jhjj
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <span>
                                            Page 1
                                        </span>
                                        <span>
                                            <button>
                                                <FaChevronLeft />
                                                <FaChevronLeft />
                                            </button>
                                            <span> Page next </span>
                                            <button>
                                                <FaChevronRight />
                                                <FaChevronRight />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div className={D.db1}>
                                    <h1> Archivage </h1>
                                    <div>
                                        <p>
                                            Gagnez des réalisations
                                            de service rapide que vous débloquez
                                        </p>
                                    </div>
                                    <div className={D.d_group}>
                                        <div>
                                            <img src="/ressources/" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={D.content2_block}>
                            <div className={D.block2}>
                                <p>
                                    Choose what type of designer you are
                                    below then click continue to get started. <br />
                                    You will receive project invites and emails
                                    to relevant jobs bassed on your selection
                                    below. <br />
                                    You can mariage you email preferences al anywhere in my
                                    <button> My Profile </button> tab.
                                </p>
                                <div className={D.block_image}>
                                    {tab_logo.map(list => {
                                        return (
                                            <div>
                                                <img src={list.img} />
                                                <h4> {list.name} </h4>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className = {D.btnss_group}>
                                    <p>
                                        Don't see your select , select from many see_more
                                    </p>
                                    <div>
                                        <button> Ecommerce </button>
                                        <button> Wordpress </button>
                                    </div>
                                    <p> You can choose </p>
                                    <button>
                                        CONTINUE
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardUser