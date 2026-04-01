import Title from "../components/Title";
import AboutMeCard from "../components/AboutMeCard";
import Foodcard from "../components/Foodcard";


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
}

export default Home;