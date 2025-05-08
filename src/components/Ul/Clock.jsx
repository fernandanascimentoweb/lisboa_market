import React, { useEffect, useRef, useState } from 'react'

const Clock = () => {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval = useRef(null);

    const countDown = () => {

        const destination = new Date('Jan 28, 2026').getTime();

        interval.current = setInterval(()=> {

            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24));
            const hours = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((different % (1000 * 60)) / 1000);

            if(destination <= 0) clearInterval(interval.current) 
                else {
                    setDays(days)
                    setHours(hours)
                    setMinutes(minutes)
                    setSeconds(seconds)
            }
        }, 1000)
    };

    useEffect(() => {
        countDown();
        return () => clearInterval(interval.current);
    }, []);



  return (
    <div className='clock_wrapper d-flex align-items-center gap-2'>
        <div className="clock_data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{days}</h1>
                <h5 className='text-white fs-6'>Dia</h5>
            </div>

            <span className='text-white fs-3'> : </span>
        </div>
        
        <div className="clock_data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{hours}</h1>
                <h5 className='text-white fs-6'>Hora</h5>
            </div>

            <span className='text-white fs-3'> : </span>
        </div>

        <div className="clock_data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{minutes}</h1>
                <h5 className='text-white fs-6'>Minuto</h5>
            </div>

            <span className='text-white fs-3'> : </span>
        </div>

        <div className="clock_data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{seconds}</h1>
                <h5 className='text-white fs-6'>Segundo</h5>
            </div>

        </div>




    </div>
  )
}

export default Clock