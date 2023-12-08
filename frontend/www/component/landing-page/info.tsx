"use client"

import { motion } from "framer-motion";

const Info = () => {
    return (
        <section className="info h-[130vh] w-full max-w-[100%] overflow-x-hidden overflow-y-auto relative bg-slate-100">

            <motion.div drag
                dragElastic={0.2} className="blurry_gradient_top h-[550px] w-[550px] rounded-full absolute top-10 left-0 z-[0]"></motion.div>
            <motion.div drag
                dragElastic={0.2} className="blurry_gradient_bottom h-[550px] w-[550px] rounded-full absolute bottom-10 right-0 z-[0]"></motion.div>
            {/* Community Rounded Border */}
            {/* Gradient Title */}
            {/* Muted Description */}
            {/* Blured Intereactive Livewallpaper(related to the project offcourse) */}

        </section>
    )
}

export default Info