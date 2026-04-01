

function Foodcard({recipeName,time}) {
    return (
     
        <div className="m-2 p-6 bg-green-100 border rounded-lg shadow-md w-64 inline-block">
            <h1 className="text-2xl text-center font-bold">today's featured recipe</h1>
            <img src="one.jpg" alt="" />
            <h1 className="text-center">{recipeName}</h1>
            <hr />
            <p>{time} minutes</p>
            <p>5 ingredients</p>
            <p>{servings} servings</p>

            <h6>no better way to celebrate...</h6>

            <button>submit</button>

        </div>



    )
         ;
}

export default Foodcard;