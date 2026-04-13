import Foodinfo from "../components/Foodinfo"; 

function RecipeOne() {
  return (
    <>
       <Foodinfo
         name="Spaghetti"
         servings={2}
         preptime="10 minutes"
         cooktime="30 minutes"
         ingredients={[
    "Spaghetti noodles",
    "Tomato sauce",
    "Ground beef",
    "Garlic",
    "Salt",
    "Pepper"
         ]}
       instructions={[
    "Boil the noodles", 
    "Heat the sauce", 
    "Mix everything together"]}
       />

      
    </>
  );
}

export default RecipeOne;


//FoodBanner img={source}/>
     //<Foodinfo title="spaghetii" stpes = "1.2.3.45"/>
