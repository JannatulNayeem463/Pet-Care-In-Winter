import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import PetServices from "../components/PetServices";
import WinterTips from "../components/WinterTips";
import ExpertVets from "../components/ExpertVets";
import PetCareTips from "../components/PetCareTips";

const Home = () => {
    return(
        <div>
            <header>
                <Header></Header>
            </header>
        <main>
            <section>
                <HeroSlider></HeroSlider>
            </section>
            <section>
                <PetServices></PetServices>
            </section>
            <section>
                <WinterTips></WinterTips>
            </section>
            <section>
                <ExpertVets></ExpertVets>
            </section>
            <section>
                <PetCareTips></PetCareTips>
            </section>
        </main>
           <footer>
              <Footer></Footer>
           </footer>

        </div>
    );
};

export default Home;