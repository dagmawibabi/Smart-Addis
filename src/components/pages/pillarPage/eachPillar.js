import { useEffect } from "react";
import { EachNews } from "./eachNews"
import { EachPillarHeader } from "./eachPillarHeader"
import { CarryOutOutlined, GlobalOutlined, ProjectOutlined, ScheduleOutlined, TeamOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';
import Events from './Events';
import MapToSDG from './SDG'
import { Button } from 'antd';

let news = [
    {
        "image": "",
        "title": "This is the current news",
        "description": "Labore incididunt uat id duis quis. eu eu aliquip pariatur est adipisicing non. In pariatur adipisicing anim incididunt ut consectetur. Lorem ex et occaecat consequat ut Lorem Lorem ad Lorem velit dolor pariatur. Pariatur magna cupidatat consequat fugiat tempor et nisi.",
    },
]

const Goals = () => {
    return(
        <div className="py-10 inline-block ml-10 w-full">
            <div className="text-left px-2 bg-slate-50">
                <h1 className="mb-6 text-5xl font-bold font-Oxanium text-slate-800"> Goals </h1>
                <div className="border-2 border-gray-600 p-6 h-68 w-full">
                    <h1 className="text-lg font-Oxanium text-gray-600 font-bold">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    </p>
                    <Button className="mt-4 bg-slate-800 text-white font-bold h-10">Read More</Button>
                </div>
            </div> 
        </div>
    )
}

const StakeHolders = ()=>{
    return(
        <div className="py-10 inline-block ml-10 w-full">
            <div className="text-left px-2 py-24 bg-slate-50 mt-10">
                <h1 className="mb-6 text-5xl font-bold font-Oxanium text-slate-800"> Stakeholders </h1>
                <div className="border-2 border-gray-600 p-6 h-72 w-full">
                    <h1 className="text-lg font-Oxanium text-gray-600 font-bold">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    </p>
                    <div className="float-right p-2 bg-slate-700 align-center w-full mt-2 rounded-lg">
                        <GlobalOutlined className="text-2xl text-gray-100"/>
                        <a href="https://www.google.com" className="text-gray-100 ml-2">www.google.com</a>
                        <PhoneOutlined className="text-2xl text-gray-100 ml-4"/>
                        <a href="tel:+251911111111" className="text-gray-100 ml-2">+251911111111</a>
                        <MailOutlined className="text-2xl text-gray-100 ml-4"/>
                        <a href="mailto:mail@google.com" className="text-gray-100 ml-2">
                            mail@google.com
                        </a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

const News = () =>{
    return(
        <div className="bg-slate-50 p-8">
            <div className="w-full p-4 pl-6  h-auto border-2 bg-slate border-slate-600">
                <div className="py-10">
                    <span className="text-4xl font-bold text-blue-500 flex justify-center"> News </span> 
                    <EachNews news={news[0]} />
                    <EachNews news={news[0]} />
                    <EachNews news={news[0]} />
                    <EachNews news={news[0]} />
                </div>
            </div>
        </div>
    )
}

export const EachPillar = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    

    let vendors = [
        {
            "title": "Company One",
            "description": "Creating smart and sustainable economy for the citizen of Addis AbabaCreating smart and sustainable economy for the citizen of Addis AbabaCreating smart and sustainable economy for the citizen of Addis AbabaCreating smart and sustainable economy for the citizen of Addis AbabaCreating smart and sustainable economy for the citizen of Addis Ababa",
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
            <EachPillarHeader title={"Smart Economy"} s1={"Finance"} s2={"Trade"} s3={"Technology"} s4={"Economy"}/>
            <div className="bg-slate-100 px-14">
                <div className="sticky top-14 mt-14 mb-60 z-10 h-60 w-[25%] inline-block align-top">
                    <p className="text-left ml-8">
                    To make Addis Ababa an economically thriving city through business digitization. Here are all the different companies and organizations providing smart services.
                    </p>
                    <div className="ml-8">
                        <div className="mt-10">
                            <div className="space-between text-left">
                                <CarryOutOutlined className="text-slate-400 text-2xl inline-block"/>
                                <p className="text-xl inline-block ml-4 align-bottom pb-0">Goals</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="space-between text-left">
                                <GlobalOutlined className="text-slate-400 text-2xl inline-block"/>
                                <p className="text-xl inline-block ml-4 align-bottom pb-0">SDG Maping</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="space-between text-left">
                                <TeamOutlined className="text-slate-400 text-2xl inline-block"/>
                                <p className="text-xl inline-block ml-4 align-bottom pb-0">Stakeholders</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="space-between text-left">
                                <ProjectOutlined className="text-slate-400 text-2xl inline-block"/>
                                <p className="text-xl inline-block ml-4 align-bottom pb-0">Projects</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="space-between text-left">
                                <ScheduleOutlined className="text-slate-400 text-2xl inline-block"/>
                                <p className="text-xl inline-block ml-4 align-bottom pb-0">News</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="space-between text-left">
                                <EnvironmentOutlined className="text-slate-400 text-2xl inline-block"/>
                                <p className="text-xl inline-block ml-4 align-bottom pb-0">Events</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="space-between text-left">
                                <MailOutlined className="text-slate-400 text-2xl inline-block"/>
                                <p className="text-xl inline-block ml-4 align-bottom pb-0">Calls</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[71%] inline-block ml-2">
                    <Goals />
                    <StakeHolders />
                    <div className="bg-slate-50 p-8">
                        <div className="w-full p-4 pl-6  h-auto border-2 bg-slate border-slate-600">
                            <div className="inline-block">
                                <div className="text-left px-6 bg-slate-50">
                                    <span className="text-5xl font-bold font-Oxanium text-slate-800"> Vendors From This Sector </span> 
                                    <p className="font-medium text-lg mt-4"> Here are all the different companies and organizations providing smart services. </p>
                                    <div className="py-16">
                                        {
                                            vendors.map((index, value) => {
                                                return (
                                                    <div className="px-8 py-5 my-5 inline-block w-full rounded-lg bg-white shadow-xl hover:shadow-2xl" >
                                                        <img alt="icon" src={vendors[value]["icon"]} className="w-20 inline-block" />
                                                        <div className="inline-block">
                                                            <p className="font-bold text-4xl mb-4"> {vendors[value]["title"]} </p>
                                                            <p className="text-lg"> {vendors[value]["description"]} </p>
                                                        </div>
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
                            </div>
                        </div>
                    </div>  
                    <News />
                    <Events />
                    <MapToSDG />
                </div>
                           
            </div>
        </div>
    )
}