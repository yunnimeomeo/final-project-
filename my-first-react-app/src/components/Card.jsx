function AboutMeCard() {
  const name = "Yunni Nguyen";
  const bio = "I like Cat."
  const funfact = "Fun fact: I can cooking"
  const emoji = "😄";

  return (
    <div className="card">
      <span style={{ fontSize: "48px" }}>{emoji}</span>
      <h3>About me:</h3>
      <p><strong>Name:</strong> {name}</p>
      <p>{bio}</p>
      <p><strong>Fun fact:</strong> {funfact}</p>
    </div>
  );
}

export default AboutMeCard;