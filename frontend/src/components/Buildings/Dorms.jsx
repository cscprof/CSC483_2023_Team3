import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../assets/buildings/dorms.css";

const Dorms = () => {
  return (
    <div className="OldMain">
      <header>
      <Navbar />
      <div class="dcentered">
        <h1>Dormatories</h1>
        </div>
         </header>
            <main>
                <div className="dfirstpart">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus</p>
                </div>
                <div class="image-container">
                <img src="https://www.geneva.edu/residence-life/_assets/memorial-hall-web.jpg"></img>
                <div class="text-container">
                <p>This is some text that will appear to the right of the image.</p>
                </div>
                </div>
                <div class="dsecondpart">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis risus</p>
                </div>
                <div class="dbutton">
                  <button> Upload your own photo!
                  </button>
                </div>
            </main><footer>
        <Footer />
      </footer>
    </div>  
  );
};





export default Dorms;