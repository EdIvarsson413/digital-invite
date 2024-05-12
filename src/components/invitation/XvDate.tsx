'use client'
import { useEffect, useState } from "react"

export default function XvDate({ dafoe }: any) {
    const [ dayReached, setDayReached ] = useState(false);
    const [ timeCount, setTimeCount ] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        secons: 0
    })
    
    useEffect(() => {
        const day = new Date('June 1, 2024 16:46:30').getTime();
        const intervalId = setInterval(() => {
            // Get time now
            const now = new Date().getTime();
            const distance = day - now;
    
            if (distance > 0) {
                // Get respective numbers
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
                setTimeCount({
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    secons: seconds
                });
            } else {
                // If the day has reached, it mark a flag
                clearInterval(intervalId);
                setDayReached(true);
            }
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="" onContextMenu={ (e) => e.preventDefault() }>
            <div className="countdown md:bg-[url(/xv/imgs/countdown.jpg)] h-[400px] bg-cover">
                {/* Place text in bottom-middle position */}
                <div className={`${dafoe.className} grid grid-cols-1 justify-items-center content-end h-[300px] text-center text-5xl text-white text-shadow-[0px_0px_30px_#fff]`}>
                    <p className="text-3xl">Faltan</p>
                    <p className="block">{timeCount.days} días &nbsp;{timeCount.hours} hrs &nbsp;{timeCount.minutes} min &nbsp;{timeCount.secons} segs</p>
                </div>
            </div>
        </div>
    )
}