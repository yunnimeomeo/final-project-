import AboutMeCard from "../components/AboutMeCard";
import Title from "../components/Title"
import pastaPicture from "../assets/pasta.png"
import chickPicture from "../assets/chicken-broccolii.png"
import FoodBanner from "../components/FoodBanner"
import Foodcard from "../components/Foodcard"



function Home() {
    return (
        <div>
 <Title myTitle="Gogett3r" mySubtitle="welcome!" />
  <FoodBanner picture={pastaPicture} />


        <FoodBanner picture={chickPicture} />
            <div className="grid grid-cols-5 gap-4">
                 <Foodcard 
                recipeName="broccoli Beef" time="30" />
                <Foodcard 
                recipeName=" banana smoothie" time="10"/>
                <Foodcard 
                recipeName="spaghetti" time="40" />
                 <Foodcard 
                recipeName="chicken w/ a side of broccoli" time="10" />
                <Foodcard 
                recipeName="Steak Fries" time="40" />
            
            </div>

            <div className="grid grid-cols-5 gap-4">
                 <Foodcard 
                 recipeName="burrito" time="90" />
                <Foodcard 
                 recipeName="salmon and rice" time="50" />
                <Foodcard 
                recipeName="bean dip" time="40" />
                 <Foodcard 
                recipeName="Gomen and Injera" time="10" />
                <Foodcard 
                recipeName="Elote loco" time="40" />
            
            </div> 
           
       

        </div>

    );
 

}

export default Home;