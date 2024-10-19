"use client"
import { motion } from "framer-motion";
export default function Conviccion() {
  return (
    <div className="mt-8 pl-4">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Convicción</h3>

      <motion.div className="block mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BÍBLICO</span>
        <p className="text-base italic font-semibold">
          Pero nosotros no somos de los que retroceden para perdición, sino de los que tienen fe para preservación del alma.
          <span className="text-base italic font-bold text-blue-600">
            Hebreos 10:39
          </span>
        </p>
      </motion.div>

      <motion.div className="mt-6">
        <p className="font-medium">Definición</p>
        <p>
          Idea religiosa, ética o política a la que se está fuertemente adherido.
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          “Cuando se tiene principios claros, es fácil tomar decisiones.”
        </p>
        <p className="italic pl-8 mt-2">
          “Hacer lo correcto, a cualquier costo, es más importante que ganar a toda costa.”
          <span className="font-medium">Steve Wilstein</span>
        </p>
      </motion.div>
    </div>
  );
}
