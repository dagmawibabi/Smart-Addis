import { Button, Image } from "antd";
import SDG8 from "../../../assets/images/SDG/Goal_8.png";
import SDG9 from "../../../assets/images/SDG/Goal_9.png";
import SDG10 from "../../../assets/images/SDG/Goal_10.png";
import SDG17 from "../../../assets/images/SDG/Goal_17.png";

const sdgs = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        img: SDG8,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        img: SDG9,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        img: SDG10,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        img: SDG17,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
]

const IndividualSDG = ({title, img, content})=>{
    return(
        <div className="bg-slate-50 text-left p-4 w-full">
            <Image src={img} className="w-36 inline-block h-40 bg-sky-600 text-white" />
            <div className="w-2/3 ml-4 inline-block align-top">
                <h1 className="text-xl text-left font-bold font-Oxanium text-slate-800">{title}</h1>
                <p className="font-Oxanium text-left">
                    {content}
                </p>
                
            </div>
        </div>
    )
}

const MapToSDG = ()=>{
    return(
        <div className="bg-slate-50 p-8">
            <div className="w-full p-4 pl-6  h-auto border-2 bg-slate border-slate-600">
                <h1 className="text-left text-5xl font-bold font-Oxanium text-slate-800"> Map to SDG </h1>
                <div className="mt-2">
                    {sdgs.map((sdg)=>{
                        return <IndividualSDG title={sdg.title} content={sdg.content} img={sdg.img}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default MapToSDG;