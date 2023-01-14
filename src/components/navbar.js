import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div className="flex justify-between py-5 text-white border-b-slate-800 w-full bg-gradient-to-r from-slate-900 to-slate-800 px-20">
            <Link to="/">
                <span className="font-medium"> 
                    <img alt="Logo" src={require("../assets/images/AAlogo.png")} />
                </span>
            </Link>
            <div className="flex justify-between mt-6">
                <Link to="/">
                    <span className="px-3 font-medium hover:text-blue-400"> Home </span>
                </Link>
                <Link to="/About">
                    <span className="px-3 font-medium hover:text-blue-400"> About </span>
                </Link>
                <Link to="/Smarthubs">
                    <span className="px-3 font-medium hover:text-blue-400"> Smart Hubs </span>
                </Link>
                <Link to="/Sectors">
                    <span className="px-3 font-medium hover:text-blue-400"> Sectors </span>
                </Link>
                {/* <Link to="/Vendors">
                    <span className="px-3 font-medium hover:text-blue-400"> Vendors </span>
                </Link> */}
                <Link to="/survey">
                    <span className="px-3 font-medium hover:text-blue-400"> Survey </span>
                </Link>
            </div>
            <div className="flex mt-6">
                <div className="px-6 py-1 mx-2 h-8 bg-blue-500 rounded-md text-white hover:bg-blue-700">
                    <span> Login </span>
                </div>
                <div className="px-6 py-1 mx-2 h-8 bg-zinc-800 rounded-md text-white hover:bg-zinc-900">
                    <span> Sign Up </span>
                </div>
            </div>
        </div>
    )
}