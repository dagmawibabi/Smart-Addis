export const Pillars = () => {
    let pillars = [
        {
            "title": "Smart Economy",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../assets/icons/profit.png"),
        },
        {
            "title": "Smart Environment",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../assets/icons/green-power.png"),
        },
        {
            "title": "Smart Governance",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../assets/icons/digital-government.png"),
        },
        {
            "title": "Smart Living",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../assets/icons/network.png"),
        },
        {
            "title": "Smart Mobility",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../assets/icons/electric-car.png"),
        },
        {
            "title": "Smart People",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../assets/icons/touch-id.png"),
        },
    ]
    return (
        <div className="text-center px-36 py-24 bg-slate-50">
            <span className="font-bold text-4xl"> Pillars of Smart City </span> 
            <p className="font-medium text-lg mt-4"> Here are all the different sectors and fields that build up the pillars of a smart city. </p>
            <div className="grid grid-cols-3 py-16">
                {
                    pillars.map((index, value) => {
                        return (
                            <div className="px-10 py-5 w-2/3 my-5 m-auto rounded-lg bg-white shadow-2xl">
                                <img alt="icon" src={pillars[value]["icon"]} className="w-20 m-auto pb-5" />
                                <span className="font-bold text-2xl"> {pillars[value]["title"]} </span> <br />
                                <span className="text-lg"> {pillars[value]["description"]} </span>
                                <div className="px-10 py-2 mt-6 bg-blue-500 rounded-lg text-white">
                                    <span> Read More </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>            
        </div>
    )
}