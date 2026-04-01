 function Title ({myTitle,mySubtitle}){
     return(
         <div className="text-center">

            
             <h1 className="italic text-9xl bg-green-300 m-4 p-4 rounded-2xl">{myTitle}</h1>
             <h3 className="italic font-bold text-2xl bg-green-400 p-4 m-4 shadow-xl w-50 rounded-2xl inline-block">{mySubtitle}</h3>
        </div>

      
     )
 };

 export default Title;

