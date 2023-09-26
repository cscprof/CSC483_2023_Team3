import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const OldMain = () => {
  return (
    <div className="OldMain">
      <header>
        <Navbar />
      </header>
      <main>
        <h1>old main</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default OldMain;