function Card({ name, title, blurb, picture }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-72 text-center">
      <img
        src={picture}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />

      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{title}</p>
      <p className="text-sm italic text-gray-500">{blurb}</p>
    </div>
  );
}

export default Card;