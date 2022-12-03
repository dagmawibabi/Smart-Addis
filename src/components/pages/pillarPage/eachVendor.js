export const EachVendor = () => {
    return (
        <div className="px-10 py-5 w-2/3 my-5 m-auto rounded-lg bg-white shadow-xl hover:shadow-2xl" >
            <img alt="icon" src={pillars[value]["icon"]} className="w-20 m-auto pb-5" />
            <span className="font-bold text-2xl"> {pillars[value]["title"]} </span> <br />
            <span className="text-lg"> {pillars[value]["description"]} </span>
            <div className="px-10 py-2 mt-6 bg-blue-500 rounded-lg text-white hover:bg-blue-700 ">
                <span> Read More </span>
            </div>
        </div>    
    )
}