export const NavBar = () => {
    return (
        <div className="flex justify-between px-3 py-5 bg-slate-900 text-white border-b-2 border-b-slate-800">
            <span className="px-3 font-medium text-xl"> Smart Addis </span>
            <div className="flex justify-between">
                <span className="px-3 font-medium text-xl"> Home </span>
                <span className="px-3 font-medium text-xl"> About </span>
                <span className="px-3 font-medium text-xl"> Smart Hubs </span>
                <span className="px-3 font-medium text-xl"> Contact </span>
            </div>
            <div className="flex">
                <div className="px-6 py-1 mx-2 text-xl bg-blue-500 rounded-md text-white">
                    <span> Login </span>
                </div>
                <div className="px-6 py-1 mx-2 text-xl bg-zinc-800 rounded-md text-white">
                    <span> Sign Up </span>
                </div>
            </div>
        </div>
    )
}