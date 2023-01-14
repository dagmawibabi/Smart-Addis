import React, { useEffect } from 'react'
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 pb-5">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-20 pb-16">
                <span className="font-bold text-8xl font-bold font-Oxanium"> About </span>
            </div>
        </div>
    )
}

export default About