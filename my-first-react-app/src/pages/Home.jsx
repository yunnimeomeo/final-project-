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
                recipeName="strawberry waffles" time="30"/>
                <Foodcard 
                recipeName="strawberry banana smoothie" time="10"/>
                <Foodcard 
                recipeName="strawberry spaghetti" time="40"/>
                 <Foodcard 
                recipeName="strawberry banana smoothie" time="10"/>
                <Foodcard 
                recipeName="strawberry spaghetti" time="40"/>
            
            </div>

            <div className="grid grid-cols-5 gap-4">
                 <Foodcard 
                 recipeName="strawberry apple" time="90"/>
                <Foodcard 
                 recipeName="strawberry donuts" time="50"/>
                <Foodcard 
                recipeName="strawberry surprise" time="40"/>
                 <Foodcard 
                recipeName="strawberry banana smoothie" time="10"/>
                <Foodcard 
                recipeName="strawberry spaghetti" time="40"/>
            
            </div>
           
       

        </div>

    );
 

}

export default Home;