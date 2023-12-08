import React from 'react'

const Info = () => {
    return (
        <section className="info h-[150vh] w-full relative">

            <div className="blurry_gradient h-[450px] w-[450px] rounded-full absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-[0]"></div>
            <div className="blurry_gradient h-[450px] w-[450px] rounded-full absolute translate-x-[-50%] translate-y-[-50%] top-[0%] left-[0%] z-[0]"></div>
            <div className="blurry_gradient h-[450px] w-[450px] rounded-full absolute translate-x-[-50%] translate-y-[-50%] top-[25%] left-[25%] z-[0]"></div>
            {/* <div className="glass h-full w-full"></div> */}

        </section>
    )
}

export default Info