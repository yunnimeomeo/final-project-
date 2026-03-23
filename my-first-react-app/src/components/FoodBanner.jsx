function FoodBanner({picture}) {
  return (
    <div className="w-full h-64 overflow-hidden">
   <img className="object-cover object-[50%_30%] w-full " src={picture} alt="this is a big picture of food"  />
//    </div>
  );
}

export default FoodBanner;

//