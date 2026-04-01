import AboutMeCard from "../components/AboutMeCard";
import Title from "../components/Title"
import pastaPicture from "../assets/pasta.png"
import chickPicture from "../assets/chicken-broccolii.png"
import FoodBanner from "../components/FoodBanner"



function Home() {
    return (
        <div>

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
    <>
          <Title myTitle="Gogett3r" mySubtitle="welcome!" />
          <h1></h1>

            <FoodBanner picture={pastaPicture} />


        <FoodBanner picture={chickPicture} />

    </>
    )

}

export default Home;