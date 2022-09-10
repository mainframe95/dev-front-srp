import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Categories from "views/pages/AllCategories";
import Login from "views/pages/authentificate/Login";
import Register from "views/pages/authentificate/Register";
import ResetPassword from "views/pages/authentificate/ResetPassword";
import Business from "views/pages/Business";
import DashboardProject from "views/pages/dashbaordProject";
import DashboardUser from "views/pages/DashboardUsers";
import Formation from "views/pages/Formation";
import Graphisme from "views/pages/Graphisme";
import Home from "views/pages/Home";
import Marketing from "views/pages/MarketingDigital";
import Product from "views/pages/Product";
import DetailsProduct from "views/pages/productDetails";
import Tech from "views/pages/Programmation";
import Project from "views/pages/projetDetails";
import Redaction from "views/pages/RedactionTraduction";
import Video from "views/pages/VideoAnimation";


const Navigate = () => {
    
    return (
        <Router>
            <Routes>
                <Route exact path = "/" element={ <Home />} />
                <Route path = "/connexion" element={ <Login />} />
                <Route path = "/inscription" element={ <Register />} />
                <Route path = "/reinitialise" element={ <ResetPassword />} />
                <Route path = "/categories" element={ <Categories /> } />
                <Route path = "/graphisme&design" element={ <Graphisme /> } />
                <Route path = "/marketingDigital" element={ <Marketing /> } />
                <Route path = "/redactionTraduction" element={ <Redaction /> } />
                <Route path = "/videoAnimation" element={ <Video /> } />
                <Route path = "/programmationTech" element={ <Tech /> } />
                <Route path = "/business" element={ <Business /> } />
                <Route path = "/produits" element={ <Product /> } />
                <Route path = "/formation" element={ <Formation /> } />
                <Route path = "/productDetails" element={ <DetailsProduct /> } />
                <Route path = "/projetDetails" element={ <Project /> } />
                <Route path = "/dashboardProject" element={ <DashboardProject /> } />
                <Route path = "/dashboardUser" element={ <DashboardUser /> } />
            </Routes>
        </Router>
    )
}

export default Navigate;