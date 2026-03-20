import AboutMeCard from "../components/AboutMeCard";
import Title from "../components/Title"
import myPicture from "../assets/072ab0a15af730dae78a9a5a0c88c5ae.jpg"
import FoodBanner from "../components/FoodBanner"


function Home(emoji,) {
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

    

        <FoodBanner picture={myPicture} />

    </>
    )

}

export default Home;