import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Food from "./components/Foodcard.jsx";
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
  funfact = "Fun fact: I can cooking"
  emoji = "😄"
        />

         <AboutMeCard 
          name = "Lulya"
  bio = "I like traveling"
  funfact = "i actually like cooking . i do"
  emoji = "😄"
        />
       

        <AboutMeCard />
        <InterestCard />
      </main>

      <Footer />
      {/* function Food() {

  const food1 = "Tofu";
  const food2 = "Dimsum";
  const food3 = "Rice Cake";

  return (
    <div>
      <h2>My Favorite Foods</h2>
      <ul>
        <li>Chicken</li>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3}</li>
        <li>Korean BBQ</li>
      </ul> */}
    </div>
  );
}

export default App;