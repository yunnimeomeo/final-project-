function Food() {

  const food1 = "Tofu";
  const food2 = "Dimsum";
  const food3 = "Rice Cake";

  return (
    <div>
      <h2>My Favorite Foods</h2>
      <ul>
        <li>Chicken</li>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3}</li>
        <li>Korean BBQ</li>
      </ul>
    </div>
  );
}

export default Food;