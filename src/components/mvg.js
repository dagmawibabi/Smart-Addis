export const MVG = () => {
    let mvg = [
        {
            "title": "Mission",
            "description": "To strengthen tech-oriented transformational leaderships that fosters collaboration across institutions and facilitate everyone to participate by advocating relevant technologies",
            "icon": require("../assets/icons/mission.png")
        },
        {
            "title": "Vision",
            "description": "To strengthen tech-oriented transformational leaderships that fosters collaboration across institutions and facilitate everyone to participate by advocating relevant technologies",
            "icon": require("../assets/icons/vision.png")
        },
        {
            "title": "Goals",
            "description": "To strengthen tech-oriented transformational leaderships that fosters collaboration across institutions and facilitate everyone to participate by advocating relevant technologies",
            "icon": require("../assets/icons/task-list.png")
        },
    ]
    return (
        <div className="text-center px-36 py-24 bg-slate-100">
            <span className="font-bold text-4xl"> Our Mission, Vison and Goals </span> 
            <p className="font-medium text-lg mt-4"> Here are all the core values we stand by to make the dreams come true. </p>
            <div className="flex justify-center py-20 bg-slate-100">
                {
                    mvg.map((index, value) => {
                        return (
                            <div className="w-3/12 mx-10 shadow-lg px-10 py-14 bg-white rounded-lg">
                                <img alt="icon" src={mvg[value]["icon"]} className="w-20 m-auto pb-5" />
                                <span className="font-bold text-3xl"> {mvg[value]["title"]} </span>
                                <p className="text-center pt-5"> {mvg[value]["description"]} </p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}