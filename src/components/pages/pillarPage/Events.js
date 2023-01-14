import { Button, Image } from "antd";

const IndividualEvent = ()=>{
    return(
        <div className="bg-slate-50 text-left p-4 w-full">
            <div className="w-36 inline-block h-40 bg-sky-600 text-white">
                <div className="w-full flex justify-center">
                    <div className="flex mt-2 items-center space-evenly gap-2">
                        <div className="rounded-full bg-white h-2 w-2"></div>
                        <div className="rounded-full bg-white h-2 w-2"></div>
                        <div className="rounded-full bg-white h-2 w-2"></div>
                        <div className="rounded-full bg-white h-2 w-2"></div>
                        <div className="rounded-full bg-white h-2 w-2"></div>
                    </div>
                </div>
                <h1 className="text-7xl font-Oxanium font-bold flex justify-center mt-2">6</h1>
                <h1 className="text-2xl font-Oxanium font-bold flex justify-center">JUL</h1>
                <h1 className="text-2xl mt-[-5px] font-Oxanium font-bold flex justify-center">2021</h1>
            </div>
            <div className="w-2/3 ml-4 inline-block align-top">
                <h1 className="text-xl text-left font-bold font-Oxanium text-slate-800">Lorem ipsum dolor sit amet, consectetur </h1>
                <p className="font-Oxanium text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
                <Button className="bg-slate-800 mt-4 text-white font-Oxanium font-bold">Read More</Button>
            </div>
        </div>
    )
}



const Events = ()=>{
    return(
        <div className="bg-slate-50 p-8">
            <div className="w-full p-4 pl-6  h-auto border-2 bg-slate border-slate-600">
                <h1 className="text-left text-5xl font-bold font-Oxanium text-slate-800"> Events </h1>
                <div className="mt-2">
                    <IndividualEvent/>
                    <IndividualEvent/>
                    <IndividualEvent/>
                </div>
            </div>
        </div>
    )
}

export default Events;