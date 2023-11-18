"use client"
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

export default function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
  );
}

// import { info } from "console";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import React from "react";

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <motion.div
//         drag
//         whileDrag={{ scale: 1.2 }}
//         dragConstraints={{ left: 300, right: 300 }}
//         dragElastic={0.2}
//         onDrag={
//           (event, info) => console.log(info.point.x, info.point.y)
//         }
//         onDragEnd={
//           (event, info) => console.log(info.point.x, info.point.y)
//         }
//         dragDirectionLock
//         onDirectionLock={axis => console.log(axis)}
//         layout
//         data-isOpen={isOpen}
//         initial={{ borderRadius: 50 }}
//         className="parent"
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.2 }}
//         whileTap={{ scale: 0.9 }}
//         transition={{ type: "spring", stiffness: 400, damping: 17 }}

//       >
//         <motion.div layout className="child" />
//       </motion.div>
//     </>

//   );
// }