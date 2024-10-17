
"use client"
import { motion } from "framer-motion";
export default function Vision() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Vision</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">Jesús (un plantador de sueños y visionario) les llamó, diciendo: ¡Vengan y síganme... que voy a convertirlos en pescadores de hombres!
          <span className="text-base italic font-bold text-blue-600"> Marcos 1.17 (LBD)</span>
        </p>
      </motion.div>


      <motion.div className="mt-6">El diccionario define el concepto visión como “punto de vista particular sobre un tema y asunto
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">Una visión sin motivación, es una ilusión
        </p>
      </motion.div>
    </div>
  );
}
