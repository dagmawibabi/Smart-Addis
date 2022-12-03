export const MVG = () => {
    let mvg = [
        {
            "title": "Mission",
            "description": "To strengthen tech-oriented transformational leaderships that fosters collaboration across institutions and facilitate everyone to participate by advocating relevant technologies",
            // "icon": require("../assets/icons/")
        },
        {
            "title": "Vision",
            "description": "To strengthen tech-oriented transformational leaderships that fosters collaboration across institutions and facilitate everyone to participate by advocating relevant technologies",
            // "icon": require("../assets/icons/")
        },
        {
            "title": "Goals",
            "description": "To strengthen tech-oriented transformational leaderships that fosters collaboration across institutions and facilitate everyone to participate by advocating relevant technologies",
            // "icon": require("../assets/icons/")
        },
    ]
    return (
        <div className="flex justify-center px-36 py-60 bg-slate-100">
            {
                mvg.map((index, value) => {
                    return (
                        <div className="w-3/12 mx-10 shadow-lg px-10 py-10 bg-white rounded-md">
                            <span className="font-bold text-3xl"> {mvg[value]["title"]} </span>
                            <p className="text-center pt-5"> {mvg[value]["description"]} </p>
                        </div>
                    )
                })
            }

        </div>
    )
}