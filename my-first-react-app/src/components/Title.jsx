function Title ({myTitle,mySubtitle}){
    return(
        <div className="text-center">
            <h1 className="italic text-9xl bg-yellow-500 m-4 p-4">{myTitle}</h1>
            <h3 className="italic font-bold text-2xl bg-green-500 p-4 m-4 shadow-xl w-50 rounded-2xl">{mySubtitle}</h3>
        </div>
    )
};

export default Title;