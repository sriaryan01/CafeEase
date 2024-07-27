import "./LandingPage.css";
import Home from "./Components/Home";
import Login_Register from "./Components/Login_Register";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

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
