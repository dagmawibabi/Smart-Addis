import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="flex justify-between px-3 py-5 bg-slate-900 text-white border-b-2 border-b-slate-800">
            <Link to="/">
                <span className="px-3 font-medium text-xl"> Smart Addis </span>
            </Link>
            <div className="flex justify-between">
                <Link to="/">
                    <span className="px-3 font-medium text-xl hover:text-blue-400"> Home </span>
                </Link>
                <span className="px-3 font-medium text-xl hover:text-blue-400"> About </span>
                <span className="px-3 font-medium text-xl hover:text-blue-400"> Smart Hubs </span>
                <span className="px-3 font-medium text-xl hover:text-blue-400"> Contact </span>
            </div>
            <div className="flex">
                <div className="px-6 py-1 mx-2 text-xl bg-blue-500 rounded-md text-white hover:bg-blue-700">
                    <span> Login </span>
                </div>
                <div className="px-6 py-1 mx-2 text-xl bg-zinc-800 rounded-md text-white hover:bg-zinc-900">
                    <span> Sign Up </span>
                </div>
            </div>
        </div>
    )
}