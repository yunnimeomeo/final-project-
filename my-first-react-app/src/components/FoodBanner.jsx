function FoodBanner({picture}) {
  return (
    <div className="w-full h-64 overflow-hidden mt-4">
   <img className="object-cover object-[50%_30%] w-full " src={picture} alt="this is a big picture of food"  />
   <img className="object-cover object-[50%_30%] w-full" src={picture} alt="this is another big picture of food"/>
//    </div>
  );
}

export default FoodBanner;

//