import React from "react";
import { FaSearch, FaStar } from "react-icons/fa"

import F from "../../assets/styleSheets/Formation.module.css"
import H from "../../assets/styleSheets/Home.module.css"
import {c, c2} from "./Graphisme"
import {s} from "./AllCategories"
import HeadImg from "views/partials/headImg";


const Formation = () => {

    const tab_prod = [
        { 
            img : "/ressources/formation/IMAGE (11).png", 
            img2 : "/ressources/formation/IMAGE (10).png",
            country : "United State",
        },
        { 
            img : "/ressources/formation/IMAGE (11).png", 
            img2 : "/ressources/formation/IMAGE (10).png",
            country : "United State",
        },
        { 
            img : "/ressources/formation/IMAGE (11).png", 
            img2 : "/ressources/formation/IMAGE (10).png",
            country : "United State",
        },
        { 
            img : "/ressources/formation/IMAGE (11).png", 
            img2 : "/ressources/formation/IMAGE (10).png",
            country : "United State",
        },
        { 
            img : "/ressources/formation/IMAGE (11).png", 
            img2 : "/ressources/formation/IMAGE (10).png",
            country : "United State",
        }
    ]

    return (
        <div className = {H.block_body}>
            <HeadImg />
            <section className = {F.section_one}>
                <div className = {F.first_div}>
                    <form>
                        <label> Rechercher </label>
                        <div>
                            <input type="text" name="text"
                             id="text" />
                             <button>
                                <FaSearch />
                             </button>
                        </div>
                    </form>
                    <div className = {F.select_block}>
                        <label> Categorie </label>
                        <select name="categorie" id="categorie">
                            <option value="">categorie</option>
                        </select>
                    </div>

                    <div className = {F.select_block}>
                        <label> Pays </label>
                        <select name="categorie" id="categorie">
                            <option value="">categorie</option>
                        </select>
                    </div>

                    <div className = {F.select_block}>
                        <label> Trier par </label>
                        <select name="categorie" id="categorie">
                            <option value="">categorie</option>
                        </select>
                    </div>
                </div>
                <div className = {F.last_div}>
                    Categorie populaire: &nbsp;&nbsp;
                    <a href=""> Concevoir Logo</a>
                    <a href=""> Concevoir T-shirt</a>
                    <a href=""> Concevoir Web </a>
                    <a href=""> Concevoir Affiche</a>
                    <a href=""> Concevoir Brochure </a>
                </div>
            </section>

            <section className = {F.section_two}>
                <div className = {F.div_section}>

                {tab_prod.map ( ( list, i ) => {
                    return (
                        <div className = {F.products}>
                            <div className = {F.cover}>
                                <li>
                                    <a href="">Voir portofolio</a>
                                </li>
                            </div>
                            <img src = {list.img}  />
                            <div className = {F.foot_product}>
                                <div>
                                    <img src = {list.img2} />
                                    <p>
                                        <b>GLDesign</b>
                                        <div>
                                        { new Array(5).fill().map ( ( _, i ) => {
                                            return <span> <FaStar /> </span>
                                        })}
                                        </div>
                                    </p>
                                    <span>#1</span>
                                </div>
                                <div>
                                    <h5>
                                        <b> {list.country} </b>
                                        Pays
                                    </h5>
                                    <h5>
                                        <b>$233</b>
                                        Prix
                                    </h5>
                                </div>
                                <button>
                                    participer à cette formation
                                </button>
                            </div>
                        </div>
                    )
                })}
                
                </div>
            </section>
            {c()}
            {c2()}
            {s()}
        </div>
    )
}

export default Formation;