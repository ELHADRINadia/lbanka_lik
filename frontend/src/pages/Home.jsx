import React from "react";
import NavBar from '../components/NavBar';
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";

function Home() {
    return (
        <div>
        <div>
       <NavBar />
       </div>
<br/> <br/>
     <div>
      <About />
      </div>

       <div>
      <Contact />
      </div>

      <div>
      <Footer />
      </div>
       
       </div>
     
    )
}
export default Home;