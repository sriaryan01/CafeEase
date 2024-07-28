import "./LandingPage.css";
import Home from "../Components/LandingPageComponents/Home";
import Login_Register from "../Components/LandingPageComponents/Login_Register";
import Work from "../Components/LandingPageComponents/Work";
import Contact from "../Components/LandingPageComponents/Contact";
import Footer from "../Components/LandingPageComponents/Footer";
import Navbar from "../Components/LandingPageComponents/Navbar";

function LandingPage() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login_Register />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
