import React, { useEffect } from 'react'
import { Image } from 'antd'
import Logo from '../../../assets/images/AAlogo.png'

const Individualsectors = () => {
    return(
        <div className='shadow-sm w-80 h-120 border py-10'>
            <Image src={Logo} height="50" preview={false}/>
            <div className='px-4 py-4'>
                <p> Economic Sector</p>
            </div>
        </div>
    )
}

const Sectors = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 pb-5">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-20 pb-16">
                    <span className="font-bold text-8xl font-bold font-Oxanium"> Sectors </span>
                </div>
            </div>
            <div className='px-24 mt-10 mb-10'>
                <div className='grid grid-cols-3 gap-4'>
                    <Individualsectors />
                    <Individualsectors />
                    <Individualsectors />
                    <Individualsectors />
                    <Individualsectors />
                    <Individualsectors />
                    
                </div>
            </div>
        </div>
    )
}

export default Sectors