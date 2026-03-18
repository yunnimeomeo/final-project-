import AboutMeCard from "./AboutMeCard";

function Foodcard (emoji,name,funfact,bio) {
    return (
    <div className="bg-green-300 border border-gray-200 rounded-2xl shadow-md p-6 w-80 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      
      <span className="text-6xl">{emoji}</span>

      <h3 className="bg-green-600 text-2xl font-bold mt-4 text-gray-800">
        About Me 
      </h3>

      <p className="mt-2 text-2xl">
        <strong>Name:</strong> {name}
      </p>

      <p className="text-green-600 mt-2">{bio}</p>

      <p className="mt-2">
        <strong>Fun Fact:</strong> {funfact}
      </p>

    </div>
  );
}

export default AboutMeCard; 
