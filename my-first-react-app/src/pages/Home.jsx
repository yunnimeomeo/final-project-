import Title from "../components/Title";
import AboutMeCard from "../components/AboutMeCard";
import Foodcard from "../components/Foodcard";


function Home(emoji,) {
    return (
        <div>
            <Foodcard 
            recipeName="strawberry waffles" time="30"/>
             <Foodcard 
            recipeName="strawberry banana smoothie" time="10"/>
             <Foodcard 
            recipeName="strawberry spaghetti" time="40"/>
            <Foodcard 
            recipeName="strawberry spaghetti" time="90"/>
            <Foodcard 
            recipeName="strawberry spaghetti" time="50"/>
        </div>

    );
}

export default Home;