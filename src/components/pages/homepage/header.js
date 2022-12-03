export const Header = () => {
    return (
        <div className="h-screen bg-slate-900 text-white pt-52 flex justify-start px-10">
            <div>
                <p className="w-2/3 leading-tight m-auto px-6 py-0 text-6xl text-left">
                    Transforming The Diplomatic Hub of Africa <span className="text-blue-400"> Addis Ababa </span>
                </p>
                <p className="w-2/3 leading-7 m-auto py-10 px-5 text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </p> 
                <div className="w-2/3 flex justify-start m-auto">
                    <div className="px-10 py-3 h-fit rounded-xl bg-blue-500 ml-5 mr-6 font-bold text-white text-lg hover:bg-blue-700">
                        <span> Watch Now </span>
                    </div>
                    <div className="px-8 py-3 h-fit rounded-xl bg-zinc-700 font-bold text-white text-lg hover:bg-zinc-900">
                        <span> Learn More </span>
                    </div>
                </div>
            </div>
            <img alt="cbe" src={require("../../../assets/images/cbe.jpg")} className="w-2/3 m-auto rounded-3xl " />      
        </div>
    )
}