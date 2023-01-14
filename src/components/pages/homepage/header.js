export const Header = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-10 flex justify-start px-2">
            <div className="relative left-16 w-3/4">
                <p className="w-2/3 leading-tight m-auto px-2 py-0 text-6xl font-bold font-Oxanium text-left text-[#C6D6DD] float-left">
                    Transforming The Diplomatic Hub of Africa <span className="text-blue-400"> Addis Ababa </span>
                </p>
                <p className="w-2/3 leading-7 m-auto py-2 pb-5 px-2 text-left float-left">
                The transformation of Addis Ababa into a smart city, through the upscaling of infrastructure and improvisations of technology and resources, is a step towards the attainment of technological wealth and social equity.
                </p> 
                <div className="w-2/3 flex justify-start m-auto float-left">
                    <div className="px-10 py-3 h-fit rounded-xl bg-blue-500 ml-2 mr-6 font-bold text-white hover:bg-blue-700">
                        <span> Watch Now </span>
                    </div>
                    <div className="px-8 py-3 h-fit rounded-xl bg-zinc-700 font-bold text-white hover:bg-zinc-900">
                        <span> Learn More </span>
                    </div>
                </div>
            </div>
            <div className="flex ml-[-200px] mt-[-60px]">
                <img alt="cbe" src={require("../../../assets/images/g1.png")} className="m-auto" />
                <img alt="cbe" src={require("../../../assets/images/g2.png")} className="m-auto ml-4  relative top-[-126px]" />      
            </div>
        </div>
    )
}