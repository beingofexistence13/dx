"use client"

import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';

const Info = () => {
    return (
        <section className="info h-[130vh] w-full max-w-[100%] overflow-x-hidden overflow-y-auto relative bg-slate-100">

            <motion.div drag
                dragElastic={0.2} className="blurry_gradient_top h-[550px] w-[550px] rounded-full absolute top-10 left-0 z-[0]"></motion.div>
            <motion.div drag
                dragElastic={0.2} className="blurry_gradient_bottom h-[550px] w-[550px] rounded-full absolute bottom-10 right-0 z-[0]"></motion.div>

            <div className="info_main_container max-w-xl mx-auto flex flex-col items-center justify-center mt-32">
                {/* FeatureShotcut Rounded Border -  h-12 w-[250px] rounded-full flex flex-row items-center justify-center */}
                <div className="glass feature_shotcut_container flex items-center justify-center">
                    <span className="feature_shotcut_text">Introducing Dx asks</span>
                    <ChevronRight />
                </div>
                {/* Gradient Title */}
                <div className="gradient_title flex items-center justify-center space-x-3">
                    <span className="text-5xl">Plan.</span>
                    <span className="text-5xl">Develop.</span>
                    <span className="text-5xl">Ship.</span>
                </div>

                {/* Muted Description */}
                {/* Blured Intereactive Livewallpaper(related to the project offcourse) */}
            </div>


        </section>
    )
}

export default Info