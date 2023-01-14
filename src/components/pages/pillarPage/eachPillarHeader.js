export const EachPillarHeader = ({title, s1, s2, s3, s4}) => {
    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 pb-5">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-20 pb-16">
                <span className="font-bold text-8xl font-bold font-Oxanium"> {title} </span>
            </div>
            <div className="flex justify-center">
                <div className="bg-gradient-to-r from-slate-700 to-slate-900 flex justify-center px-26 my-2 relative top-[60px]">
                    <div className="py-6 px-24 text-white font-medium text-xl  hover:bg-slate-700">
                        <span> {s1} </span>
                    </div>
                    <div className="py-6 px-24 text-white font-medium text-xl hover:bg-slate-700">
                        <span> {s2} </span>
                    </div>
                    <div className="py-6 px-24 text-white font-medium text-xl hover:bg-slate-700">
                        <span> {s3} </span>
                    </div>
                    <div className="py-6 px-24 text-white font-medium text-xl hover:bg-slate-700">
                        <span> {s4} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}