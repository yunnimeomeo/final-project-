import { useState } from "react";
function Foodinfo({ name, servings, preptime, cooktime, ingredients, instructions }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-200 p-6 max-w-2xl mx-auto mt-6">
      
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        {name}
      </h1>

      <div className="flex justify-center gap-10 text-lg font-semibold text-gray-700 border-b border-gray-300 pb-4">
        <p>Servings: {servings}</p>
        <p>Prep time: {preptime}</p>
        <p>Cook time: {cooktime}</p>
      </div>
<div className="border border-gray-300 bg-gray-200 rounded-lg p-4 mt-4">
        
<div className="grid grid-cols-2 gap-4">
     
        <div className>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              {/* <ul className="list-disc ml-5 text-gray-700"> */}
                {ingredients.map((item, index) => (
                 <li key={index}>{item}</li>
                 ))}
                 {/* </ol> */}
               </div> 
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setFavorite(!favorite)}

className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"

className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"

className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"

className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"

className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"

className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"

className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"

className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"

className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"


>

{favorite ? "Added to Favorites" : "Add Recipe to Favorites"}

</button>

</div>

</div>

</div>

);

}

export default Foodinfo;
