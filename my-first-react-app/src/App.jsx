import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Food from "./components/Food.jsx";
import AboutMeCard from "./components/AboutMeCard.jsx";
import InterestCard from "./components/InterestCard.jsx";

function App() {
  return (
    <div>
      <Header />

      <main>
        <h2>Welcome to my website!</h2>

        <Food />
        <Food />

        <AboutMeCard 
          name = "Yunni Nguyen"
  bio = "I like Cat."
  funfact = "I can cooking"
  emoji = "😄"
        />

         <AboutMeCard 
          name = "Lulya"
  bio = "I like traveling"
  funfact = "I actually like cooking. i do"
  emoji = "😄"
        />
       <AboutMeCard 
          name = "Lelena Ammanuel"
  bio = "I like dancing."
  funfact = "I was born in Ethiopia"
  emoji = "🤪"
        />
  <AboutMeCard 
          name = "Graciela Martinez"
  bio = "I like roadtrips."
  funfact = "A bit fear of heights"
  emoji = "💀"
        />
      
      
        {/* <InterestCard /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;