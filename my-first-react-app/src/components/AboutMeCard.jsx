function AboutMeCard({ name, bio, funfact, emoji }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-72 text-center">
      <div className="text-5xl mb-4">{emoji}</div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">{name}</h2>
      <p className="text-slate-600 mb-2">{bio}</p>
      <p className="text-pink-500 italic">{funfact}</p>
    </div>
  )
}

export default AboutMeCard