function Foodinfo({ name, servings, preptime, cooktime, ingredients, instructions }) {
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
              <ul className="list-disc ml-5 text-gray-700">
                {ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
        </div>
        
        <div  className> 
           <h2 className="text-xl font-semibold mb-2">Instructions</h2>
           <ol className="list-decimal ml-5 text-gray-700">
                {instructions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
             
        
        </div>
             
</div>
      </div>
    </div>
  );
}

export default Foodinfo;
