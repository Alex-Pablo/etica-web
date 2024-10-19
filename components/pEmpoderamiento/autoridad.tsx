"use client"
import { motion } from "framer-motion";
export default function Autoridad() {
  return (
    <div className="mt-8 pl-4">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Autoridad</h3>

      <motion.div className="block mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BÍBLICO</span>
        <p className="text-base italic font-semibold">
          Toda autoridad me ha sido dada en el cielo y en la tierra.
          <span className="text-base italic font-bold text-blue-600">
            Mateo 28:18
          </span>
        </p>
      </motion.div>

      <motion.div className="mt-6">
        <p className="font-medium">Definición</p>
        <p>
          Poder que gobierna o ejerce el mando.
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          “La brújula es una excelente metáfora física de los principios porque siempre señala el norte. La clave, para mantener una elevada autoridad moral, es seguir continuamente unos principios de verdadero norte.”
          <span className="font-medium">Stephen Covey</span>
        </p>
      </motion.div>
    </div>
  );
}
