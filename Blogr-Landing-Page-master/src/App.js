import React from "react";
import ArtInfrastructure from "./Components/Art-Infrastructure/art-infrastructure.component";
import Details from "./Components/Details/details.component";
import Features from "./Components/Features/features.component";
import Footer from "./Components/Footer/footer.component";
import Header from "./Components/Header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Details />
      <ArtInfrastructure />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
