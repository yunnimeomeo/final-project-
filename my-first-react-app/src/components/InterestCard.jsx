function InterestCard() {
  const interest = "Web Development";
  const description = "I enjoy building websites .";
  const favoriteFood = "Korean BBQ";
  const rating = "9/10";

  return (
    <div className="card">
      <h3>My Interest</h3>
      <p><strong>Interest:</strong> {interest}</p>
      <p>{description}</p>
      <p><strong>Favorite Food:</strong> {favoriteFood}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
}

export default InterestCard;