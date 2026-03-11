function AboutMeCard() {
  const name = "My Nguyen";
  const bio = "I like cats.";
  const funFact = "Fun fact: I can cook.";
  const emoji = "😊";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-80 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      
      <span className="text-5xl">{emoji}</span>

      <h3 className="text-xl font-bold mt-4 text-gray-800">
        About Me
      </h3>

      <p className="mt-2">
        <strong>Name:</strong> {name}
      </p>

      <p className="text-gray-600 mt-2">{bio}</p>

      <p className="mt-2">
        <strong>Fun Fact:</strong> {funFact}
      </p>

    </div>
  );
}

export default AboutMeCard;