import React from "react";
import "./index.css"
import Navigate from "routes";
import Footer from "views/partials/Footer";
import Header from "views/partials/Header";


function App() {
  return (
    <>
      <Header />
        <div className = "container_body">
          <Navigate />
        </div>
      <Footer />
    </>
  )
}

export default App;
