import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../assets/buildings/library.css";

const Library = () => {
  return (
    <div className="OldMain">
      <header>
      <Navbar />
      <div class="centered">
        <h1>Library</h1>
        </div>
         </header>
            <main>
                <div className="firstpart">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus</p>
                </div>
                <div class="secondpart">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus</p>
                </div>
                <div class="button">
                  <button> Upload your own photo!
                  </button>
                </div>
            </main><footer>
        <Footer />
      </footer>
    </div>  
  );
};





export default Library;