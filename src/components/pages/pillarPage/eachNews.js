export const EachNews = (props) => {
    return (
        <div className="bg-white w-fit flex justify-start text-start rounded-lg m-auto my-5 shadow-lg px-5 py-4 hover:shadow-2xl">
            <img 
                alt="news" 
                src={require("../../../assets/images/cbe.jpg")} 
                className="w-80 pr-5 rounded-md" 
            />
            <div className="w-96">
                <span className="font-bold text-2xl"> {props.news.title} </span>
                <p className="py-5"> {props.news.description} </p>
                <div className="rounded-lg bg-blue-500 px-10 py-2 text-center text-white hover:bg-blue-700">
                    <span> Read More </span>
                </div>
            </div>
        </div>
    )
}