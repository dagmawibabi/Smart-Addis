import { EachNews } from "./eachNews"
import { EachPillarHeader } from "./eachPillarHeader"

export const EachPillar = () => {
    let news = [
        {
            "image": "",
            "title": "This is the current news",
            "description": "Labore incididunt uat id duis quis. eu eu aliquip pariatur est adipisicing non. In pariatur adipisicing anim incididunt ut consectetur. Lorem ex et occaecat consequat ut Lorem Lorem ad Lorem velit dolor pariatur. Pariatur magna cupidatat consequat fugiat tempor et nisi.",
        },
    ]

    let vendors = [
        {
            "title": "Company One",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../../../assets/icons/profit.png"),
        },
        {
            "title": "Company Two",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../../../assets/icons/green-power.png"),
        },
        {
            "title": "Company Three",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../../../assets/icons/digital-government.png"),
        },
        {
            "title": "Company Four",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../../../assets/icons/network.png"),
        },
        {
            "title": "Company Five",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../../../assets/icons/electric-car.png"),
        },
        {
            "title": "Company Six",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../../../assets/icons/touch-id.png"),
        },
    ];    

    return (
        <div>
            <EachPillarHeader />
            <div className="text-center px-36 py-24 bg-slate-50">
                <span className="font-bold text-4xl"> Vendors From This Sector </span> 
                <p className="font-medium text-lg mt-4"> Here are all the different companies and organizations providing smart services. </p>
                <div className="grid grid-cols-3 py-16">
                    {
                        vendors.map((index, value) => {
                            return (
                                <div className="px-8 py-5 w-2/3 my-5 m-auto rounded-lg bg-white shadow-xl hover:shadow-2xl" >
                                    <img alt="icon" src={vendors[value]["icon"]} className="w-20 m-auto pb-5" />
                                    <span className="font-bold text-2xl"> {vendors[value]["title"]} </span> <br />
                                    <span className="text-lg"> {vendors[value]["description"]} </span>
                                    {/* <div className="px-10 py-2 mt-6 bg-blue-500 rounded-lg text-white hover:bg-blue-700 ">
                                        <span> Read More </span>
                                    </div> */}
                                    <div className="px-10 py-2 mt-6 bg-slate-50 rounded-lg flex justify-between" > 
                                        <img alt="icon" src={require("../../../assets/icons/gmail.png")} className="w-6 hover:scale-125" />
                                        <img alt="icon" src={require("../../../assets/icons/instagram.png")} className="w-6 hover:scale-125" />
                                        <img alt="icon" src={require("../../../assets/icons/telegram.png")} className="w-6 hover:scale-125" />
                                        <img alt="icon" src={require("../../../assets/icons/phone-call.png")} className="w-6 hover:scale-125" />
                                    </div>
                                </div>                            
                            )
                        })
                    }
                </div>            
            </div>            
            <div className="bg-slate-100 py-10">
                <span className="text-4xl font-bold text-blue-500 flex justify-center"> News </span> 
                <EachNews news={news[0]} />
                <EachNews news={news[0]} />
                <EachNews news={news[0]} />
                <EachNews news={news[0]} />
            </div>

        </div>
    )
}