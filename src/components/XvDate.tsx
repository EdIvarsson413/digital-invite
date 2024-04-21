'use client'

import { useEffect, useState } from "react"

// Final day

export default function XvDate({ dafoe }: any) {
    const [ dayReached, setDayReached ] = useState(false);
    const [ timeCount, setTimeCount ] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        secons: 0
    })
    
    useEffect(() => {
        const day = new Date('April 25, 2024 16:46:30').getTime();
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
        <div className="md:w-[81%] md:mx-auto">
            <div className="w-full h-[500px] bg-purple-400">
                <div className={`${dafoe.className} text-5xl`}>
                    {
                        dayReached ? (
                            <p>¡Es Hoy!</p>) : (
                            <>
                                <p>Faltan</p>
                                <p className="block">{timeCount.days} días &nbsp;{timeCount.hours} hrs &nbsp;{timeCount.minutes} min &nbsp;{timeCount.secons} segs</p>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}