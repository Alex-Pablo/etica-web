

"use client"
import { motion } from "framer-motion";
export default function Honestidad() {
  return (
    <div className="mt-8 pl-4">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Honestidad</h3>

      <motion.div className="block mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BÍBLICO</span>
        <p className="text-base italic font-semibold">
          El justo aborrece la palabra de mentira, pero el impío se hace odioso e infame.
          <span className="text-base italic font-bold text-blue-600">
            Proverbios 13:5
          </span>
        </p>
      </motion.div>

      <motion.div className="mt-6">
        <p className="font-medium">Definición</p>
        <p>
          Cualidad de honesto (decente, decoroso).
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          “La persona honesta vive lo que predica y habla lo que piensa; es coherente con lo que dice, hace y piensa.”
          <br />
          “Decir la verdad no implica ser irrespetuoso con nadie. La persona que miente se hace daño a sí misma.”
          <span className="font-medium">Luis Castellanos</span>
        </p>
      </motion.div>
    </div>
  );
}
