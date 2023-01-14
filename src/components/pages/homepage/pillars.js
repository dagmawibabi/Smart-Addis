import { Link } from 'react-router-dom';

export const Pillars = () => {
    let pillars = [
        {
            "title": "Smart Economy",
            "description": "Creating smart and sustainable economy for the citizen of Addis Ababa",
            "icon": require("../../../assets/icons/profit.png"),
        },
        {
            "title": "Smart Environment",
            "description": "Creating livable environment can be achieved through smart technology implementation and innovation.",
            "icon": require("../../../assets/icons/green-power.png"),
        },
        {
            "title": "Smart Governance",
            "description": "Sustainable development and an improved quality of life in a smart governance system",
            "icon": require("../../../assets/icons/digital-government.png"),
        },
        {
            "title": "Smart Living",
            "description": "Striving to create a smart living space, with technological advancement and quality infrastructure.",
            "icon": require("../../../assets/icons/network.png"),
        },
        {
            "title": "Smart Mobility",
            "description": "Creating effective transportation systems, innovative infrastructure, and dedicated policy initiatives.",
            "icon": require("../../../assets/icons/electric-car.png"),
        },
        {
            "title": "Smart People",
            "description": "Creating fascilities that can boast to create a vibrant community of smart, ambitious people eager to make their mark.",
            "icon": require("../../../assets/icons/touch-id.png"),
        },
    ]
    return (
        <div className="text-center px-36 py-24 bg-slate-50">
            <span className="font-bold text-4xl"> Pillars of Smart City </span> 
            <p className="font-medium text-lg mt-4"> Here are all the different sectors and fields that build up the pillars of a smart city. </p>
            <div className="grid auto-rows-max grid-cols-3 gap-y-8 gap-x-12 py-16">
                {
                    pillars.map((index, value) => {
                        return (
                            <Link to="/pillar" key={index} className="h-full mb-4"> 
                                <div className="px-4 relative h-[98%] py-5 my-5 m-auto rounded-lg bg-white shadow-xl hover:shadow-2xl hover:scale-110 duration-100" >
                                    <img alt="icon" src={pillars[value]["icon"]} className="w-20 m-auto pb-5" />
                                    <span className="font-bold text-2xl"> {pillars[value]["title"]} </span> <br />
                                    <span className="text-lg"> {pillars[value]["description"]} </span>
                                    <div className='absolute bottom-4 flex justify-center w-full right-0'>
                                        <div className="px-10 py-2 mt- bg-blue-500 rounded-lg text-white hover:bg-blue-700 ">
                                            <span> Read More </span>
                                        </div>
                                    </div>
                                </div>                            
                            </Link>
                        )
                    })
                }
            </div>            
        </div>
    )
}