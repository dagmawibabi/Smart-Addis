export const Footer = () => {
    return (
        <div>
            <div className="flex justify-between bg-zinc-900 text-white px-52 py-10">
                <div className="block">
                    <span className="block text-start text-white py-1 font-bold text-lg"> Useful Links </span> 
                    <span className="block text-start text-slate-300 py-1 px-4"> Home </span> 
                    <span className="block text-start text-slate-300 py-1 px-4"> About </span> 
                    <span className="block text-start text-slate-300 py-1 px-4"> Smart Hubs </span> 
                    <span className="block text-start text-slate-300 py-1 px-4"> Contact </span> 
                    <span className="block text-start text-slate-300 py-1 px-4"> Privacy Policy </span> 
                    <span className="block text-start text-slate-300 py-1 px-4"> Terms & Conditions </span> 
                    <span className="block text-start text-slate-300 py-1 px-4"> FAQ </span> 
                </div>
                <div>
                    <span className="block text-start text-white py-1 font-bold text-lg mb-3"> Contact Us </span> 
                    <div className="flex justify-start ">
                        <img 
                            alt="icon" 
                            src={require("../assets/icons/phone-call.png")} 
                            className="w-5 h-5 my-auto" 
                        /> 
                        <span className="block text-start text-slate-300 py-1 px-3 my-auto"> +251912345678 </span> 
                    </div>
                    <div className="flex justify-start ">
                        <img 
                            alt="icon" 
                            src={require("../assets/icons/gmail.png")} 
                            className="w-5 h-5 my-auto" 
                        /> 
                        <span className="block text-start text-slate-300 py-1 px-3 my-auto"> smartaddis@gmail.com </span> 
                    </div>
                    <div className="flex justify-start ">
                        <img 
                            alt="icon" 
                            src={require("../assets/icons/placeholder.png")} 
                            className="w-5 h-5 my-auto" 
                        /> 
                        <span className="block text-start text-slate-300 py-1 px-3 my-auto"> Bole, Addis Ababa</span> 
                    </div>
                </div>
                <div>
                    <span className="block text-start text-white py-1 font-bold text-lg"> Feedback </span> 
                    <input type={"text"} placeholder="name" className="block my-1 px-2 py-1 rounded-sm placeholder-white bg-zinc-900 border-2 border-zinc-600"></input>
                    <input type={"text"} placeholder="email" className="block my-1 px-2 py-1 rounded-sm placeholder-white bg-zinc-900 border-2 border-zinc-600"></input>
                    <textarea placeholder="message" className="block my-1 px-2 py-1 rounded-sm placeholder-white bg-zinc-900 border-2 border-zinc-600"></textarea>
                    <div className="rounded-lg bg-blue-500 px-5 py-1 mt-3 text-white hover:bg-blue-700">
                        <span> Submit </span>
                    </div>
                </div>
            </div>
            {/* END NOTE */}
            <div className="flex justify-center bg-zinc-800 text-white px-10 py-2">
                <span> Smart Addis &copy; 2022 </span>
            </div>
        </div>
    )
}